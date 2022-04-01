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
  import Header from '../components/organisms/global/Header.svelte';
  import ModularPageTemplate from './_templates/$ModularPageTemplate.svelte';
  import Footer from '../components/organisms/global/Footer.svelte';

  export let data;
</script>

<Head {...data} />

<Header {...data.navigation} homeUrl={data.homeUrl} />

<main id="main">
  {#if data.contentType === 'modularPage'}
    <ModularPageTemplate modules={data.grid} />
  {:else}
    <p>Error: no template defined for contentType <code>{data.contentType}</code>.</p>
  {/if}
</main>

<Footer />
