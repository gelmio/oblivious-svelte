<script context="module" lang="ts">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const [bookNumber, chapterNumber] = params.slug.map(
			(string) => +string
		);
		const res = await this.fetch(
			`read/${bookNumber}/${chapterNumber}.json`
		);
		const {
			chapter,
			nextChapterExists,
			message,
		} = await res.json();
		if (res.status === 200) {
			return {
				content: chapter,
				book: bookNumber,
				chapter: chapterNumber,
				nextChapterExists,
			};
		} else {
			this.error(res.status, message);
		}
	}
</script>

<script lang="ts">
	import { onMount } from "svelte";
	import { stores } from "@sapper/app";
	import { fade } from "svelte/transition";
	import { giveScrollHint, readerPosition } from "./reader-hints.js";
	import smoothScroll from "./smooth-scroll";
    import OpenCart from "../../components/OpenCart.svelte";


	export let content: string;
	export let book: number;
	export let chapter: number;
	export let nextChapterExists: boolean;
	let reader: HTMLElement;
	let readerBounds: ClientRect;
	let windowBounds: [x: number, y: number];
	let readerWidth: number;
	let readerHeight: number;
	let readerTop: number;
	let columnGap = 50;
	let resizeTolerance = 100;
	let photoBox: HTMLElement;
	let showPhotoBox = false;
	let shouldJumpToPosition = false;
	let next: [book: number, chapter: number];
	let observer: IntersectionObserver;
	let paragraphElements: NodeList;

	const { page } = stores();
	$: slug = $page.params.slug
		? $page.params.slug.map((x: string) => +x)
		: null;

	function readersPositionHasAdvanced(
		storedPosition: number[],
		currentPosition: number[]
	) {
		return (
			((!storedPosition || !storedPosition[0] || !storedPosition[1]) &&
				currentPosition) ||
			currentPosition[0] > storedPosition[0] ||
			(currentPosition[0] === storedPosition[0] &&
				currentPosition[1] > storedPosition[1])
		);
	}

	function setReaderBounds() {
		if(reader) {
			windowBounds = [window.innerWidth, window.innerHeight];
			if (
				!readerBounds ||
				!readerHeight ||
				!readerWidth ||
				windowBounds[0] < readerWidth ||
				windowBounds[1] < readerHeight ||
				windowBounds[0] > readerWidth + resizeTolerance ||
				windowBounds[1] > readerHeight + resizeTolerance
			) {
				readerHeight = Math.round(windowBounds[1]);
				readerBounds = reader.getBoundingClientRect();
				readerWidth = Math.round(readerBounds.width);
			}
		}
	}

	function debounce(fn, delay) {
		var timer;
		return function () {
			clearTimeout(timer);
			timer = setTimeout(function () {
				fn();
			}, delay);
		};
	}

	const snapToPage = () => {
		const currentScroll = reader.scrollLeft;
		setTimeout(() => {
			const remainder = reader.scrollLeft % (readerWidth + columnGap);
			if (currentScroll === reader.scrollLeft && remainder) {
				const moveLeft =
					remainder / (readerWidth + columnGap) < 0.5 // is current position less than half way across column
						? -remainder
						: readerWidth + columnGap - remainder;
				smoothScroll(
					reader,
					[reader.scrollLeft, reader.scrollTop],
					[reader.scrollLeft + moveLeft, reader.scrollLeft],
					300
				);
			} else {
			}
		}, 50);
	};

	const debouncedSnap = debounce(snapToPage, 1000);

	const handleClick = ({ clientX, target }) => {
		if (target.tagName === "IMG") {
			showPhotoBox = true;
			setTimeout(() => {
				photoBox.innerHTML = target.outerHTML;
			}, 1);
		} else if (
			clientX &&
			readerBounds &&
			readerBounds.left &&
			readerWidth
		) {
			const midwayScreenX = readerBounds.left + readerWidth / 2;
			const scrollDistance = readerWidth + columnGap;
			smoothScroll(
				reader,
				[reader.scrollLeft, reader.scrollTop],
				[
					reader.scrollLeft +
						(clientX <= midwayScreenX ? -1 : 1) * scrollDistance,
					reader.scrollTop,
				],
				300,
				debouncedSnap
			);
		}
	};

	function jumpToParagraph() {
		const elementToJumpTo = paragraphElements[$readerPosition[2] - 1];
		if (elementToJumpTo instanceof HTMLElement) {
			smoothScroll(
				reader,
				[reader.scrollLeft, reader.scrollTop],
				[elementToJumpTo.offsetLeft, reader.scrollTop],
				300,
				debouncedSnap
			);
		}
	}

	function setupObservers() {
		if(paragraphElements && paragraphElements.length > 0) {
			observer = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting === true) {
						const currentIndex = Array.from(paragraphElements).indexOf(
							(entries[0].target)
						);
						if (currentIndex > -1 && currentIndex > $readerPosition[2] - 1) {
							readerPosition.set([slug[0], slug[1], currentIndex + 1])
						}
					}
				},
				{ threshold: [0] }
			);
			Array.from(paragraphElements).forEach((paragraphElement) =>
				observer.observe(paragraphElement as HTMLElement)
			);
		}
	}

	$: next =
		!nextChapterExists && book < 3 ? [book + 1, 1] : [book, chapter + 1];

	onMount(() => {
		paragraphElements = document.querySelectorAll(".reader p");
		if (slug && readersPositionHasAdvanced($readerPosition, slug)) {
			readerPosition.set([slug[0], slug[1], 1]);
			setupObservers();
		} else if (
			$readerPosition[0] === slug[0] &&
			$readerPosition[1] === slug[1] &&
			$readerPosition[2] > 1
		) {
			shouldJumpToPosition = true;
			setupObservers();
		} else if (
			$readerPosition[0] === slug[0] &&
			$readerPosition[1] === slug[1] &&
			$readerPosition[2] === 1
		) {
			setupObservers();
		}


		setReaderBounds();
		setTimeout(() => {
			setReaderBounds();
			readerTop =
				(window.pageYOffset || document.documentElement.scrollTop) +
				readerBounds.top;
			smoothScroll(
				window,
				[window.scrollX, window.scrollY],
				[window.scrollX, readerTop],
				600
			);
		}, 2000);
	});
</script>

<svelte:window on:resize={() => setReaderBounds()} />

<svelte:head>
	<title
		>Oblivious | Book {book}, Chapter {chapter} | An overlanding motorbike journey through West Africa</title
	>
</svelte:head>

<article class="prose md:prose-xl text-justify mb-8 md:mb-12 pt-16">
	<h2 class="font-header">Book {book}, Chapter {chapter}</h2>
	<div
		bind:this={reader}
		on:click={handleClick}
		class="reader relative overflow-hidden no-scrollbar py-12"
		style={readerWidth && readerHeight
			? `height: ${readerHeight}px; columns: auto ${readerWidth}px; column-gap: ${columnGap}px; column-rule: 1px solid #000;`
			: ""}
	>
		{@html content}
		{#if next[0] < 3}
			<div class="flex flex-col md:flex-row justify-end items-end mt-8">
				<a
					on:click={(e) => e.stopPropagation()}
					rel="prefetch"
					href="read/{next[0]}/{next[1]}"
					class="inline-block text-lg p-2 rounded-lg no-underline bg-oblivious mr-4"
				>
					Next {nextChapterExists ? "Chapter" : "Book"}
				</a>
				{#if next[1] > 10 && !(next[1] % 5)}
					<span class="m-2">
						... or <span
							on:click={(e) => e.stopPropagation()}
							class="border-b border-oblivious-dark"
						>
							<OpenCart text="buy me a coffee"></OpenCart></span
						>
					</span>
				{/if}
			</div>
		{:else}
			<div class="text-center font-header mt-8">
				<p>Congrats! You've made it to the end of Book 2!</p>
				<p>
					That's as far as things go for the moment, but Book 3 is on
					the way out soon!
				</p>
				<p>
					While you wait, feel free to jump on the mailing list, or maybe even <span
						on:click={(e) => e.stopPropagation()}	
						class="border-b border-oblivious-dark"
						><OpenCart text="buy me a coffee"></OpenCart></span
					>
				</p>
			</div>
		{/if}
	</div>
	<div class="text-xs text-center -mt-10">Oblivious | Luke Gelmi</div>
</article>
{#if showPhotoBox}
	<div
		in:fade
		bind:this={photoBox}
		on:click={() => (showPhotoBox = false)}
		class="fixed inset-0 flex justify-center items-center cursor-zoom-out bg-oblivious-opaque"
	/>
{/if}
{#if $giveScrollHint}
	<div
		in:fade={{ delay: 1000 }}
		out:fade
		class="fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10"
	>
		<div
			class="rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2"
		>
			<p class="font-header text-xl md:text-2xl mb-4">
				Here's some tips:
			</p>
			<p class="font-sans text-base md:text-lg mb-1">
				Tap the text to turn the pages.
			</p>
			<p class="font-sans text-base md:text-lg mb-1">
				Tap the images to zoom.
			</p>
			<p class="font-sans text-base md:text-lg mb-1">
				I'll help you out by keeping track of where you're up to.
			</p>
			<p class="font-sans text-base md:text-lg mb-1">
				I'll also scroll automatically to where the pages are so you
				don't have to bother your finger...
			</p>
			<div>
				<span
					on:click={() => {
						giveScrollHint.set(false);
					}}
					class="inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious cursor-pointer"
					>Got it</span
				>
			</div>
		</div>
	</div>
{:else if shouldJumpToPosition}
	<div
		in:fade={{ delay: 1000 }}
		class="fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10"
	>
		<div
			class="rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2"
		>
			<p class="font-header text-xl md:text-2xl">
				Looks like you've been here before...
			</p>
			<p class="font-sans text-base md:text-lg mb-4">
				Want to jump to the last page you were reading?
			</p>
			<div>
				<button
					on:click={() => {
						shouldJumpToPosition = false;
						jumpToParagraph();
					}}
					class="inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious"
					>Sure</button
				>
				<button
					on:click={() => {
						shouldJumpToPosition = false;
						readerPosition.set([
							readerPosition[0],
							readerPosition[1],
							1,
						]);
					}}
					class="inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-white border border-solid border-oblivious cursor-pointer"
					>Nup</button
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
