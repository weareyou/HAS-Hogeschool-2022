<script context="module">
  /*export async function load({ fetch }) {
    const res = await fetch('/nav.json');
    const navItems = await res.json();

    return {
      props: {
        navItems,
      },
    };
  }*/
</script>
<script>
  // import 'wicg-inert';
  import { page } from '$app/stores';
  import Header from '../components/organisms/Header.svelte';
  import Footer from '../components/organisms/Footer.svelte';

  $: segments = $page.path.split('/');
  const navItems = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/contentpage-1/',
      label: 'Subpage 1',
    },
    {
      href: '/contentpage-2/',
      label: 'Subpage 2',
    },
    {
      href: '/contentpage-2/titel-van-sub-subpagina/',
      label: 'Subpage 2 subsubpage 1',
    },
    {
      href: '/not-a-page/',
      label: 'This should give a 404',
    },
  ]
</script>

<style global lang="scss">
  @use 'src/sass/leading';
</style>

<a href="#main">Spring naar inhoud</a>

<Header items={navItems} segments={segments} />

<main id="main">
  <slot></slot>
</main>

<Footer />
