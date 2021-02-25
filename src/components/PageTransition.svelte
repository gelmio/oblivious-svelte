<script>
    import { fly } from "svelte/transition";
</script>

<div
    in:fly={{ y: -20, duration: 500 }}
>
    <slot />
</div>
