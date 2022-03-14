<script context="module">
  export async function load({ fetch }) {
    return {
      props: {
        data: {
          rest: 'home',
        },
      },
    };
    const res = await fetch('home.json');
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
  import Rest from './[...rest].svelte';

  export let data;
</script>

<Rest data={data} />
