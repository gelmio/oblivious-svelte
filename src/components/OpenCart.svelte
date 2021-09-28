<script>
    export let text = "download"
	import updateCart from "../tools/updateCart";
    import Spinner from "../components/Spinner.svelte"
    let cartLoading = false
	const handleOpenCart = () => {
		cartLoading = true
		updateCart(() => {
			cartLoading = false
		})
	}
</script>

{#if cartLoading}
    <Spinner></Spinner>
{:else}
    <span class="cursor-pointer" on:click={() => handleOpenCart()}>{text}</span>
{/if}
