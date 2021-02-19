<script lang="ts">
</script>

<svelte:head>
	<title>ohhai</title>
	<meta
		property="og:description"
		content="Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield."
	/>
	<meta property="og:url" content="http://www.obliviousthebook.com/" />
	<meta property="og:site_name" content="ObliviousTheBook.com" />
	<meta property="fb:admins" content="563453705" />
	<meta property="og:image" content="/images/logo-750.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:description"
		content="Here's just a taste of the action from the once-in-a-lifetime trip through West Africa on a Royal Enfield."
	/>
	<meta
		name="twitter:title"
		content="Get a taste of the adventure, with a couple of chunks of the Oblivious Trilogy"
	/>
	<meta name="twitter:image" content="/images/logo-750.png" />
</svelte:head>

<section class="flex flex-col items-center max-w-4xl mb-16">
	<h1 class="text-4xl md:text-6xl text-center">
		Read Oblivious Book One right here!
	</h1>
	<h2 class="text-xl md:text-3xl text-center">
		BLA BLA
	</h2>
</section>
<ul class="flex flex-row justify-around w-full max-w-3xl mb-20">
	<a rel="prefetch" href="read/1/1/">Read Book One Now</a>
	<!-- {#each posts as post}
		 we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event
		<li>
			<a rel="prefetch" href="read/{post.slug}">{post.title}</a>
		</li>
	{/each} -->
</ul>

<style>
</style>
