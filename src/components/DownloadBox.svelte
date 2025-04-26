<script>
  let openDownloadList = false;
  let downloadBox;
  const handleDownloadClick = () => {
    openDownloadList = true;
    downloadBox.focus();
  };
</script>

<div
  class="relative"
  bind:this={downloadBox}
  on:blur={() => {
    setTimeout(() => {
      openDownloadList = false;
    }, 300);
  }}
  tabindex="0"
>
  <span on:click={handleDownloadClick} class="cursor-pointer"
    ><slot>download</slot></span
  >
  {#if openDownloadList}
    <ul
      class="absolute left-1/2 transform -translate-x-1/2 top-full rounded-md w-60 bg-white shadow-lg border-2 border-oblivious z-50"
    >
      <li class="text-xs p-2 text-gray-500">
        All links will take you to my <em>Payhip</em> store, where you can download
        the book
      </li>
      <li class="p-2 hover:bg-oblivious">
        <a
          class="no-underline w-full block p-2"
          target="_blank"
          rel="nofollow"
          href="https://payhip.com/b/UjTb1">Book One</a
        >
      </li>
      <li class="p-2 hover:bg-oblivious">
        <a
          class="no-underline w-full block p-2"
          target="_blank"
          rel="nofollow"
          href="https://payhip.com/b/V1kCi">Book Two</a
        >
      </li>
      <li class="p-2 hover:bg-oblivious">
        <a
          class="no-underline w-full block p-2"
          target="_blank"
          rel="nofollow"
          href="https://payhip.com/b/T4XRt">Book Three</a
        >
      </li>
    </ul>
  {/if}
</div>
