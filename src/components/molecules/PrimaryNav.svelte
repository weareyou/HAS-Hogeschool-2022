<script>
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let items = [];
  export let activeSegment = '';
</script>

<Layout element="ul" fit gap="base">
  {#each items as item}
    <Cell element="li">
      <a
        href={item.url}
        aria-current={item.url.split('/')[1] === activeSegment ? 'page': null}
      >
        {item.name}
        {#if item.url.split('/')[1] === activeSegment}(current){/if}
      </a>
    </Cell>
  {/each}
</Layout>
