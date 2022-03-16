<script>
  import Label from '../../atoms/input/Label.svelte';
  import InputText from '../../atoms/input/InputText.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';

  export let label;
  export let input;
  export let errorMessages;
</script>

<div>
  <Label {...label} />

  <InputText {...input} />

  <ErrorMessage
    {errorMessages}
    name={input.name}
  />
</div>
