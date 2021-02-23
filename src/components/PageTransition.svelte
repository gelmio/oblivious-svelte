<script>
    import { fly } from "svelte/transition";
</script>

<div
    in:fly={{ y: -20, duration: 500, delay: 510 }}
>
    <slot />
</div>
