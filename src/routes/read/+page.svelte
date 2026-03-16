<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { get } from "svelte/store";
  import { readerPosition } from "$lib/stores/reader-hints";
  import Spinner from "$lib/components/Spinner.svelte";

  onMount(() => {
    const pos = get(readerPosition);
    const target =
      pos && pos[0] && pos[1] ? `/read/${pos[0]}/${pos[1]}/` : "/read/1/1/";
    goto(target, { replaceState: true });
  });
</script>

<svelte:head>
  <title>
    Read the Oblivious Trilogy for Free | An outrageously inappropriate journey
    through West Africa on a Royal Enfield
  </title>
  <meta
    property="og:description"
    content="Come along on the adventure, while we make our way through West Africa on a wildly inappropriate Royal Enfield!"
  />
  <meta
    name="twitter:description"
    content="Come along on the adventure, while we make our way through West Africa on a wildly inappropriate Royal Enfield!"
  />
  <meta
    name="twitter:title"
    content="Read the Oblivious Trilogy for Free | An outrageously inappropriate journey through West Africa on a Royal Enfield."
  />
</svelte:head>

<div class="mt-24 flex justify-center">
  <Spinner />
</div>
