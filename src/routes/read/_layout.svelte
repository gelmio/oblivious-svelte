<script context="module" lang="ts">
	export async function preload({ params, query }) {		
        const res = await this.fetch(
			`read/book-index.json`
		);
		const chapterCounts = await res.json();
		if (res.status === 200) {
			return {
                chapterCounts
			};
		} else {
			this.error(res.status);
		}
	}
</script>

<script lang="ts">
    import { stores } from '@sapper/app';
    export let chapterCounts: number[]

	const { page } = stores();
    $: slug = $page.params.slug;
	$: navOpen = !slug
	$: console.log(navOpen)
	$: console.log(slug)
</script>

<nav class="absolute top-0 left-0 bottom-0 w-0 overflow-x-visible" class:w-32={navOpen}>
    <div class="absolute top-0 left-0 bottom-0 w-0 overflow-y-scroll transition-all duration-1000 ease-linear" class:w-32={navOpen}>
		{#each chapterCounts as chapterCount, bookIndex}
			Book {bookIndex + 1}
			<ul>
				{#each [...Array(chapterCount)] as _, chapterIndex}
					<li class="ml-4">
						<a rel=prefetch href="read/{bookIndex + 1}/{chapterIndex + 1}">Chapter {chapterIndex + 1}</a>
					</li>
				{/each}
			</ul>
		{/each}
	</div>
	<button on:click={() => navOpen = !navOpen} class="absolute top-0 right-0 transform translate-x-full">
		ohhai!!
	</button>
</nav>
<slot></slot>