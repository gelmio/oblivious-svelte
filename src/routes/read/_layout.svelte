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
	import PageTransition from "../../components/PageTransition.svelte";
	export let chapterCounts: number[];

	const { page } = stores();
	let navOpen = false;
	$: slug = $page.params.slug;
</script>

<button
	on:click={() => (navOpen = !navOpen)}
	class="absolute top-0 left-0 w-16 h-16 text-2xl bg-oblivious rounded-r-xl"
>
	📖 <span
		class="absolute font-black top-1/2 right-1 transform -translate-y-1/2"
		>{navOpen ? "‹" : "›"}</span
	>
</button>
<nav
	class="absolute top-16 left-0 h-4/5vh right-auto overflow-y-scroll transform {navOpen
		? 'translate-x-0'
		: '-translate-x-full'} transition-all duration-1000 ease-in-out bg-white p-4 rounded-r-lg border-solid border-oblivious-dark border-2"
>
	{#each chapterCounts as chapterCount, bookIndex}
		Book {bookIndex + 1}
		<ul>
			{#each [...Array(chapterCount)] as _, chapterIndex}
				<li
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
