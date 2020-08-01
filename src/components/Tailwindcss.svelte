<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  @font-face {
    font-family: 'lato-light';
    font-style: normal;
    src: url('/fonts/Lato-Light.ttf') format('truetype');
  }
  h1, h2, h3, h4, h5, h6 {
    @apply font-header;
    @apply uppercase;
  }

  h1 {
    @apply text-6xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
  h6 {
    @apply text-lg;
  }
  p {
    @apply font-serif mb-4;
    line-height: 1.33;
    font-size: 1.25rem;
  }
  a {
    text-decoration: underline solid theme('colors.oblivious');
  }
  button {
    background: theme('colors.oblivious');
    padding: 0.5em;
    border-radius: 0.5em;
  }
</style>
