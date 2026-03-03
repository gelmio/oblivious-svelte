<script lang="ts">
  import DownloadBox from "./DownloadBox.svelte";

  let { pathname }: { pathname: string } = $props();

  function getSegment(path: string): string | undefined {
    const seg = path.split("/").filter(Boolean)[0];
    return seg || undefined;
  }

  let segment = $derived(getSegment(pathname));
  let mobileMenuOpen = $state(false);

  function toggleMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="w-full bg-white border-b border-gray-100">
  <div class="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
    <!-- Logo -->
    <a
      href="/"
      class="no-underline shrink-0 transition-opacity duration-200 hover:opacity-80"
      onclick={closeMenu}
    >
      <img
        src="/images/logo-150.png"
        alt="Oblivious logo of motorbike in an outline of Africa"
        class="h-14 md:h-16 w-auto"
      />
    </a>

    <!-- Desktop nav -->
    <nav class="hidden lg:flex items-center gap-2">
      <a
        class="nav-link no-underline px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
        aria-current={segment === undefined ? "page" : undefined}
        href="/"
      >
        Home
      </a>
      <a
        class="nav-link no-underline px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
        data-sveltekit-preload-data
        aria-current={segment === "about" ? "page" : undefined}
        href="/about"
      >
        About
      </a>
      <span class="nav-link px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors">
        <DownloadBox>Download</DownloadBox>
      </span>
      <a
        class="ml-2 inline-flex items-center px-5 py-2.5 rounded-lg no-underline
          bg-oblivious text-gray-900 font-medium
          shadow-sm hover:shadow-md hover:scale-[1.03]
          transition-all duration-200"
        href="/read"
        aria-current={segment === "read" ? "page" : undefined}
        data-sveltekit-preload-data
      >
        Read it now
      </a>
    </nav>

    <!-- Mobile hamburger -->
    <button
      class="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 bg-transparent cursor-pointer"
      onclick={toggleMenu}
      aria-label="Toggle menu"
      aria-expanded={mobileMenuOpen}
    >
      <span
        class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center"
        class:translate-y-2={mobileMenuOpen}
        class:rotate-45={mobileMenuOpen}
      ></span>
      <span
        class="block w-6 h-0.5 bg-gray-700 transition-all duration-300"
        class:opacity-0={mobileMenuOpen}
      ></span>
      <span
        class="block w-6 h-0.5 bg-gray-700 transition-all duration-300 origin-center"
        class:-translate-y-2={mobileMenuOpen}
        class:-rotate-45={mobileMenuOpen}
      ></span>
    </button>
  </div>

  <!-- Mobile menu panel -->
  {#if mobileMenuOpen}
    <nav
      class="lg:hidden border-t border-gray-100 bg-white animate-fade-in"
    >
      <div class="flex flex-col items-center gap-1 px-6 py-4">
        <a
          class="nav-link no-underline px-3 py-3 text-gray-700 hover:text-gray-900 text-lg w-full text-center transition-colors"
          aria-current={segment === undefined ? "page" : undefined}
          href="/"
          onclick={closeMenu}
        >
          Home
        </a>
        <a
          class="nav-link no-underline px-3 py-3 text-gray-700 hover:text-gray-900 text-lg w-full text-center transition-colors"
          data-sveltekit-preload-data
          aria-current={segment === "about" ? "page" : undefined}
          href="/about"
          onclick={closeMenu}
        >
          About
        </a>
        <div class="px-3 py-3 text-lg text-center">
          <DownloadBox>Download</DownloadBox>
        </div>
        <a
          class="mt-2 inline-flex items-center justify-center w-full px-5 py-3 rounded-lg no-underline
            bg-oblivious text-gray-900 font-medium text-lg
            shadow-sm hover:shadow-md transition-all duration-200"
          href="/read"
          aria-current={segment === "read" ? "page" : undefined}
          data-sveltekit-preload-data
          onclick={closeMenu}
        >
          Read it now
        </a>
      </div>
    </nav>
  {/if}
</header>
