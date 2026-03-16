<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import PageTransition from "$lib/components/PageTransition.svelte";
  import {
    readerPosition,
    mostAdvancedReaderPosition,
  } from "$lib/stores/reader-hints";
  import type { Snippet } from "svelte";
  import { tick } from "svelte";

  let {
    data,
    children,
  }: { data: { chapterCounts: number[] }; children: Snippet } = $props();

  let navOpen = $state(false);
  let navElement: HTMLElement | undefined = $state();

  let slug = $derived(
    $page.params.slug
      ? $page.params.slug.split("/").map((x: string) => +x)
      : null,
  );

  async function openNav() {
    navOpen = true;
    await tick();
    // Scroll to the bookmarked or current chapter in the nav list
    if (navElement) {
      const activeItem =
        navElement.querySelector("[data-bookmark]") ||
        navElement.querySelector("[data-current]");
      if (activeItem) {
        activeItem.scrollIntoView({ block: "center", behavior: "smooth" });
      }
    }
  }
</script>

<!-- Drawer toggle button — fixed to viewport left edge -->
<button
  onclick={() => (navOpen ? (navOpen = false) : openNav())}
  aria-label={navOpen ? "Close chapter menu" : "Open chapter menu"}
  class="fixed top-3 left-3 z-30 flex h-10 w-10 items-center justify-center rounded-lg bg-oblivious shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg md:top-20 md:h-12 md:w-12"
>
  {#if navOpen}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5 md:h-6 md:w-6"
      ><line x1="18" y1="6" x2="6" y2="18"></line><line
        x1="6"
        y1="6"
        x2="18"
        y2="18"
      ></line></svg
    >
  {:else}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5 md:h-6 md:w-6"
      ><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path
        d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"
      ></path></svg
    >
  {/if}
</button>

<!-- Backdrop -->
{#if navOpen}
  <div
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    onclick={() => (navOpen = false)}
    role="presentation"
    class="fixed inset-0 z-10 bg-black/30"
  ></div>
{/if}

<!-- Chapter nav drawer — fixed, full-height, flush with viewport left edge -->
<nav
  bind:this={navElement}
  class="fixed top-0 left-0 z-20 h-full w-72 overflow-y-auto border-r border-gray-200 bg-white px-4 py-16 shadow-xl transition-transform duration-300 ease-out md:w-80 md:py-20 {navOpen
    ? 'translate-x-0'
    : '-translate-x-full'}"
>
  <h3 class="mb-4 font-header text-lg text-gray-700">Chapters</h3>
  {#each data.chapterCounts as chapterCount, bookIndex}
    {#if bookIndex + 1 < 4}
      <div class="mb-2">
        <h4
          class="mb-1 text-sm font-semibold tracking-wide text-gray-500 uppercase"
        >
          Book {bookIndex + 1}
        </h4>
        <ul class="space-y-0.5">
          {#each { length: chapterCount } as _, chapterIndex}
            {@const isCurrent =
              slug &&
              bookIndex + 1 === +slug[0] &&
              chapterIndex + 1 === +slug[1]}
            {@const isBookmark =
              !isCurrent &&
              $readerPosition &&
              $readerPosition[0] === bookIndex + 1 &&
              $readerPosition[1] === chapterIndex + 1}
            {@const isFurthest =
              !isCurrent &&
              !isBookmark &&
              $mostAdvancedReaderPosition &&
              $mostAdvancedReaderPosition[0] === bookIndex + 1 &&
              $mostAdvancedReaderPosition[1] === chapterIndex + 1}
            <li
              data-current={isCurrent ? "" : undefined}
              data-bookmark={isBookmark ? "" : undefined}
              data-furthest={isFurthest ? "" : undefined}
              class="rounded-md transition-colors duration-150"
              class:bg-oblivious={isCurrent}
              class:font-semibold={isCurrent}
            >
              <a
                data-sveltekit-preload-data
                href="/read/{bookIndex + 1}/{chapterIndex + 1}/"
                onclick={() => {
                  navOpen = false;
                }}
                class="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm no-underline transition-colors hover:bg-gray-100"
                class:bg-oblivious={isCurrent}
                class:hover:bg-oblivious={isCurrent}
              >
                <span class="flex-1">Chapter {chapterIndex + 1}</span>
                {#if isBookmark}
                  <span
                    class="flex items-center gap-1 text-xs text-oblivious-dark"
                  >
                    <span>🔖</span>
                    <span class="hidden sm:inline">Last read</span>
                  </span>
                {/if}
                {#if isFurthest}
                  <span class="flex items-center gap-1 text-xs text-gray-500">
                    <span>📌</span>
                    <span class="hidden sm:inline">Furthest</span>
                  </span>
                {/if}
                {#if isCurrent}
                  <span class="text-xs text-gray-600">Reading</span>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  {/each}
</nav>

<div role="presentation">
  {#key slug}
    <PageTransition>
      {@render children()}
    </PageTransition>
  {/key}
</div>
