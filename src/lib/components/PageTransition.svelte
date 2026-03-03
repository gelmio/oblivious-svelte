<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div in:fly={{ y: -20, duration: 500 }}>
	{@render children()}
</div>
