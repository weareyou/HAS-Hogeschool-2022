<script>
  import Label from '../../atoms/input/Label.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';
  import InputControl from '../../atoms/input/InputControl.svelte';

  export let label = '';
  export let name = '';
  export let type = '';
  export let required = false;
  export let options = [];
</script>

<fieldset>
  <Label
    isLegend
    label="{label}"
  />
  <input {name} type="hidden" value="">

  <Layout
    element="ul"
    fit
    gap="base"
  >
    {#each options as option}
      <Cell element="li">
        <InputControl
          {type}
          {name}
          {required}
          label="{option.label}"
          value="{option.value}"
        />
      </Cell>
    {/each}
  </Layout>
</fieldset>
