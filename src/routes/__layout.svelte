<script context="module">
  export async function load({ fetch }) {
    const path = 'navigation/header-navigation';
    const res = await fetch(`/${encodeURIComponent(path)}.json`);
    const data = await res.json();

    return {
      props: {
        navItems: data.fields.links,
      },
    };
  }
</script>
<script>
  import 'wicg-inert';
  import 'lazysizes';
  // eslint-disable-next-line
  import { page } from '$app/stores';
  import Header from '../components/organisms/Header.svelte';
  import Footer from '../components/organisms/Footer.svelte';
  import Button from '../components/atoms/Button.svelte';

  $: segments = $page.path.split('/');
  export let navItems;
</script>

<style global lang="scss">
  @use 'src/sass/leading';

  :global(.c-skip-link) {
    position: absolute;
    z-index: 2;
    transform: translateX(-100%);

    &:focus {
      transform: none;
    }
  }
</style>

<Button
  class="c-skip-link"
  href="#main"
  label="Ga naar de inhoud"
/>

<Header items={navItems} segments={segments} />

<main id="main">
  <slot></slot>
</main>

<Footer />
