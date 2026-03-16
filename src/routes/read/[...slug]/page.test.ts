import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, cleanup } from '@testing-library/svelte';
import { writable } from 'svelte/store';

// Mock $app/navigation
vi.mock('$app/navigation', () => ({
	goto: vi.fn()
}));

// Mock $app/stores — use vi.hoisted so the store is available inside vi.mock factory
const { mockPageStore } = vi.hoisted(() => {
	// Create a simple writable that vi.mock can reference
	let value = {
		url: new URL('http://localhost/read/1/1/'),
		params: { slug: '1/1' }
	};
	const subscribers = new Set<(v: typeof value) => void>();
	return {
		mockPageStore: {
			subscribe(fn: (v: typeof value) => void) {
				subscribers.add(fn);
				fn(value);
				return () => subscribers.delete(fn);
			},
			set(v: typeof value) {
				value = v;
				subscribers.forEach((fn) => fn(value));
			}
		}
	};
});
vi.mock('$app/stores', () => ({
	page: mockPageStore
}));

// Mock the paginator — happy-dom can't do real layout measurements
vi.mock('$lib/utils/paginator.svelte', () => ({
	createPaginator: () => ({
		viewport: undefined,
		content: undefined,
		pageIndex: 0,
		totalPages: 1,
		pageWidth: 500,
		pageHeight: 600,
		ready: false,
		contentStyle: '',
		viewportStyle: '',
		onBoundaryReached: null,
		turnPage: vi.fn(),
		goToPage: vi.fn(),
		measure: vi.fn(),
		destroy: vi.fn(),
		handleTouchStart: vi.fn(),
		handleTouchMove: vi.fn(),
		handleTouchEnd: vi.fn(),
		updatePosition: vi.fn(),
		getPageForParagraph: vi.fn(() => 0)
	})
}));

// Mock stores to avoid localStorage interference
vi.mock('$lib/stores/reader-hints', async () => {
	const { writable } = await import('svelte/store');
	return {
		readerPosition: writable(null),
		mostAdvancedReaderPosition: writable(null)
	};
});
vi.mock('$lib/stores/text-size', async () => {
	const { writable } = await import('svelte/store');
	return {
		textSizeIndex: writable(1),
		PROSE_SIZES: ['prose-sm', 'prose-base', 'prose-lg', 'prose-xl', 'prose-2xl']
	};
});

import Page from './+page.svelte';

describe('reader page ([...slug]/+page.svelte)', () => {
	beforeEach(() => {
		cleanup();
		mockPageStore.set({
			url: new URL('http://localhost/read/1/1/'),
			params: { slug: '1/1' }
		});
	});

	function renderPage(overrides: Record<string, unknown> = {}) {
		return render(Page, {
			props: {
				data: {
					chapterCounts: [29, 51, 24],
					content: '<p>Test chapter content paragraph one.</p><p>Second paragraph.</p>',
					book: 1,
					chapter: 1,
					nextChapterExists: true,
					totalChapters: 29,
					...overrides
				}
			}
		});
	}

	it('renders chapter content as HTML', () => {
		const { container } = renderPage();
		expect(container.textContent).toContain('Test chapter content paragraph one.');
		expect(container.textContent).toContain('Second paragraph.');
	});

	it('shows "Book N" label for chapter 1', () => {
		const { container } = renderPage({ book: 2, chapter: 1 });
		expect(container.textContent).toContain('Book 2');
	});

	it('does not show "Book N" label for non-first chapters', () => {
		const { container } = renderPage({ book: 1, chapter: 5 });
		// Should have "Chapter 5" but not "Book 1" as a standalone label
		const bookLabels = container.querySelectorAll('p');
		const bookLabel = Array.from(bookLabels).find(
			(p) => p.textContent?.trim().startsWith('Book') && !p.textContent?.includes('Chapter')
		);
		expect(bookLabel).toBeFalsy();
	});

	it('shows "Chapter N" label for every chapter', () => {
		const { container } = renderPage({ chapter: 7 });
		expect(container.textContent).toContain('Chapter 7');
	});

	it('renders navigation gutter buttons with arrow SVGs', () => {
		const { container } = renderPage();
		const buttons = container.querySelectorAll('button[aria-label]');
		// Find buttons that contain SVGs (gutter buttons, not click zones)
		const buttonsWithSvg = Array.from(buttons).filter((b) => b.querySelector('svg'));
		const prevGutter = buttonsWithSvg.find(
			(b) => b.getAttribute('aria-label') === 'Previous page'
		);
		const nextGutter = buttonsWithSvg.find(
			(b) => b.getAttribute('aria-label') === 'Next page'
		);
		expect(prevGutter).toBeTruthy();
		expect(nextGutter).toBeTruthy();
	});

	it('renders title with book and chapter info', () => {
		renderPage({ book: 2, chapter: 10 });
		expect(document.title).toContain('Book 2');
		expect(document.title).toContain('Chapter 10');
	});

	it('shows next chapter link when nextChapterExists', () => {
		const { container } = renderPage({ book: 1, chapter: 5, nextChapterExists: true });
		const links = container.querySelectorAll('a');
		const nextLink = Array.from(links).find((a) => a.getAttribute('href')?.includes('/read/1/6/'));
		expect(nextLink).toBeTruthy();
	});

	it('shows previous chapter link when not on chapter 1', () => {
		const { container } = renderPage({ book: 1, chapter: 5 });
		const links = container.querySelectorAll('a');
		const prevLink = Array.from(links).find((a) => a.getAttribute('href')?.includes('/read/1/4/'));
		expect(prevLink).toBeTruthy();
	});

	it('does not show previous chapter link on chapter 1', () => {
		const { container } = renderPage({ book: 1, chapter: 1 });
		const links = container.querySelectorAll('a');
		// No link to chapter 0
		const prevLink = Array.from(links).find((a) => a.getAttribute('href')?.includes('/read/1/0/'));
		expect(prevLink).toBeFalsy();
	});

	it('shows text size controls', () => {
		const { container } = renderPage();
		const decreaseBtn = container.querySelector('button[aria-label="Decrease text size"]');
		const increaseBtn = container.querySelector('button[aria-label="Increase text size"]');
		expect(decreaseBtn).toBeTruthy();
		expect(increaseBtn).toBeTruthy();
	});

	it('shows progress bar', () => {
		const { container } = renderPage();
		// Progress bar is a div with bg-oblivious class inside a rounded-full container
		const progressContainer = container.querySelector('.rounded-full.bg-gray-200');
		expect(progressContainer).toBeTruthy();
		const progressBar = progressContainer?.querySelector('.bg-oblivious');
		expect(progressBar).toBeTruthy();
	});

	it('does not show next chapter link for last chapter of trilogy', () => {
		const { container } = renderPage({ book: 3, chapter: 24, nextChapterExists: false, totalChapters: 24 });
		mockPageStore.set({
			url: new URL('http://localhost/read/3/24/'),
			params: { slug: '3/24' }
		});
		const links = container.querySelectorAll('a');
		const nextLink = Array.from(links).find((a) => {
			const href = a.getAttribute('href') ?? '';
			return href.includes('/read/4/') || href.includes('/read/3/25/');
		});
		expect(nextLink).toBeFalsy();
	});
});
