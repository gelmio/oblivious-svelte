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

	export let content: string;
	export let book: number;
	export let chapter: number;
	export let nextChapterExists: boolean;
	let reader: HTMLElement;
	let readerBounds: ClientRect;
	let readerWidth: number;
	let columnGap = 50;
	let next: [book: number, chapter: number];
	const setReaderBounds = () => {
		readerBounds = reader.getBoundingClientRect();
		readerWidth = Math.round(readerBounds.width)
	};
	const handleClick = (clientX: number) => {
		console.log(
			reader.scrollLeft,
			Math.round(readerWidth) + columnGap,
			reader.scrollLeft % (readerWidth + columnGap)
		);
		if (
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
			const readerTop =
				(window.pageYOffset || document.documentElement.scrollTop) +
				readerBounds.top;
			window.scrollTo({
				top: readerTop,
				behavior: "smooth",
			});
		}, 500);
	});
</script>

<svelte:window on:resize={() => setReaderBounds()} />

<svelte:head>
	<title
		>Oblivious | Book {book}, Chapter {chapter} | An overlanding motorbike journey
		through West Africa</title
	>
</svelte:head>

<article class="prose md:prose-xl text-justify mb-8 md:mb-12 pt-12">
	<h2 class="font-header">Book {book}, Chapter {chapter}</h2>
	<div
		bind:this={reader}
		on:click={({ clientX }) => handleClick(clientX)}
		class="max-h-screen overflow-hidden overflow-x-scroll no-scrollbar py-6"
		style={readerBounds?.width
			? `columns: auto ${readerWidth}px; column-gap: ${columnGap}px; column-rule: 1px solid #000;`
			: ""}
	>
		{@html content}
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
					>
						flick me some money!</a
					>
				</span>
			{/if}
		</div>
	</div>
</article>

<style>
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}
	.no-scrollbar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
</style>
