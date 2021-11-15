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
  import Text from '../components/atoms/text/Text.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.fields.title}</title>
</svelte:head>

<h1>{data.fields.title}</h1>

<Text markdown={data.fields.intro} />

<p>Note: the title comes from Umbraco.</p>
