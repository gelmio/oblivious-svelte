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
		const { chapter, nextChapterExists, message } = await res.json();
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
	import { fade } from "svelte/transition";
	import { giveScrollHint } from "./reader-hints.js";

	export let content: string;
	export let book: number;
	export let chapter: number;
	export let nextChapterExists: boolean;
	let reader: HTMLElement;
	let readerBounds: ClientRect;
	let readerWidth: number;
	let columnGap = 50;
	let photoBox: HTMLElement;
	let showPhotoBox = false;
	let next: [book: number, chapter: number];
	const setReaderBounds = () => {
		readerBounds = reader.getBoundingClientRect();
		readerWidth = Math.round(readerBounds.width);
	};
	const handleClick = ({
		clientX,
		target,
	}: {
		clientX: number;
		target: HTMLElement;
	}) => {
		if (target.tagName === "IMG") {
			showPhotoBox = true;
			setTimeout(() => {
				photoBox.innerHTML = target.outerHTML;
			}, 1);
		} else if (
			clientX &&
			readerBounds &&
			readerBounds.left &&
			readerWidth &&
			!(reader.scrollLeft % (readerWidth + columnGap) > 2)
		) {
			const midwayScreenX = readerBounds.left + readerWidth / 2;
			const scrollDistance = readerWidth + columnGap;
			reader.scrollBy({
				top: 0,
				left: (clientX <= midwayScreenX ? -1 : 1) * scrollDistance,
				behavior: "smooth",
			});
		}
	};
	$: next =
		!nextChapterExists && book < 3 ? [book + 1, 1] : [book, chapter + 1];

	onMount(() => {
		setTimeout(() => {
			setReaderBounds();
		}, 600);
		setTimeout(() => {
			setReaderBounds();
			const readerTop =
				(window.pageYOffset || document.documentElement.scrollTop) +
				readerBounds.top;
			window.scrollTo({
				top: readerTop,
				behavior: "smooth",
			});
		}, 2500);
	});
</script>

<svelte:window on:resize={() => setReaderBounds()} />

<svelte:head>
	<title
		>Oblivious | Book {book}, Chapter {chapter} | An overlanding motorbike journey
		through West Africa
	</title>
</svelte:head>

<article class="prose md:prose-xl text-justify mb-8 md:mb-12 pt-16">
	<h2 class="font-header">Book {book}, Chapter {chapter}</h2>
	<div
		bind:this={reader}
		on:click={(e) => handleClick(e)}
		class="max-h-screen overflow-hidden py-12 {readerBounds ? "pb-12" : "pb-11"}"
		style={readerBounds?.width
			? `columns: auto ${readerWidth}px; column-gap: ${columnGap}px; column-rule: 1px solid #000; overflow-y: visible;`
			: "overflow-y: hidden;"}
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
</style>
