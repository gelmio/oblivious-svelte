<script lang="ts">
  let {
    size = "50",
    unit = "px",
    colorOuter = "#1871d3",
    colorCenter = "#96c8ffad",
    colorInner = "#676778",
    durationMultiplier = 1,
  }: {
    size?: string | number;
    unit?: string;
    colorOuter?: string;
    colorCenter?: string;
    colorInner?: string;
    durationMultiplier?: number;
  } = $props();

  let durationOuter = $derived(`${durationMultiplier * 2}s`);
  let durationInner = $derived(`${durationMultiplier * 1.5}s`);
  let durationCenter = $derived(`${durationMultiplier * 3}s`);
</script>

<div
  class="circle inline-block"
  style="--size: {size}{unit}; --colorInner: {colorInner}; --colorCenter: {colorCenter}; --colorOuter: {colorOuter}; --durationInner: {durationInner}; --durationCenter: {durationCenter}; --durationOuter: {durationOuter};"
></div>

<style>
  .circle {
    width: var(--size);
    height: var(--size);
    box-sizing: border-box;
    position: relative;
    border: 3px solid transparent;
    border-top-color: var(--colorOuter);
    border-radius: 50%;
    animation: circleSpin var(--durationOuter) linear infinite;
  }
  .circle:before,
  .circle:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
  }
  .circle:after {
    border-top-color: var(--colorInner);
    top: 9px;
    left: 9px;
    right: 9px;
    bottom: 9px;
    animation: circleSpin var(--durationInner) linear infinite;
  }
  .circle:before {
    border-top-color: var(--colorCenter);
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    animation: circleSpin var(--durationCenter) linear infinite;
  }
  @keyframes circleSpin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
