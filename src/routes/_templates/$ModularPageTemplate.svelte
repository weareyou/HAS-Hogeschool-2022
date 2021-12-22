<script>
  import ImageAndTextGridBlock from '../../components/organisms/ImageAndTextGridBlock.svelte';
  import FormGridBlock from '../../components/organisms/FormGridBlock.svelte';

  export let modules = [];
</script>

{#each modules as module}
  {#if module.editor.alias === 'imageAndTextGridBlock'}
    <ImageAndTextGridBlock {...module.value} />
  {:else if module.editor.alias === 'umbraco_form_picker'}
    <FormGridBlock {...module.value} />
  {:else}
    <p>Error: no component defined for module <code>{module.editor.alias}</code>.</p>
  {/if}
{/each}
