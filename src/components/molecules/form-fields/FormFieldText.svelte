<script>
  import Label from '../../atoms/input/Label.svelte';
  import InputText from '../../atoms/input/InputText.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';

  export let name = '';
  export let label = '';
  export let hint = '';
  export let required = false;
  export let autocomplete = '';
  export let type = 'text';
  export let errorMessages = {};
</script>


<div>
  <Label
    for="{name}"
    hint={hint}
    label="{label}"
  />

  <InputText
    {autocomplete}
    {name}
    {required}
    {type}
  />

  <ErrorMessage
    {errorMessages}
    {name}
  />
</div>
