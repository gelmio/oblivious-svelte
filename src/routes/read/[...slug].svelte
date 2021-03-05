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
		const { chapter, snippet, nextChapterExists, message } = await res.json();
		if (res.status === 200) {
			return {
				content: chapter,
				snippet,
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
	import { fade } from "svelte/transition";
	import { giveScrollHint } from "./reader-hints.js";
	import smoothScroll from "./smooth-scroll";

	export let content: string;
	export let snippet: string;
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
	let next: [book: number, chapter: number];
	
	
	function setReaderBounds () {
		windowBounds = [window.innerWidth, window.innerHeight]
		if(
			!readerBounds || !readerHeight || !readerWidth
			|| windowBounds[0] < readerWidth 
			|| windowBounds[1] < readerHeight
			|| windowBounds[0] > readerWidth + resizeTolerance
			|| windowBounds[1] > readerHeight + resizeTolerance
		) {
			readerHeight = Math.round(windowBounds[1]);
			readerBounds = reader.getBoundingClientRect();
			readerWidth = Math.round(readerBounds.width);
		}
	};

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

	const debouncedSnap = debounce(snapToPage, 1000)

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

	$: next =
		!nextChapterExists && book < 3 ? [book + 1, 1] : [book, chapter + 1];

	onMount(() => {
		setTimeout(() => {
			setReaderBounds();
			
		}, 600);
		setTimeout(() => {
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
		>Oblivious | Book {book}, Chapter {chapter} | An overlanding motorbike journey
		through West Africa</title
	>
    <meta name="description" content="{snippet}">
</svelte:head>

<article class="prose md:prose-xl text-justify mb-8 md:mb-12 pt-16">
	<h2 class="font-header">Book {book}, Chapter {chapter} {readerHeight}</h2>
	<div
		bind:this={reader}
		on:click={handleClick}
		class="overflow-hidden no-scrollbar py-12"
		style={readerWidth && readerHeight
			? `height: ${readerHeight}px; columns: auto ${readerWidth}px; column-gap: ${columnGap}px; column-rule: 1px solid #000;`
			: ""}
	>
		{@html content}
		{#if next[0] < 3}
			<div class="flex flex-col md:flex-row justify-end items-end mt-8">
				<a
					rel="prefetch"
					href="read/{next[0]}/{next[1]}"
					class="inline-block text-lg p-2 rounded-lg no-underline bg-oblivious mr-4"
				>
					Next {nextChapterExists ? "Chapter" : "Book"}
				</a>
				{#if next[1] > 10 && !(next[1] % 5)}
					<span class="m-2">
						... or <a
							href="https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart"
							rel="nofollow"
							class="border-b border-oblivious-dark"
						>
							flick me some money!</a
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
					While you wait, feel free to jump on the mailing list, or <a
						href="https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart"
						rel="nofollow"
						class="border-b border-oblivious-dark"
						>flick me some money to keep the wheels rolling!</a
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
