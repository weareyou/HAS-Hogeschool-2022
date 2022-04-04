<script>
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';

  export let label = '';
  export let items = [];
</script>

<style lang="scss">
  @use '../../../../node_modules/@supple-kit/supple-css/utilities/visually-hidden/index';
</style>

<nav aria-labelledby="primary-nav-label">
  <span class="u-visually-hidden" id="primary-nav-label">{label}</span>
  <Layout fit gap="base" role="list">
    {#each items as item}
      <Cell role="listitem">
        <a
          href={item.url}
          aria-current={item.isActive ? 'page' : null}
        >
          {item.label}
        </a>
      </Cell>
    {/each}
  </Layout>
</nav>

