<script>
	export let segment;
</script>

<nav
	class="relative flex flex-row justify-between md:justify-start items-center p-4 bg-oblivious"
>
	<a href="/">
		<img
			src="/images/logo-150.png"
			alt="Oblivious logo of motorbike in an outline of Africa"
		/>
	</a>
	<ul class="flex flex-col md:flex-row items-center ml-4">
		<li class="p-1 sm:p-4">
			<a
				class="no-underline p-2"
				aria-current={segment === undefined ? "page" : undefined}
				href=".">home</a
			>
		</li>
		<li class="p-1 sm:p-4">
			<a
				class="no-underline p-2"
				rel="prefetch"
				aria-current={segment === "about" ? "page" : undefined}
				href="about">about</a
			>
		</li>
		<li class="p-1 sm:p-4">
			<a
				class="no-underline p-2"
				rel="prefetch"
				aria-current={segment === "help" ? "page" : undefined}
				href="help">get help</a
			>
		</li>
		<li class="p-1 sm:p-4">
			<a
				class="no-underline p-2"
				rel="prefetch"
				href="mailto:obliviousthebook@protonmail.com">get in touch</a
			>
		</li>
		<li class="p-1 sm:p-4">
			<a
				class="no-underline p-2"
				href="https://transactions.sendowl.com/products/78458726/77A44CD1/add_to_cart"
				rel="nofollow">give</a
			>
		</li>
		<li class="p-1 sm:p-4">
			<a
				class="no-underline p-2"
				href="https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart"
				rel="nofollow">download</a
			>
		</li>
		<li class="p-1 sm:p-4">
			<a
				class="p-2 md:p-4 rounded-lg no-underline bg-white"
				href="read"
				aria-current={segment === "read" ? "page" : undefined}
				rel="prefetch">read it now</a
			>
		</li>
	</ul>
	<span
		class="absolute bottom-0 left-0 md:left-1/2 transform md:-translate-x-1/2 mb-2 text-sm"
		>© Luke Gelmi 2021</span
	>
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
		background-color: #fff;
		display: block;
		bottom: 1px;
	}
</style>
