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
        error: new Error('Not found me.'),
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
  export let data;
</script>

<h1>{data.system.name}</h1>
