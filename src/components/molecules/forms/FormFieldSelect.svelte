<script>
  import Label from '../../atoms/input/Label.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';
  import InputSelect from '../../atoms/input/InputSelect.svelte';

  export let name = '';
  export let label = '';
  export let hint = '';
  export let required = false;
  export let autocomplete = '';
  export let options = [];
</script>

<div>
  <Label
    for="{name}"
    hint={hint}
    label="{label}"
  />

  <InputSelect
    {autocomplete}
    {name}
    {options}
    {required}
  />

  <ErrorMessage />
</div>
