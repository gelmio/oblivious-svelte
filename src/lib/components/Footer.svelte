<script lang="ts">
  import DownloadBox from "./DownloadBox.svelte";

  let { pathname, isHome = false }: { pathname: string; isHome?: boolean } =
    $props();

  function getSegment(path: string): string | undefined {
    const seg = path.split("/").filter(Boolean)[0];
    return seg || undefined;
  }

  let segment = $derived(getSegment(pathname));
</script>

<footer class={isHome ? "w-full relative -mt-24 z-10" : "w-full mt-20"}>
  {#if !isHome}
    <!-- Gradient transition from white into footer -->
    <div class="h-16 bg-linear-to-b from-white to-oblivious"></div>
  {:else}
    <!-- Transparent-to-oblivious gradient that overlaps the content above -->
    <div class="h-24 bg-linear-to-b from-transparent to-oblivious"></div>
  {/if}

  <div class="bg-oblivious">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <!-- Main footer grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <!-- Column 1: Brand -->
        <div class="flex flex-col items-center md:items-start gap-4">
          <a href="/" class="no-underline">
            <img
              src="/images/logo-150.png"
              alt="Oblivious logo"
              class="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
            />
          </a>
          <p
            class="text-sm text-gray-700 text-center md:text-left leading-relaxed max-w-xs"
          >
            An outrageously inappropriate solo overlanding journey through West
            Africa on a Royal Enfield Bullet.
          </p>
        </div>

        <!-- Column 2: Navigation -->
        <div class="flex flex-col items-center md:items-start gap-3">
          <h4
            class="text-sm font-medium uppercase tracking-wider text-gray-700 mb-1"
          >
            Navigate
          </h4>
          <a
            class="no-underline text-gray-800 hover:text-oblivious-dark transition-colors"
            href="/"
            aria-current={segment === undefined ? "page" : undefined}
          >
            Home
          </a>
          <a
            class="no-underline text-gray-800 hover:text-oblivious-dark transition-colors"
            href="/about"
            data-sveltekit-preload-data
            aria-current={segment === "about" ? "page" : undefined}
          >
            About the Trilogy
          </a>
          <a
            class="no-underline text-gray-800 hover:text-oblivious-dark transition-colors"
            href="/help"
            data-sveltekit-preload-data
            aria-current={segment === "help" ? "page" : undefined}
          >
            Get Help
          </a>
          <a
            class="no-underline text-gray-800 hover:text-oblivious-dark transition-colors"
            href="/read"
            data-sveltekit-preload-data
            aria-current={segment === "read" ? "page" : undefined}
          >
            Read Online
          </a>
        </div>

        <!-- Column 3: Connect & Download -->
        <div class="flex flex-col items-center md:items-start gap-3">
          <h4
            class="text-sm font-medium uppercase tracking-wider text-gray-700 mb-1"
          >
            Connect
          </h4>
          <a
            class="no-underline text-gray-800 hover:text-oblivious-dark transition-colors"
            href="mailto:hello@obliviousthebook.com"
          >
            hello@obliviousthebook.com
          </a>
          <a
            class="no-underline text-gray-800 hover:text-oblivious-dark transition-colors"
            href="https://payhip.com/b/5eyXH"
            rel="nofollow"
          >
            Support the Author
          </a>
          <div class="mt-2">
            <DownloadBox>Download E-Book</DownloadBox>
          </div>
          <a
            class="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-lg no-underline
              bg-white text-gray-900 font-medium
              shadow-sm hover:shadow-md transition-all duration-200"
            href="/read"
            data-sveltekit-preload-data
          >
            Read it now
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/40">
      <div
        class="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2"
      >
        <span class="text-xs text-gray-600"
          >© Luke Gelmi {new Date().getFullYear()}</span
        >
        <a
          href="/success"
          class="no-underline text-xs text-gray-500 hover:text-gray-600 transition-colors"
          >·</a
        >
      </div>
    </div>
  </div>
</footer>
