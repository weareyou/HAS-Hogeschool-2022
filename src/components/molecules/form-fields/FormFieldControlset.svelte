<script>
  import Label from '../../atoms/input/Label.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import InputControl from '../../atoms/input/InputControl.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';

  export let label;
  export let input;
  export let type = '';
  export let options = [];
  export let errorMessages;
</script>

<fieldset>
  <Label {...label} />
  <input name={input.name} type="hidden" value="">

  <Layout class="o-layout  o-layout--fit  o-layout--gap-base" role="list">
    {#each options as option}
      <li>
        <InputControl
          {type}
          name={input.name}
          required={input.required}
          label="{option.value}"
          value="{option.key}"
        />
      </li>
    {/each}
  </Layout>

  <ErrorMessage
    {errorMessages}
    name={input.name} />
</fieldset>
