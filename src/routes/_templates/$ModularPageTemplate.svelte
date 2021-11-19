<script>
  import ImageAndTextGridBlock from '../../components/organisms/ImageAndTextGridBlock.svelte';

  export let modules = [];
</script>

{#each modules as module}
  {#if module.editor.alias === 'imageAndTextGridBlock'}
    <ImageAndTextGridBlock {...module.value} />
  {:else}
    <p>Error: no component defined for module <code>{module.editor.alias}</code>.</p>
  {/if}
{/each}
