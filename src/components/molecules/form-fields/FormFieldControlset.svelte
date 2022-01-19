<script>
  import Label from '../../atoms/input/Label.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import InputControl from '../../atoms/input/InputControl.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';

  export let label = '';
  export let name = '';
  export let type = '';
  export let required = false;
  export let options = [];
  export let errorMessages = {};
</script>

<fieldset>
  <Label
    isLegend
    label="{label}"
  />
  <input {name} type="hidden" value="">

  <Layout class="o-layout  o-layout--fit  o-layout--gap-base" role="list">
    {#each options as option}
      <li>
        <InputControl
          {type}
          {name}
          {required}
          label="{option}"
          value="{option}"
        />
      </li>
    {/each}
  </Layout>

  <ErrorMessage {errorMessages} {name} />
</fieldset>
