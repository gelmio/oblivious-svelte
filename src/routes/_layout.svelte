<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
	let show = false
	setTimeout(() => show = true, 1)
</script>

<style>
	main {
		position: relative;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main class="flex flex-col items-center justify-center p-4 lg:p-0">
	<slot></slot>
</main>

<Footer {segment}/>