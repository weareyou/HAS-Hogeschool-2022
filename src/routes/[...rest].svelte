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
        data: params,
      },
    };

    // return {
    //   props: {
    //     data,
    //   },
    // };
  }
</script>

<script>
  import Meta from './_templates/$Meta.svelte';
  import ModularPageTemplate from './_templates/$ModularPageTemplate.svelte';

  export let data;
</script>

{data.rest}
<!--
<Meta {...data} />

{#if data.system.contentType === 'modularPage'}
  <ModularPageTemplate modules={data.fields.grid} />
{:else}
  <p>Error: no template defined for contentType <code>{data.system.contentType}</code>.</p>
{/if}
-->
