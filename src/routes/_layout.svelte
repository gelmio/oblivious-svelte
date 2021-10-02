<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";
	import PageTransition from "../components/PageTransition.svelte";

	export let segment: string;
</script>

<svelte:head>
	<meta property="og:site_name" content="ObliviousTheBook.com" />
	<meta property="fb:admins" content="563453705" />
	<meta property="og:image" content="https://obliviousthebook.com/images/social-10-21.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://obliviousthebook.com/images/social-10-21.jpg" />
</svelte:head>
<Nav {segment} />

{#key segment}
	<PageTransition>
		<main class="flex flex-col items-center justify-center p-4 lg:p-0 max-w-4xl overflow-hidden">
			<slot />
		</main>
	</PageTransition>
{/key}

<Footer {segment} />

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
