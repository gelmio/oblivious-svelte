<script lang="ts">
  import DownloadBox from "$lib/components/DownloadBox.svelte";

  const photos = [
    {
      src: "/images/carousel/images(1).jpg",
      caption: "The Royal Enfield looking sensational in outback West Africa",
    },
    {
      src: "/images/carousel/images(2).jpg",
      caption: "Cow in a tree... That's all...",
    },
    {
      src: "/images/carousel/images(3).jpg",
      caption: "Trailblazing through Guinea. Too Fucking hot.",
    },
    {
      src: "/images/carousel/images(4).jpg",
      caption: "Hitchhiking the Sahara on a mining train into the night.",
    },
    {
      src: "/images/carousel/images(5).jpg",
      caption: "Sunset in the stunning Sahara Desert.",
    },
    {
      src: "/images/carousel/images(6).jpg",
      caption: "Hiking in stunning outback Guinea.",
    },
    {
      src: "/images/carousel/images(7).jpg",
      caption: "One of the few properly done photos from the trip.",
    },
    {
      src: "/images/carousel/images(9).jpg",
      caption: "Posing infront of a boat.",
    },
    {
      src: "/images/carousel/images(10).jpg",
      caption: "Mobbed, with JB the Brit.",
    },
    {
      src: "/images/carousel/images(11).jpg",
      caption: "Hot as fuck in 40 degree heat and a leather jacket.",
    },
  ];

  const featuredLogos = [
    { src: "/images/OverlandBound-grey.png", alt: "Overland Bound" },
    { src: "/images/Rider-grey.png", alt: "Rider Magazine" },
    { src: "/images/ADVMoto-grey.png", alt: "ADVMoto" },
    { src: "/images/ExcuseMyBike-grey.png", alt: "Excuse My Bike" },
    { src: "/images/royalenfield-grey.png", alt: "Royal Enfield" },
    { src: "/images/cruiser-grey.png", alt: "Cruiser" },
  ];

  let zoomedPhoto = $state<{ src: string; caption: string } | null>(null);

  function openZoom(photo: { src: string; caption: string }) {
    zoomedPhoto = photo;
  }

  function closeZoom() {
    zoomedPhoto = null;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") closeZoom();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<svelte:head>
  <title
    >Oblivious | An outrageously inappropriate journey through West Africa</title
  >
  <meta
    name="description"
    content="Oblivious is an epic solo overlanding journey through West Africa on a Royal Enfield motorbike. Come along on the unique adventure for free!"
  />
  <meta
    property="og:description"
    content="Oblivious is an epic solo overlanding journey through West Africa on a Royal Enfield motorbike. Come along on the unique adventure for free!"
  />
  <meta property="og:url" content="http://www.obliviousthebook.com/" />
  <meta
    name="twitter:description"
    content="Oblivious is an epic solo overlanding journey through West Africa on a Royal Enfield motorbike. Come along on the unique adventure for free!"
  />
  <meta
    name="twitter:title"
    content="Oblivious | An outrageously inappropriate journey through West Africa"
  />
</svelte:head>

<!-- ============================================================ -->
<!-- HERO: Full-screen with background image (from A, full-width) -->
<!-- ============================================================ -->
<section
  class="full-bleed relative flex items-center justify-center min-h-screen"
>
  <div class="absolute inset-0">
    <img
      src="/images/carousel/images(4).jpg"
      alt="Hitchhiking the Sahara on a mining train"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/50"></div>
  </div>
  <div
    class="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-4xl animate-fade-in-up"
  >
    <h1 class="text-5xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-lg">
      Yeah Buddy!
    </h1>
    <p
      class="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed"
    >
      Book Three of the <em>Oblivious Trilogy</em> is here — and available for free.
    </p>
    <div class="flex flex-col sm:flex-row gap-4">
      <a
        class="inline-block text-lg sm:text-xl px-8 py-4 rounded-lg no-underline bg-oblivious text-gray-900 font-medium
          shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        href="/read"
        data-sveltekit-preload-data
      >
        Start reading now
      </a>
      <DownloadBox>
        <span
          class="inline-block text-lg sm:text-xl px-8 py-4 rounded-lg
            bg-white/10 text-white border border-white/40 backdrop-blur-sm
            hover:bg-white/20 transition-all duration-200 cursor-pointer"
        >
          Download the e-book
        </span>
      </DownloadBox>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- BOOK SHOWCASE / CTA (from A) -->
<!-- ============================================================ -->
<section
  class="flex flex-col items-center py-20 md:py-32 px-6 max-w-5xl mx-auto"
>
  <div class="flex flex-col md:flex-row items-center gap-10 md:gap-16">
    <div class="shrink-0 animate-fade-in-up">
      <img
        src="/images/3D-cover.jpg"
        alt="Oblivious book cover"
        class="w-64 md:w-80 rounded-sm"
      />
    </div>
    <div class="text-center md:text-left animate-fade-in-up delay-200">
      <h2 class="text-3xl md:text-5xl mb-4">
        Ride through Africa on an outrageously inappropriate <em
          >Royal Enfield Bullet</em
        >
      </h2>
      <p class="text-lg text-gray-600 mb-6 leading-relaxed">
        An epic solo overlanding journey through West Africa. Three books. One
        hell of a ride. Free to read, free to download.
      </p>
      <div
        class="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
      >
        <a
          class="inline-block text-lg px-6 py-3 rounded-lg no-underline bg-oblivious text-gray-900 font-medium
            shadow-sm hover:shadow-md transition-all duration-200"
          href="/read"
          data-sveltekit-preload-data
        >
          Read online
        </a>
        <DownloadBox>
          <span
            class="inline-block text-lg px-6 py-3 rounded-lg border border-oblivious
              text-gray-800 hover:bg-oblivious/10 transition-all duration-200 cursor-pointer"
          >
            Download e-book
          </span>
        </DownloadBox>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- QUOTE SEPARATOR 1 (C-style, full-width with photo background) -->
<!-- ============================================================ -->
<section class="full-bleed relative py-24 md:py-32">
  <img
    src="/images/carousel/images(5).jpg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/60"></div>
  <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
    <p class="text-2xl md:text-4xl italic text-white leading-relaxed">
      &ldquo;This is fascinating shit, man. You're reminding me of a modern
      Hemingway&rdquo;
    </p>
    <p class="text-base text-white/70 mt-4">
      — Ben Napier, <em>Scotsman.co</em>
    </p>
  </div>
</section>

<!-- ============================================================ -->
<!-- THE JOURNEY: Masonry photo grid with click-to-zoom (from A) -->
<!-- ============================================================ -->
<section class="py-16 md:py-24 px-6 max-w-6xl mx-auto">
  <h3 class="text-3xl md:text-4xl text-center mb-12">The Journey</h3>
  <div class="masonry">
    {#each photos as photo}
      <button
        class="group relative overflow-hidden rounded-lg cursor-zoom-in w-full text-left bg-transparent border-none p-0"
        onclick={() => openZoom(photo)}
        aria-label="View: {photo.caption}"
      >
        <img
          src={photo.src}
          alt={photo.caption}
          class="w-full block transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end"
        >
          <p
            class="text-white text-sm p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            {photo.caption}
          </p>
        </div>
      </button>
    {/each}
  </div>
</section>

<!-- ============================================================ -->
<!-- QUOTE SEPARATOR 2 (C-style, full-width with photo background) -->
<!-- ============================================================ -->
<section class="full-bleed relative py-24 md:py-32">
  <img
    src="/images/carousel/images(6).jpg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/50"></div>
  <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
    <p class="text-2xl md:text-4xl italic text-white leading-relaxed">
      &ldquo;Jesus tap-dancing Christ these are great stories&rdquo;
    </p>
    <p class="text-base text-white/70 mt-4">— Zach Kelm</p>
  </div>
</section>

<!-- ============================================================ -->
<!-- READ ANYWHERE: Devices section (from A) -->
<!-- ============================================================ -->
<section class="py-16 md:py-24 max-w-5xl mx-auto px-6">
  <div class="flex flex-col lg:flex-row items-center gap-10">
    <img
      src="/images/kindle-pad-phone.jpg"
      alt="Book being used on various platforms"
      class="w-full lg:w-3/5 rounded-lg"
    />
    <div class="flex flex-col gap-4 text-center lg:text-left">
      <h2 class="text-3xl md:text-4xl">Read anywhere</h2>
      <p class="text-lg text-gray-600 leading-relaxed">
        From your phone, tablet, or e-reader — ride the adventure wherever you
        are.
      </p>
      <div
        class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
      >
        <a
          class="inline-block text-lg px-6 py-3 rounded-lg no-underline bg-oblivious text-gray-900 font-medium
            shadow-sm hover:shadow-md transition-all duration-200"
          href="/read"
          data-sveltekit-preload-data
        >
          Read online now
        </a>
        <DownloadBox>
          <span
            class="inline-block text-lg px-6 py-3 rounded-lg border border-oblivious
            text-gray-800 hover:bg-oblivious/10 transition-all duration-200 cursor-pointer"
          >
            Download e-book
          </span>
        </DownloadBox>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- QUOTE SEPARATOR 3 (C-style, full-width with photo background) -->
<!-- ============================================================ -->
<section class="full-bleed relative py-24 md:py-32">
  <img
    src="/images/carousel/images(1).jpg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/55"></div>
  <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
    <p class="text-xl md:text-3xl italic text-white leading-relaxed">
      &ldquo;Adventure is such an abused and overused word these days... Check
      this out for a taste of <em>real</em> adventure.&rdquo;
    </p>
    <p class="text-base text-white/70 mt-4">— Iron and Resin</p>
  </div>
</section>

<!-- ============================================================ -->
<!-- AS FEATURED IN (from A) -->
<!-- ============================================================ -->
<section class="py-16 md:py-20 px-6 max-w-5xl mx-auto">
  <h5 class="text-center text-sm uppercase tracking-widest text-gray-500 mb-8">
    As Featured In
  </h5>
  <div
    class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 items-center justify-items-center"
  >
    {#each featuredLogos as logo}
      <img
        src={logo.src}
        alt={logo.alt}
        class="max-h-10 md:max-h-16 opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale"
      />
    {/each}
  </div>
</section>

<!-- ============================================================ -->
<!-- FINAL CTA with photo background (C-style ending) -->
<!-- ============================================================ -->
<section class="full-bleed relative py-20 md:py-32">
  <img
    src="/images/carousel/images(7).jpg"
    alt=""
    class="absolute inset-0 w-full h-full object-cover"
  />
  <div class="absolute inset-0 bg-black/60"></div>
  <div class="relative z-10 text-center px-6">
    <p class="text-xl md:text-2xl italic text-white/80 mb-4">
      &ldquo;Don't laugh at him, he's not funny!&rdquo;
    </p>
    <p class="text-sm text-white/60 mb-10">— My Mum</p>
    <h2 class="text-4xl md:text-6xl text-white mb-6">Adventure for free!</h2>
    <p class="text-xl text-white/70 mb-8">Or... pay what you like!</p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        class="inline-block text-xl px-8 py-4 rounded-lg no-underline bg-oblivious text-gray-900 font-medium
          shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        href="/read"
        data-sveltekit-preload-data
      >
        Start reading
      </a>
      <a
        class="inline-block text-xl px-8 py-4 rounded-lg no-underline
          bg-transparent text-white border-2 border-white
          hover:bg-white hover:text-gray-900 transition-all duration-200"
        href="https://payhip.com/b/5eyXH"
        rel="nofollow"
      >
        Buy me a coffee
      </a>
    </div>
  </div>
</section>

<!-- ============================================================ -->
<!-- LIGHTBOX OVERLAY -->
<!-- ============================================================ -->
{#if zoomedPhoto}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 cursor-zoom-out animate-fade-in"
    onclick={closeZoom}
    onkeydown={(e) => e.key === "Escape" && closeZoom()}
    role="dialog"
    aria-modal="true"
    aria-label="Zoomed photo: {zoomedPhoto.caption}"
    tabindex="-1"
  >
    <button
      class="absolute top-4 right-4 text-white/70 hover:text-white text-4xl bg-transparent border-none cursor-pointer z-10"
      onclick={closeZoom}
      aria-label="Close"
    >
      &times;
    </button>
    <div class="max-w-[90vw] max-h-[90vh] flex flex-col items-center">
      <img
        src={zoomedPhoto.src}
        alt={zoomedPhoto.caption}
        class="max-w-full max-h-[80vh] object-contain rounded-lg"
      />
      <p class="text-white/80 text-base mt-4 text-center px-4">
        {zoomedPhoto.caption}
      </p>
    </div>
  </div>
{/if}
