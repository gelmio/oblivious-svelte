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
	<title>Oblivious | Book {book}, Chapter {chapter} | An overlanding motorbike journey through West Africa</title>
</svelte:head>

<article class="prose md:prose-xl text-justify mb-8 pt-12">
	<h2 class="font-header">Book {book}, Chapter {chapter}</h2>
	{@html content}
</article>
<div class="text-right mb-8 md:mb-12">
	<a
		rel="prefetch"
		href="read/{next[0]}/{next[1]}"
		class="inline-block text-lg p-2 rounded-lg no-underline bg-oblivious mr-4">
		Next {nextChapterExists ? "Chapter" : "Book"}
	</a>
	{#if next[1] > 10 && !(next[1] % 5)}
		...<a href="https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart" rel="nofollow"> or flick me some money!</a>
	{/if}
</div>

<style>
</style>
