<script>
	export let segment;
</script>

<nav class="flex flex-row justify-between md:justify-start items-center p-4">
	<a href="/">
		<img
			src="/images/logo-150.png"
			alt="Oblivious logo of motorbike in an outline of Africa"
		/>
	</a>
	<ul
		class="flex flex-col md:flex-row text-base md:text-xl items-center ml-4"
	>
		<li class="block p-1 sm:p-4">
			<a
				class="no-underline p-2"
				aria-current={segment === undefined ? "page" : undefined}
				href=".">home</a
			>
		</li>
		<li class="block p-1 sm:p-4">
			<a
				class="no-underline p-2"
				rel="prefetch"
				aria-current={segment === "about" ? "page" : undefined}
				href="about">about</a
			>
		</li>
		<li class="block p-1 sm:p-4 my-2">
			<a
				class="p-2 md:p-4 rounded-lg no-underline bg-oblivious"
				href="https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart"
				rel="nofollow">get book one</a
			>
		</li>
	</ul>
</nav>

<style>
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: "";
		width: calc(100% - 1em);
		height: 2px;
		background-color: theme("colors.oblivious");
		display: block;
		bottom: 1px;
	}
</style>
