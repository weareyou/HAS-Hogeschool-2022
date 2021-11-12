<script context="module">
  export async function load({
    fetch,
    error,
    status,
  }) {
    const res = await fetch('/home.json');
    const data = await res.json();

    return {
      props: {
        data,
        error,
        status,
      },
    };
  }
</script>

<script>
  export let status;
  export let error;
  export let data;

  const dev = process.env.NODE_ENV === 'development';
</script>
<!--{data.site.siteName}-->
<svelte:head>
  <title>{status}: {error.message}</title>
</svelte:head>

<h1>{status}: {error.message}</h1>


{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
