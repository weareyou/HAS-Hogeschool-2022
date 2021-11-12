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

<p>Note: the title comes from Umbraco. This list is manually created.</p>

<ul>
  <li>
    <a href="/">Home</a>
  </li>
  <li>
    <a href="/contentpage-1/">/contentpage-1/</a>
  </li>
  <li>
    <a href="/contentpage-2/">/contentpage-2/</a>
  </li>
  <li>
    <a href="/contentpage-2/titel-van-sub-subpagina/">/contentpage-2/titel-van-sub-subpagina/</a>
  </li>
</ul>
