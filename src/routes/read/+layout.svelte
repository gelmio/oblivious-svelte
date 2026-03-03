<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import { readerPosition } from '$lib/stores/reader-hints';
	import type { Snippet } from 'svelte';

	let { data, children }: { data: { chapterCounts: number[] }; children: Snippet } = $props();

	let navOpen = $state(false);
	let recommendJumpToChapter = $state(false);

	let slug = $derived(
		$page.params.slug ? $page.params.slug.split('/').map((x: string) => +x) : null
	);

	$effect(() => {
		if (!slug && $readerPosition && $readerPosition[0] && $readerPosition[1]) {
			recommendJumpToChapter = true;
		} else {
			recommendJumpToChapter = false;
		}
	});
</script>

{#if recommendJumpToChapter}
	<div
		in:fade={{ delay: 1000 }}
		out:fade
		class="fixed inset-0 z-10 flex items-center justify-center bg-oblivious-opaque"
	>
		<div class="m-2 flex flex-col rounded-lg bg-white p-2 text-center md:p-16">
			<p class="font-header text-xl md:text-2xl">Looks like you've been here before...</p>
			<p class="mb-4 font-sans text-base md:text-lg">Want to pick up where you left off?</p>
			<div>
				<a
					class="inline-block rounded-lg bg-oblivious p-2 text-base no-underline md:text-lg"
					href="/read/{$readerPosition![0]}/{$readerPosition![1]}/"
				>
					Sure, take me to chapter {$readerPosition![1]}
				</a>
				<span
					onclick={() => {
						recommendJumpToChapter = false;
						readerPosition.set(null);
					}}
					role="button"
					tabindex="0"
					onkeydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							recommendJumpToChapter = false;
							readerPosition.set(null);
						}
					}}
					class="inline-block cursor-pointer rounded-lg border border-solid border-oblivious bg-white p-2 text-base no-underline md:text-lg"
				>
					Nup
				</span>
			</div>
		</div>
	</div>
{/if}
<button
	onclick={() => (navOpen = !navOpen)}
	class="absolute top-0 left-0 h-12 w-12 rounded-r-xl bg-oblivious text-lg md:top-12 md:h-16 md:w-16 md:text-2xl"
>
	📖 <span class="absolute top-1/2 right-1 -translate-y-1/2 font-black"
		>{navOpen ? '‹' : '›'}</span
	>
</button>
<nav
	class="absolute top-16 right-auto left-0 z-10 h-4/5vh max-h-96 overflow-y-scroll rounded-r-lg border-2 border-solid border-oblivious-dark bg-white p-4 transition-all duration-1000 ease-in-out md:top-32 {navOpen
		? 'translate-x-0'
		: '-translate-x-full'}"
>
	{#each data.chapterCounts as chapterCount, bookIndex}
		{#if bookIndex + 1 < 4}
			Book {bookIndex + 1}
			<ul>
				{#each { length: chapterCount } as _, chapterIndex}
					<li
						onclick={() => {
							recommendJumpToChapter = false;
							navOpen = false;
						}}
						class="ml-4 rounded-md p-2"
						class:bg-oblivious={slug &&
							bookIndex + 1 === +slug[0] &&
							chapterIndex + 1 === +slug[1]}
					>
						<a
							data-sveltekit-preload-data
							href="/read/{bookIndex + 1}/{chapterIndex + 1}/"
						>
							Chapter {chapterIndex + 1}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{/each}
</nav>
<div onclick={() => (navOpen = false)} role="presentation">
	{#key slug}
		<PageTransition>
			{@render children()}
		</PageTransition>
	{/key}
</div>
