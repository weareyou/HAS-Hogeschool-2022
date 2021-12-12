<script>
  import Label from '../../atoms/input/Label.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';
  import InputTextarea from '../../atoms/input/InputTextarea.svelte';

  export let name = '';
  export let label = '';
  export let hint = '';
  export let required = false;
</script>

<div>
  <Label
    for="{name}"
    hint={hint}
    label="{label}"
  />

  <InputTextarea
    {name}
    {required}
  />

  <ErrorMessage {name} />
</div>
