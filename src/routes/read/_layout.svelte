<script context="module" lang="ts">
	export async function preload({ params, query }) {
		const res = await this.fetch(`read/book-index.json`);
		const chapterCounts = await res.json();
		if (res.status === 200) {
			return {
				chapterCounts,
			};
		} else {
			this.error(res.status);
		}
	}
</script>

<script lang="ts">
	import { stores } from "@sapper/app";
	import { fade } from "svelte/transition"
	import PageTransition from "../../components/PageTransition.svelte";
	import {readerPosition} from "./reader-position.js"
	export let chapterCounts: number[];

	function readersPositionHasAdvanced(storedPosition: number[], currentPosition: number[]) {
		return !storedPosition && currentPosition
			|| currentPosition[0] > storedPosition[0]
			|| currentPosition[0] === storedPosition[0] && currentPosition[1] > storedPosition[1]
	}

	const { page } = stores();
	let navOpen = false;
	let recommendJumpToChapter = false
	$: slug = $page.params.slug ? $page.params.slug.map((x: string) => +x) : null;
	$: if(slug && readersPositionHasAdvanced($readerPosition, slug)) {
		readerPosition.set(slug)
	} else if(!slug && $readerPosition) {
		setTimeout(() => {recommendJumpToChapter = true;}, 1)
	} else {
		recommendJumpToChapter = false
	}
</script>
{#if recommendJumpToChapter}
	<div in:fade="{{ delay:1000 }}" out:fade class="fixed inset-0 flex justify-center items-center bg-oblivious-opaque z-10">
		<div class="rounded-lg bg-white p-2 md:p-16 flex flex-col text-center m-2">
			<p class="font-header text-xl md:text-2xl">Looks like you've been here before...</p>
			<p class="font-sans text-base md:text-lg mb-4">Want to pick up where you left off?</p>
			<div>
				<a class="inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-oblivious" href="read/{$readerPosition[0]}/{$readerPosition[1]}">Sure, take me to chapter {$readerPosition[1]}</a>
				<span on:click="{() => {recommendJumpToChapter = false; readerPosition.set(null)}}" class="inline-block text-base md:text-lg p-2 rounded-lg no-underline bg-white border border-solid border-oblivious">Nup</span>
			</div>
		</div>
	</div>
{/if}
<button
	on:click={() => (navOpen = !navOpen)}
	class="absolute top-0 md:top-12 left-0 w-12 h-12 text-lg md:w-16 md:h-16 md:text-2xl bg-oblivious rounded-r-xl"
>
	📖 <span
		class="absolute font-black top-1/2 right-1 transform -translate-y-1/2"
		>{navOpen ? "‹" : "›"}</span
	>
</button>
<nav
	class="absolute z-10 top-16 md:top-32 left-0 h-4/5vh max-h-full right-auto overflow-y-scroll transform {navOpen
		? 'translate-x-0'
		: '-translate-x-full'} transition-all duration-1000 ease-in-out bg-white p-4 rounded-r-lg border-solid border-oblivious-dark border-2"
>
	{#each chapterCounts as chapterCount, bookIndex}
		Book {bookIndex + 1}
		<ul>
			{#each [...Array(chapterCount)] as _, chapterIndex}
				<li
					on:click="{() => {recommendJumpToChapter = false; navOpen = false}}"
					class="ml-4 p-2 rounded-md"
					class:bg-oblivious={slug &&
						bookIndex + 1 === +slug[0] &&
						chapterIndex + 1 === +slug[1]}
				>
					<a
						rel="prefetch"
						href="read/{bookIndex + 1}/{chapterIndex + 1}"
						>Chapter {chapterIndex + 1}</a
					>
				</li>
			{/each}
		</ul>
	{/each}
</nav>
<div on:click={() => (navOpen = false)}>
	{#key slug}
		<PageTransition>
			<slot />
		</PageTransition>
	{/key}
</div>
