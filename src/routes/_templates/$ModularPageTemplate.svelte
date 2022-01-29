<script>
  import ImageAndText from '../../components/organisms/ImageAndText.svelte';
  import Form from '../../components/organisms/Form.svelte';

  export let modules = [];
  const dev = process.env.NODE_ENV === 'development';
</script>

{#each modules as module}
  {#if module.editor.alias === 'imageAndTextGridBlock'}
    <ImageAndText {...module.value} />
  {:else if module.editor.alias === 'umbraco_form_picker'}
    <Form {...module.value} />
  {:else if dev}
    <p>Error: no component defined for module <code>{module.editor.alias}</code>.</p>
  {/if}
{/each}
