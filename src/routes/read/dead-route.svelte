<script context="module" lang="ts">
  export async function preload({ params, query }) {
    [1, 2, 3].forEach((bookNumber) => this.fetch(`read/${bookNumber}/.json`));
    console.log("DONE");
  }
</script>

<div></div>
