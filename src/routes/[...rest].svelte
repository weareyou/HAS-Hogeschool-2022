<script context="module">
  export async function load({
    page,
    fetch,
  }) {
    const path = page.params.rest || 'home';
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
  import ModularPageTemplate from './_templates/$ModularPageTemplate.svelte';

  export let data;
</script>


<svelte:head>
  <title>{data.fields.pageTitle || data.system.name}</title>
  <meta content="{data.fields.pageDescription}" name="description" />
</svelte:head>

{#if data.system.contentType === 'modularPage'}
  <ModularPageTemplate modules={data.fields.grid} />
{:else}
  <p>Error: no templates defined for contentType <code>{data.system.contentType}</code>.</p>
{/if}
