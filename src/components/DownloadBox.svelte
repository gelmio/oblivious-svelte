<script>
    let openDownloadList = false
	let downloadBox
	const handleDownloadClick = () => {
		openDownloadList = true
		sendOwl.emptyCart(35479, () => {console.log('Cart Emptied')})
		downloadBox.focus()
	}
</script>
<div 
    class="relative"
    bind:this={downloadBox} 
    on:blur={() => {setTimeout(() => {openDownloadList = false}, 300)}}
    tabindex="0"
>
    <span on:click={handleDownloadClick} class="cursor-pointer"><slot>download</slot></span>
    {#if openDownloadList}
        <ul class="absolute left-1/2 transform -translate-x-1/2 top-full rounded-md bg-white shadow-lg border-2 border-oblivious w-auto z-50">
            <li class="w-max p-2 hover:bg-oblivious">
                <a
                    class="no-underline p-2"
                    rel="nofollow"
                    href="https://transactions.sendowl.com/packages/37218/89A60CC9/add_to_cart">Book One</a>
            </li>
            <li class="w-max p-2 hover:bg-oblivious">
                <a
                    class="no-underline p-2"
                    rel="nofollow"
                    href="https://transactions.sendowl.com/packages/812169/A234B840/add_to_cart">Book Two</a>
            </li>
        </ul>
    {/if}
</div>