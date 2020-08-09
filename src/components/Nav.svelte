<script>
	export let segment;
</script>

<style>
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
		bottom: 1px;
	}
</style>

<nav class="flex flex-row justify-between md:justify-start items-center p-4">
	<img src="/images/logo-150.png" alt="Oblivious logo of motorbike in an outline of Africa">
	<ul class="flex flex-col md:flex-row items-center ml-4">
		<li class="block p-1 sm:p-4"><a class="no-underline p-2" aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li class="block p-1 sm:p-4"><a class="no-underline p-2" rel=prefetch aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>
		<li class="block p-1 sm:p-4"><a class="no-underline p-2" rel=prefetch aria-current='{segment === "get-a-taste" ? "page" : undefined}' href='get-a-taste'>get a taste</a></li>
		<li class="block p-1 sm:p-4"><a class="p-2 md:p-4 rounded-lg no-underline bg-oblivious" href="https://transactions.sendowl.com/packages/787179/F1809FF4/purchase" rel="nofollow">get the books</a></li>
	</ul>
</nav>
