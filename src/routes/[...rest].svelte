<script context="module">
  export async function load({
    params,
    fetch,
  }) {
    const path = params.rest || 'home';
    const res = await fetch(`/${encodeURIComponent(path)}.json`);
    const data = await res.json();

    if (data.error) {
      return {
        status: data.errorCode,
        error: data.error,
      };
    }

    return {
      props: {
        data,
      },
    };
  }
</script>

<script>
  import Head from './_templates/_Head.svelte';
  import ModularPageTemplate from './_templates/$ModularPageTemplate.svelte';
  import Header from '../components/organisms/global/Header.svelte';
  import Footer from '../components/organisms/global/Footer.svelte';

  export let data;
  const navItems = [];
</script>

<Head {...data} />

<Header items={navItems} />

<main id="main">
  {#if data.system.contentType === 'modularPage'}
    <ModularPageTemplate modules={data.fields.grid} />
  {:else}
    <p>Error: no template defined for contentType <code>{data.system.contentType}</code>.</p>
  {/if}
</main>

<Footer />
