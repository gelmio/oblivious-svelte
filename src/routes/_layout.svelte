<script>
	import Tailwindcss from '../components/Tailwindcss.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Tailwindcss />

<Nav {segment}/>

<main class="flex flex-col items-center justify-center p-4 lg:p-0">
	<slot></slot>
</main>