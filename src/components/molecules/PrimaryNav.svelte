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
        href={item.href}
        aria-current={item.href.split('/')[1] === activeSegment ? 'page': null}
      >
        {item.label}
        {#if item.href.split('/')[1] === activeSegment}(current){/if}
      </a>
    </Cell>
  {/each}
</Layout>
