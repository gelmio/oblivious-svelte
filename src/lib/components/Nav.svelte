<script lang="ts">
  import DownloadBox from "./DownloadBox.svelte";

  let { pathname }: { pathname: string } = $props();

  function getSegment(path: string): string | undefined {
    const seg = path.split("/").filter(Boolean)[0];
    return seg || undefined;
  }

  let segment = $derived(getSegment(pathname));
</script>

<div class="flex justify-center">
  <nav
    class="flex flex-row justify-between md:justify-start items-center p-4 max-w-4xl w-full"
  >
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
          href="/">home</a
        >
      </li>
      <li class="block p-1 sm:p-4">
        <a
          class="no-underline p-2"
          data-sveltekit-preload-data
          aria-current={segment === "about" ? "page" : undefined}
          href="/about">about</a
        >
      </li>
      <li class="block p-1 sm:p-4">
        <DownloadBox>download</DownloadBox>
      </li>
      <li class="block p-1 sm:p-4 my-2">
        <a
          class="p-2 md:p-4 rounded-lg no-underline bg-oblivious"
          href="/read"
          aria-current={segment === "read" ? "page" : undefined}
          rel="nofollow">read it now</a
        >
      </li>
    </ul>
  </nav>
</div>

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
    background-color: var(--color-oblivious);
    display: block;
    bottom: 1px;
  }
</style>
