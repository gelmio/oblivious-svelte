<script lang="ts">
	import { page } from '$app/stores';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import '../app.css';

	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();

	let pathname = $derived($page.url.pathname);
</script>

<svelte:head>
	<meta property="og:site_name" content="ObliviousTheBook.com" />
	<meta property="fb:admins" content="563453705" />
	<meta property="og:image" content="https://obliviousthebook.com/images/social-10-21.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://obliviousthebook.com/images/social-10-21.jpg" />
</svelte:head>

<Nav {pathname} />

{#key pathname}
	<PageTransition>
		<main class="flex flex-col items-center justify-center p-4 lg:p-0 max-w-4xl overflow-hidden">
			{@render children()}
		</main>
	</PageTransition>
{/key}

<Footer {pathname} />

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
