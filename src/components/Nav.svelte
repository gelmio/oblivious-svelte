<script>
	export let segment;
</script>

<style>
	nav {
		padding: 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		border-radius: 3px;
		display: block;
		float: left;
		margin: 0 0.5em;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: theme('colors.oblivious');
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 0.5em;
		display: block;
	}
</style>

<nav class="flex flex-row items-center">
	<img src="/images/logo-150.png" alt="Oblivious logo of motorbike in an outline of Africa">
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a rel=prefetch aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>
		<li><a rel=prefetch aria-current='{segment === "get-a-taste" ? "page" : undefined}' href='get-a-taste'>get a taste</a></li>
		<li><button>get the book</button></li>
	</ul>
</nav>
