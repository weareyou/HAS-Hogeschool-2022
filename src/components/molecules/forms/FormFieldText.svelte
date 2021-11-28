<script>
  import Label from '../../atoms/input/Label.svelte';
  import InputText from '../../atoms/input/InputText.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';

  export let name = '';
  export let label = '';
  export let required = false;
  export let autocomplete = '';
</script>


<Label
  for="{name}"
  label="{label}"
/>

<InputText
  {autocomplete}
  {name}
  {required}
/>

<ErrorMessage />
