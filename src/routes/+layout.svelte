<script lang="ts">
  import { page } from "$app/stores";
  import Nav from "$lib/components/Nav.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import "../app.css";

  import type { Snippet } from "svelte";
  let { children }: { children: Snippet } = $props();

  let pathname = $derived($page.url.pathname);
  let isHome = $derived(pathname === "/");
  let isReader = $derived(
    pathname.startsWith("/read/") && pathname !== "/read/",
  );
</script>

<svelte:head>
  <meta property="og:site_name" content="ObliviousTheBook.com" />
  <meta property="fb:admins" content="563453705" />
  <meta
    property="og:image"
    content="https://obliviousthebook.com/images/social-10-21.jpg"
  />
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:image"
    content="https://obliviousthebook.com/images/social-10-21.jpg"
  />
</svelte:head>

<Nav {pathname} />

{#if isReader}
  <!-- Skip root PageTransition for reader pages — the read layout has its own -->
  <main
    class="flex flex-col items-center justify-center p-4 lg:p-0 max-w-4xl overflow-x-clip"
  >
    {@render children()}
  </main>
{:else}
  {#key pathname}
    <PageTransition>
      <main
        class={isHome
          ? ""
          : "flex flex-col items-center justify-center p-4 lg:p-0 max-w-4xl overflow-x-clip"}
      >
        {@render children()}
      </main>
    </PageTransition>
  {/key}
{/if}

<Footer {pathname} {isHome} />

<style>
  main {
    position: relative;
    background-color: white;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
