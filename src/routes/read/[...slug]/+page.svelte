<script module lang="ts">
  let startAtLastPage = false;
</script>

<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { get } from "svelte/store";
  import {
    readerPosition,
    mostAdvancedReaderPosition,
  } from "$lib/stores/reader-hints";
  import { textSizeIndex, PROSE_SIZES } from "$lib/stores/text-size";
  import { createPaginator } from "$lib/utils/paginator.svelte";

  let { data } = $props();

  const pag = createPaginator();

  let viewportEl: HTMLElement | undefined = $state();
  let contentEl: HTMLElement | undefined = $state();
  let photoBox: HTMLElement | undefined = $state();
  let showPhotoBox = $state(false);

  // Bind elements to paginator when they mount
  $effect(() => {
    if (viewportEl) pag.viewport = viewportEl;
  });
  $effect(() => {
    if (contentEl) pag.content = contentEl;
  });

  let slug = $derived(
    $page.params.slug
      ? $page.params.slug.split("/").map((x: string) => +x)
      : null,
  );

  let isLastChapterOfTrilogy = $derived(
    data.book === 3 && !data.nextChapterExists,
  );
  let isLastChapterOfBook = $derived(
    !data.nextChapterExists && !isLastChapterOfTrilogy,
  );
  let next = $derived<[number, number]>(
    isLastChapterOfBook ? [data.book + 1, 1] : [data.book, data.chapter + 1],
  );
  let prev = $derived<[number, number] | null>(
    data.chapter > 1 ? [data.book, data.chapter - 1] : null,
  );

  // 1-indexed current page for display
  let currentPage = $derived(pag.pageIndex + 1);
  let totalPages = $derived(pag.totalPages);

  let bookProgress = $derived(
    Math.round(
      ((data.chapter -
        1 +
        (totalPages > 1 ? (currentPage - 1) / (totalPages - 1) : 0)) /
        data.totalChapters) *
        100,
    ),
  );

  // Text size
  let sizeIdx = $state(get(textSizeIndex));
  let proseClass = $derived(PROSE_SIZES[sizeIdx]);

  function changeSize(delta: number) {
    const next = Math.max(0, Math.min(sizeIdx + delta, PROSE_SIZES.length - 1));
    if (next !== sizeIdx) {
      sizeIdx = next;
      textSizeIndex.set(next);
    }
  }

  // Re-measure when text size changes
  $effect(() => {
    const _s = sizeIdx;
    // Allow DOM to reflow after class change
    requestAnimationFrame(() => pag.measure());
  });

  // Auto-advance: navigate to next/prev chapter when turning past boundary
  $effect(() => {
    pag.onBoundaryReached = (dir: 1 | -1) => {
      if (dir === 1 && !isLastChapterOfTrilogy) {
        goto(`/read/${next[0]}/${next[1]}/`);
      } else if (dir === -1 && prev) {
        startAtLastPage = true;
        goto(`/read/${prev[0]}/${prev[1]}/`);
      }
    };
  });

  // Track position after each page turn
  $effect(() => {
    // Re-run when pageIndex changes
    const _idx = pag.pageIndex;
    if (slug && pag.ready) {
      pag.updatePosition(slug[0], slug[1]);
    }
  });

  function handleClick(e: MouseEvent) {
    const { clientX, target } = e;

    // Image lightbox
    if (target instanceof HTMLElement && target.tagName === "IMG") {
      showPhotoBox = true;
      setTimeout(() => {
        if (photoBox) photoBox.innerHTML = target.outerHTML;
      }, 1);
      return;
    }

    // Page turning — left half goes back, right half goes forward
    if (!viewportEl) return;
    const rect = viewportEl.getBoundingClientRect();
    const mid = rect.left + rect.width / 2;
    pag.turnPage(clientX <= mid ? -1 : 1);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    )
      return;

    if (showPhotoBox && e.key === "Escape") {
      showPhotoBox = false;
      return;
    }

    if (e.key === "ArrowRight" || e.key === "PageDown") {
      e.preventDefault();
      pag.turnPage(1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      pag.turnPage(-1);
    }
  }

  function hasAdvanced(
    stored: [number, number, number] | null,
    current: number[],
  ): boolean {
    return (
      !stored ||
      !stored[0] ||
      !stored[1] ||
      current[0] > (stored[0] ?? 0) ||
      (current[0] === stored[0] && current[1] > (stored[1] ?? 0))
    );
  }

  onMount(() => {
    const stored = get(readerPosition);

    // Capture and reset the module-level flag before async work
    const shouldStartAtEnd = startAtLastPage;
    startAtLastPage = false;

    // Measure after a frame so columns are laid out
    pag.measure();

    // Re-measure after images load and auto-restore position
    setTimeout(() => {
      pag.measure();

      // Auto-jump to last page (navigating backward) or saved position
      requestAnimationFrame(() => {
        if (shouldStartAtEnd) {
          pag.goToPage(pag.totalPages - 1, false);
        } else if (
          stored &&
          stored[0] === slug?.[0] &&
          stored[1] === slug?.[1] &&
          stored[2] > 1
        ) {
          const targetPage = pag.getPageForParagraph(stored[2] - 1);
          pag.goToPage(targetPage, false);
        }

        // Scroll the window down to the reader
        if (viewportEl) {
          viewportEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }, 500);

    return () => pag.destroy();
  });
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title>
    Oblivious | Book {data.book}, Chapter {data.chapter} | An overlanding motorbike
    journey through West Africa
  </title>
</svelte:head>

<article class="prose mt-4 mb-8 text-justify {proseClass} md:mb-12 max-w-none!">
  <!-- Reader row: gutter-left | viewport | gutter-right -->
  <div class="reader-row">
    <!-- Left gutter button -->
    <button
      onclick={() => pag.turnPage(-1)}
      aria-label="Previous page"
      class="reader-gutter reader-gutter-left"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gutter-icon"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>

    <!-- Viewport: clips the visible page -->
    <div
      bind:this={viewportEl}
      role="presentation"
      class="reader-viewport pt-4 relative overflow-hidden max-w-xl mx-auto"
      style={pag.viewportStyle}
    >
      <!-- Left click zone -->
      <button
        onclick={() => pag.turnPage(-1)}
        class="click-zone click-zone-left"
        aria-label="Previous page"
        tabindex="-1"
      ></button>
      <!-- Right click zone -->
      <button
        onclick={() => pag.turnPage(1)}
        class="click-zone click-zone-right"
        aria-label="Next page"
        tabindex="-1"
      ></button>

      <!-- Content: CSS columns + transform-based movement -->
      <div
        bind:this={contentEl}
        onclick={handleClick}
        ontouchstart={pag.handleTouchStart}
        ontouchmove={pag.handleTouchMove}
        ontouchend={pag.handleTouchEnd}
        role="presentation"
        class="reader-content pt-4 pb-4"
        style={pag.contentStyle}
      >
        <!-- Chapter heading -->
        {#if data.chapter === 1}
          <p
            class="font-header text-left text-lg uppercase tracking-widest text-gray-400 mb-1! mt-2!"
          >
            Book {data.book}
          </p>
        {/if}
        <p
          class="font-header text-left text-base uppercase tracking-widest text-gray-400 mb-4! mt-0!"
        >
          Chapter {data.chapter}
        </p>

        {@html data.content}
      </div>
    </div>

    <!-- Right gutter button -->
    <button
      onclick={() => pag.turnPage(1)}
      aria-label="Next page"
      class="reader-gutter reader-gutter-right"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="gutter-icon"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  </div>

  <!-- Bottom progress bar with chapter identity and text size picker -->
  <div
    class="mt-1 flex items-center justify-between gap-2 px-1 text-xs text-gray-500 select-none max-w-xl mx-auto"
  >
    <div class="min-w-0 shrink-0">
      {#if prev}
        <a
          href="/read/{prev[0]}/{prev[1]}/"
          class="no-underline text-oblivious-dark hover:text-oblivious transition-colors"
          >‹ Ch. {prev[1]}</a
        >
      {/if}
    </div>
    <div class="flex flex-col items-center gap-1 flex-1 min-w-0">
      <span class="font-header text-sm text-gray-700">
        Book {data.book}, Chapter {data.chapter}
      </span>
      <span>
        Page {currentPage} of {totalPages}
        <span class="mx-1 text-gray-300">·</span>
        {bookProgress}%
      </span>
      <div class="h-1 w-full max-w-md rounded-full bg-gray-200 overflow-hidden">
        <div
          class="h-full rounded-full bg-oblivious transition-all duration-300 ease-out"
          style="width: {bookProgress}%"
        ></div>
      </div>
      <!-- Text size controls -->
      <div class="flex items-center gap-1.5 mt-0.5">
        <button
          onclick={() => changeSize(-1)}
          disabled={sizeIdx <= 0}
          class="font-header text-gray-400 hover:text-oblivious-dark disabled:opacity-30 disabled:cursor-default cursor-pointer transition-colors leading-none"
          aria-label="Decrease text size">A−</button
        >
        <span class="text-gray-300">Text size</span>
        <button
          onclick={() => changeSize(1)}
          disabled={sizeIdx >= PROSE_SIZES.length - 1}
          class="font-header text-gray-400 hover:text-oblivious-dark disabled:opacity-30 disabled:cursor-default cursor-pointer transition-colors leading-none"
          aria-label="Increase text size">A+</button
        >
      </div>
    </div>
    <div class="min-w-0 shrink-0">
      {#if !isLastChapterOfTrilogy}
        <a
          href="/read/{next[0]}/{next[1]}/"
          class="no-underline text-oblivious-dark hover:text-oblivious transition-colors"
          >{data.nextChapterExists ? `Ch. ${next[1]}` : `Book ${next[0]}`} ›</a
        >
      {/if}
    </div>
  </div>
</article>

{#if showPhotoBox}
  <div
    in:fade
    bind:this={photoBox}
    onclick={() => (showPhotoBox = false)}
    role="button"
    tabindex="0"
    onkeydown={(e) => {
      if (e.key === "Escape") showPhotoBox = false;
    }}
    class="fixed inset-0 z-30 flex cursor-zoom-out items-center justify-center bg-oblivious-opaque"
  ></div>
{/if}

<style>
  /* Reader row: flex container for gutter buttons + viewport */
  .reader-row {
    display: flex;
    align-items: stretch;
    gap: 0;
  }

  /* Gutter page-turn buttons flanking the text */
  .reader-gutter {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    background: transparent;
    color: #d1d5db;
    cursor: pointer;
    border: none;
    padding: 0;
    border-radius: 8px;
    transition: color 0.2s;
  }
  .reader-gutter:hover {
    color: #9ca3af;
  }
  .gutter-icon {
    width: 28px;
    height: 28px;
  }
  @media (max-width: 768px) {
    .reader-gutter {
      width: 28px;
    }
    .gutter-icon {
      width: 20px;
      height: 20px;
    }
  }

  .reader-viewport {
    flex: 1;
    min-width: 0;
    touch-action: pan-y;
    padding-inline: 0.5rem;
  }
  .reader-content {
    overflow: visible;
  }

  /* Invisible click zones for left/right page turns */
  .click-zone {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 2;
    background: transparent;
    border: none;
    padding: 0;
    outline: none;
  }
  .click-zone-left {
    left: 0;
    width: 50%;
    cursor: w-resize;
  }
  .click-zone-right {
    right: 0;
    width: 50%;
    cursor: e-resize;
  }
</style>
