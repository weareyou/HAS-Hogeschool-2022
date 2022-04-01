<script>
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let label = '';
  export let items = [];
  export let activeSegment = '';
</script>

<style lang="scss">
  @use 'src/sass/generic/utilities';
  @use 'node_modules/@supple-kit/supple-css/utilities/visually-hidden';

  a {
    text-decoration: none;

    #{utilities.$global-interaction-states},
    &[aria-current] {
      text-decoration: underline;
    }
  }
</style>
<nav aria-labelledby="primarynav-label">
  <span class="u-visually-hidden">{label}</span>
  <Layout fit gap="base" role="list">
    {#each items as item}
      <Cell role="listitem">
        <a
          href={item.url}
          aria-current={item.url.split('/')[1] === activeSegment ? 'page' : null}
        >
          {item.name}
        </a>
      </Cell>
    {/each}
  </Layout>
</nav>

