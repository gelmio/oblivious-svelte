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

<article class="prose prose-lg text-justify mb-20 md:mb-32">
	<h1>Book {book}, Chapter {chapter}</h1>
	<section class="">
		{@html content}
	</section>
	
	<a 
		href="read/{next[0]}/{next[1]}"
		class="inline-block text-xl sm:text-2xl p-4 rounded-lg no-underline bg-oblivious">
		Next {nextChapterExists ? "Chapter" : "Book"}
	</a>
</article>

<style>
</style>
