<script>
    export let text = "download"
	import updateCart from "../tools/updateCart";
    import Spinner from "../components/Spinner.svelte"
    let cartLoading = false
	let count = 0
	const handleOpenCart = () => {
		cartLoading = true
		updateCart(() => {
			count = count + 1
			// cartLoading = false

		})
	}
</script>

{#if cartLoading}
	c:{count}
    <Spinner></Spinner>
{:else}
    <span class="cursor-pointer" on:click={() => handleOpenCart()}>{text}</span>
{/if}
