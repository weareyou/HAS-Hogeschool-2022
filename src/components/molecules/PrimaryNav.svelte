<script>
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';

  export let items = [];
  export let activeSegment = '';
</script>

<Layout class="o-layout  o-layout--fit  o-layout--gap-base" role="list">
  {#each items as item}
    <Cell class="o-layout__cell" role="listitem">
      <a
        href={item.url}
        aria-current={item.url.split('/')[1] === activeSegment ? 'page' : null}
      >
        {item.name}
        {#if item.url.split('/')[1] === activeSegment}(current){/if}
      </a>
    </Cell>
  {/each}
</Layout>
