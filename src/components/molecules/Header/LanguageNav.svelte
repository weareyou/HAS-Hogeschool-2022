<script>
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';

  export let label = '';
  export let items = [];
</script>

<style lang="scss">
  @use '@supple-kit/supple-css/utilities/visually-hidden';
</style>

<nav aria-labelledby="nav-languages">
  <span class="u-visually-hidden" id="nav-languages">{label}</span>
  <Layout fit gap="base" role="list">
    {#each items as { lang, label, isActive, url }}
      <Cell>
        <a
          href={url}
          aria-current={isActive ? 'true' : null}
          lang={lang}
        >
          {label}
        </a>
      </Cell>
    {/each}
  </Layout>
</nav>
