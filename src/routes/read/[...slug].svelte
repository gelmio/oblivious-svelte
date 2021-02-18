<script context="module" lang="ts">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const [bookNumber, chapterNumber] = params.slug.map(string => +string);
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
	export let content: string;
	export let book: number;
	export let chapter: number;
	export let nextChapterExists: boolean;
	let next: [book: number, chapter: number]
	$: next = !nextChapterExists && book < 3 ? [book + 1, 1] : [book, chapter + 1];
</script>

<svelte:head>
	<title>OHHAI</title>
</svelte:head>

<h1>OHHAI</h1>
<a href="read/{next[0]}/{next[1]}">Next</a>

<section class="max-w-4xl mb-20 md:mb-32">
	{@html content}
</section>

<a href="read/{next[0]}/{next[1]}">Next</a>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	/* .content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	} */
</style>
