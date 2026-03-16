import { get } from 'svelte/store';
import { readerPosition, mostAdvancedReaderPosition } from '$lib/stores/reader-hints';

const COLUMN_GAP = 50;
const PROGRESS_BAR_HEIGHT = 80;
const VERTICAL_PADDING = 50;
const SWIPE_THRESHOLD = 0.2; // fraction of page width to commit a swipe
const TRANSITION_MS = 300;

export interface Paginator {
	// Bind these to DOM
	readonly viewport: HTMLElement | undefined;
	readonly content: HTMLElement | undefined;

	// Reactive state
	readonly pageIndex: number;
	readonly totalPages: number;
	readonly pageWidth: number;
	readonly pageHeight: number;
	readonly ready: boolean;

	// Derived styles
	readonly contentStyle: string;
	readonly viewportStyle: string;

	// Boundary callback — called when user tries to turn past first/last page
	onBoundaryReached: ((direction: 1 | -1) => void) | null;

	// Methods
	turnPage: (direction: 1 | -1) => boolean;
	goToPage: (index: number, animate?: boolean) => void;
	measure: () => void;
	destroy: () => void;

	// Touch handlers — wire to viewport
	handleTouchStart: (e: TouchEvent) => void;
	handleTouchMove: (e: TouchEvent) => void;
	handleTouchEnd: (e: TouchEvent) => void;

	// Position tracking
	updatePosition: (book: number, chapter: number) => void;
	getPageForParagraph: (paragraphIndex: number) => number;
}

export function createPaginator() {
	let viewport: HTMLElement | undefined = $state();
	let content: HTMLElement | undefined = $state();

	let pageIndex = $state(0);
	let totalPages = $state(1);
	let pageWidth = $state(0);
	let pageHeight = $state(0);

	// Touch/drag state
	let isDragging = $state(false);
	let dragOffset = $state(0);
	let touchStartX = 0;
	let touchStartY = 0;
	let touchIsHorizontal: boolean | null = null;

	// Boundary callback
	let onBoundaryReached: ((direction: 1 | -1) => void) | null = null;

	// ResizeObserver
	let resizeObserver: ResizeObserver | undefined;

	let ready = $derived(pageWidth > 0 && pageHeight > 0);

	let offset = $derived(pageIndex * (pageWidth + COLUMN_GAP) - dragOffset);

	let transition = $derived(
		isDragging ? 'none' : `transform ${TRANSITION_MS}ms cubic-bezier(0.33, 1, 0.68, 1)`
	);

	let contentStyle = $derived(
		ready
			? `columns: auto ${pageWidth}px; column-gap: ${COLUMN_GAP}px; column-rule: 1px solid #e5e7eb; height: ${pageHeight}px; transform: translateX(${-offset}px); transition: ${transition}; will-change: transform;`
			: ''
	);

	let viewportStyle = $derived(
		ready ? `height: ${pageHeight}px;` : ''
	);

	function measure() {
		if (!viewport || !content) return;

		// Measure from the content div — it reflects viewport padding,
		// so pageWidth matches the actual space columns fill
		const cw = content.getBoundingClientRect().width;
		const vh = window.innerHeight - PROGRESS_BAR_HEIGHT - VERTICAL_PADDING;

		pageWidth = Math.round(cw);
		pageHeight = Math.round(vh);

		// Content needs to be measured after columns are applied —
		// wait a frame for the browser to lay out columns
		requestAnimationFrame(() => {
			if (!content || !pageWidth) return;
			const newTotal = Math.max(1, Math.round(content.scrollWidth / (pageWidth + COLUMN_GAP)));
			totalPages = newTotal;
			// Clamp current page
			if (pageIndex >= newTotal) {
				pageIndex = newTotal - 1;
			}
		});
	}

	function turnPage(direction: 1 | -1): boolean {
		const next = pageIndex + direction;
		if (next < 0 || next >= totalPages) {
			onBoundaryReached?.(direction);
			return false;
		}
		pageIndex = next;
		return true;
	}

	function goToPage(index: number, _animate = true) {
		pageIndex = Math.max(0, Math.min(index, totalPages - 1));
	}

	// Touch gesture handlers
	function handleTouchStart(e: TouchEvent) {
		if (e.touches.length !== 1) return;
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
		touchIsHorizontal = null;
		isDragging = true;
		dragOffset = 0;
	}

	function handleTouchMove(e: TouchEvent) {
		if (!isDragging || e.touches.length !== 1) return;
		const dx = e.touches[0].clientX - touchStartX;
		const dy = e.touches[0].clientY - touchStartY;

		// Determine axis lock on first significant move
		if (touchIsHorizontal === null) {
			if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
				touchIsHorizontal = Math.abs(dx) > Math.abs(dy);
			}
			if (!touchIsHorizontal) return;
		}

		if (!touchIsHorizontal) return;

		e.preventDefault();

		// Rubber-band resistance at page boundaries
		const atBoundary = (pageIndex === 0 && dx > 0) || (pageIndex >= totalPages - 1 && dx < 0);
		dragOffset = atBoundary ? dx * 0.3 : dx;
	}

	function handleTouchEnd(_e: TouchEvent) {
		if (!isDragging) return;
		isDragging = false;

		const threshold = pageWidth * SWIPE_THRESHOLD;
		if (dragOffset > threshold) {
			if (pageIndex > 0) {
				pageIndex -= 1;
			} else {
				onBoundaryReached?.(-1);
			}
		} else if (dragOffset < -threshold) {
			if (pageIndex < totalPages - 1) {
				pageIndex += 1;
			} else {
				onBoundaryReached?.(1);
			}
		}
		// else: snap back to current page (dragOffset resets, transition kicks in)
		dragOffset = 0;
	}

	// Position tracking: find first visible paragraph by offsetLeft math
	function updatePosition(book: number, chapter: number) {
		if (!content || !pageWidth) return;
		const paragraphs = content.querySelectorAll('p');
		if (!paragraphs.length) return;

		const visibleStart = pageIndex * (pageWidth + COLUMN_GAP);
		const visibleEnd = visibleStart + pageWidth;

		for (let i = 0; i < paragraphs.length; i++) {
			const el = paragraphs[i] as HTMLElement;
			if (el.offsetLeft >= visibleStart && el.offsetLeft < visibleEnd) {
				// Always track current position (even when paging backward)
				readerPosition.set([book, chapter, i + 1]);

				// Only advance the high-water mark forward
				const advanced = get(mostAdvancedReaderPosition);
				if (
					!advanced ||
					advanced[0] < book ||
					(advanced[0] === book && advanced[1] < chapter) ||
					(advanced[0] === book && advanced[1] === chapter && i + 1 > advanced[2])
				) {
					mostAdvancedReaderPosition.set([book, chapter, i + 1]);
				}
				break;
			}
		}
	}

	// Get the page index that contains a given paragraph (0-indexed)
	function getPageForParagraph(paragraphIndex: number): number {
		if (!content || !pageWidth) return 0;
		const paragraphs = content.querySelectorAll('p');
		if (paragraphIndex < 0 || paragraphIndex >= paragraphs.length) return 0;
		const el = paragraphs[paragraphIndex] as HTMLElement;
		return Math.floor(el.offsetLeft / (pageWidth + COLUMN_GAP));
	}

	function setupResizeObserver() {
		if (!viewport) return;
		resizeObserver = new ResizeObserver(() => {
			measure();
		});
		resizeObserver.observe(viewport);
	}

	function destroy() {
		resizeObserver?.disconnect();
	}

	// Auto-setup resize observer when viewport is bound.
	// The consumer should call measure() explicitly after mount to initialize,
	// and call destroy() on unmount.

	return {
		// These are getter properties for reactivity
		get viewport() { return viewport; },
		set viewport(el: HTMLElement | undefined) { viewport = el; if (el) setupResizeObserver(); },
		get content() { return content; },
		set content(el: HTMLElement | undefined) { content = el; },
		get pageIndex() { return pageIndex; },
		get totalPages() { return totalPages; },
		get pageWidth() { return pageWidth; },
		get pageHeight() { return pageHeight; },
		get ready() { return ready; },
		get contentStyle() { return contentStyle; },
		get viewportStyle() { return viewportStyle; },

		get onBoundaryReached() { return onBoundaryReached; },
		set onBoundaryReached(cb: ((direction: 1 | -1) => void) | null) { onBoundaryReached = cb; },

		turnPage,
		goToPage,
		measure,
		destroy,

		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,

		updatePosition,
		getPageForParagraph,
	};
}
