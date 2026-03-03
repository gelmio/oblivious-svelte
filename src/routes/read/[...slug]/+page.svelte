<script lang="ts">
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import { giveScrollHint, readerPosition } from "$lib/stores/reader-hints";
  import smoothScroll from "$lib/utils/smooth-scroll";

  let { data } = $props();

  let reader: HTMLElement | undefined = $state();
  let readerBounds: DOMRect | undefined = $state();
  let windowBounds: [x: number, y: number] | undefined = $state();
  let readerWidth: number | undefined = $state();
  let readerHeight: number | undefined = $state();
  let readerTop: number | undefined = $state();
  let columnGap = 50;
  let resizeTolerance = 100;
  let photoBox: HTMLElement | undefined = $state();
  let showPhotoBox = $state(false);
  let shouldJumpToPosition = $state(false);
  let observer: IntersectionObserver | undefined;
  let paragraphElements: NodeListOf<Element> | undefined;

  let slug = $derived(
    $page.params.slug
      ? $page.params.slug.split("/").map((x: string) => +x)
      : null,
  );

  let next = $derived<[number, number]>(
    !data.nextChapterExists && data.book < 3
      ? [data.book + 1, 1]
      : [data.book, data.chapter + 1],
  );

  function readersPositionHasAdvanced(
    storedPosition: [number, number, number] | null,
    currentPosition: number[],
  ): boolean {
    return (
      ((!storedPosition || !storedPosition[0] || !storedPosition[1]) &&
        !!currentPosition) ||
      currentPosition[0] > (storedPosition?.[0] ?? 0) ||
      (currentPosition[0] === storedPosition?.[0] &&
        currentPosition[1] > (storedPosition?.[1] ?? 0))
    );
  }

  function setReaderBounds() {
    if (reader) {
      windowBounds = [window.innerWidth, window.innerHeight];
      if (
        !readerBounds ||
        !readerHeight ||
        !readerWidth ||
        windowBounds[0] < readerWidth ||
        windowBounds[1] < readerHeight ||
        windowBounds[0] > readerWidth + resizeTolerance ||
        windowBounds[1] > readerHeight + resizeTolerance
      ) {
        readerHeight = Math.round(windowBounds[1]);
        readerBounds = reader.getBoundingClientRect();
        readerWidth = Math.round(readerBounds.width);
      }
    }
  }

  function debounce(fn: () => void, delay: number) {
    let timer: ReturnType<typeof setTimeout>;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }

  const snapToPage = () => {
    if (!reader || !readerWidth) return;
    const currentScroll = reader.scrollLeft;
    setTimeout(() => {
      if (!reader || !readerWidth) return;
      const remainder = reader.scrollLeft % (readerWidth + columnGap);
      if (currentScroll === reader.scrollLeft && remainder) {
        const moveLeft =
          remainder / (readerWidth + columnGap) < 0.5
            ? -remainder
            : readerWidth + columnGap - remainder;
        smoothScroll(
          reader,
          [reader.scrollLeft, reader.scrollTop],
          [reader.scrollLeft + moveLeft, reader.scrollTop],
          300,
        );
      }
    }, 50);
  };

  const debouncedSnap = debounce(snapToPage, 1000);

  const handleClick = (e: MouseEvent) => {
    const { clientX, target } = e;
    if (target instanceof HTMLElement && target.tagName === "IMG") {
      showPhotoBox = true;
      setTimeout(() => {
        if (photoBox) {
          photoBox.innerHTML = target.outerHTML;
        }
      }, 1);
    } else if (clientX && readerBounds && readerBounds.left && readerWidth) {
      const midwayScreenX = readerBounds.left + readerWidth / 2;
      const scrollDistance = readerWidth + columnGap;
      if (!reader) return;
      smoothScroll(
        reader,
        [reader.scrollLeft, reader.scrollTop],
        [
          reader.scrollLeft +
            (clientX <= midwayScreenX ? -1 : 1) * scrollDistance,
          reader.scrollTop,
        ],
        300,
        debouncedSnap,
      );
    }
  };

  function jumpToParagraph() {
    if (!paragraphElements || !reader || !$readerPosition) return;
    const elementToJumpTo = paragraphElements[$readerPosition[2] - 1];
    if (elementToJumpTo instanceof HTMLElement) {
      smoothScroll(
        reader,
        [reader.scrollLeft, reader.scrollTop],
        [elementToJumpTo.offsetLeft, reader.scrollTop],
        300,
        debouncedSnap,
      );
    }
  }

  function setupObservers() {
    if (paragraphElements && paragraphElements.length > 0 && slug) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting === true && paragraphElements) {
            const currentIndex = Array.from(paragraphElements).indexOf(
              entries[0].target,
            );
            if (
              currentIndex > -1 &&
              currentIndex > ($readerPosition?.[2] ?? 0) - 1
            ) {
              readerPosition.set([slug![0], slug![1], currentIndex + 1]);
            }
          }
        },
        { threshold: [0] },
      );
      Array.from(paragraphElements).forEach((el) => observer!.observe(el));
    }
  }

  onMount(() => {
    paragraphElements = document.querySelectorAll(".reader p");
    if (slug && readersPositionHasAdvanced($readerPosition, slug)) {
      readerPosition.set([slug[0], slug[1], 1]);
      setupObservers();
    } else if (
      $readerPosition &&
      $readerPosition[0] === slug?.[0] &&
      $readerPosition[1] === slug?.[1] &&
      $readerPosition[2] > 1
    ) {
      shouldJumpToPosition = true;
      setupObservers();
    } else if (
      $readerPosition &&
      $readerPosition[0] === slug?.[0] &&
      $readerPosition[1] === slug?.[1] &&
      $readerPosition[2] === 1
    ) {
      setupObservers();
    }

    setReaderBounds();
    setTimeout(() => {
      setReaderBounds();
      if (readerBounds) {
        readerTop =
          (window.pageYOffset || document.documentElement.scrollTop) +
          readerBounds.top;
        smoothScroll(
          window,
          [window.scrollX, window.scrollY],
          [window.scrollX, readerTop],
          600,
        );
      }
    }, 2000);

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
</script>

<svelte:window onresize={() => setReaderBounds()} />

<svelte:head>
  <title>
    Oblivious | Book {data.book}, Chapter {data.chapter} | An overlanding motorbike
    journey through West Africa
  </title>
</svelte:head>

<article class="prose mb-8 pt-16 text-justify md:prose-xl md:mb-12">
  <h2 class="font-header">Book {data.book}, Chapter {data.chapter}</h2>
  <div
    bind:this={reader}
    onclick={handleClick}
    role="presentation"
    class="reader no-scrollbar relative overflow-hidden py-12"
    style={readerWidth && readerHeight
      ? `height: ${readerHeight}px; columns: auto ${readerWidth}px; column-gap: ${columnGap}px; column-rule: 1px solid #000;`
      : ""}
  >
    {@html data.content}
    {#if next[0] < 3}
      <div class="mt-8 flex flex-col items-end justify-end md:flex-row">
        <a
          onclick={(e) => e.stopPropagation()}
          href="/read/{next[0]}/{next[1]}/"
          class="inline-block rounded-lg bg-oblivious p-2 text-lg no-underline"
        >
          Next {data.nextChapterExists ? "Chapter" : "Book"}
        </a>
        {#if next[1] > 10 && !(next[1] % 5)}
          <a
            onclick={(e) => e.stopPropagation()}
            href="https://payhip.com/b/5eyXH"
            rel="nofollow"
            class="mx-4 inline-block rounded-lg border border-solid border-oblivious bg-white p-2 text-lg no-underline"
          >
            Or buy me a coffee!
          </a>
        {/if}
      </div>
    {:else}
      <div class="mt-8 text-center font-header">
        <p>Congrats! You've made it to the end of Book 2!</p>
        <p>
          That's as far as things go for the moment, but Book 3 is on the way
          out soon!
        </p>
        <p>
          While you wait, feel free to jump on the mailing list, or maybe even <a
            onclick={(e) => e.stopPropagation()}
            href="https://payhip.com/b/5eyXH"
            rel="nofollow"
            class="border-b border-oblivious-dark">buy me a coffee!</a
          >
        </p>
      </div>
    {/if}
  </div>
  <div class="-mt-10 text-center text-xs">Oblivious | Luke Gelmi</div>
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
    class="fixed inset-0 flex cursor-zoom-out items-center justify-center bg-oblivious-opaque"
  ></div>
{/if}
{#if $giveScrollHint}
  <div
    in:fade={{ delay: 1000 }}
    out:fade
    class="fixed inset-0 z-10 flex items-center justify-center bg-oblivious-opaque"
  >
    <div class="m-2 flex flex-col rounded-lg bg-white p-2 text-center md:p-16">
      <p class="mb-4 font-header text-xl md:text-2xl">Here's some tips:</p>
      <p class="mb-1 font-sans text-base md:text-lg">
        Tap the text to turn the pages.
      </p>
      <p class="mb-1 font-sans text-base md:text-lg">Tap the images to zoom.</p>
      <p class="mb-1 font-sans text-base md:text-lg">
        I'll help you out by keeping track of where you're up to.
      </p>
      <p class="mb-1 font-sans text-base md:text-lg">
        I'll also scroll automatically to where the pages are so you don't have
        to bother your finger...
      </p>
      <div>
        <span
          onclick={() => {
            giveScrollHint.set(false);
          }}
          role="button"
          tabindex="0"
          onkeydown={(e) => {
            if (e.key === "Enter" || e.key === " ") giveScrollHint.set(false);
          }}
          class="inline-block cursor-pointer rounded-lg bg-oblivious p-2 text-base no-underline md:text-lg"
        >
          Got it
        </span>
      </div>
    </div>
  </div>
{:else if shouldJumpToPosition}
  <div
    in:fade={{ delay: 1000 }}
    class="fixed inset-0 z-10 flex items-center justify-center bg-oblivious-opaque"
  >
    <div class="m-2 flex flex-col rounded-lg bg-white p-2 text-center md:p-16">
      <p class="mb-4 font-sans text-base md:text-lg">
        Want to jump to the last page you were reading?
      </p>
      <div>
        <button
          onclick={() => {
            shouldJumpToPosition = false;
            jumpToParagraph();
          }}
          class="inline-block rounded-lg bg-oblivious p-2 text-base no-underline md:text-lg"
        >
          Sure
        </button>
        <button
          onclick={() => {
            shouldJumpToPosition = false;
            if ($readerPosition) {
              readerPosition.set([$readerPosition[0], $readerPosition[1], 1]);
            }
          }}
          class="inline-block cursor-pointer rounded-lg border border-solid border-oblivious bg-white p-2 text-base no-underline md:text-lg"
        >
          Nup
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
