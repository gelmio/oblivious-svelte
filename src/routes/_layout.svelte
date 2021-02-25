<script lang="ts">
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";
	import PageTransition from "../components/PageTransition.svelte";

	export let segment: string;
</script>

<Nav {segment} />

{#key segment}
	<PageTransition>
		<main class="flex flex-col items-center justify-center p-4 lg:p-0">
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
