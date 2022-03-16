<script>
  import Label from '../../atoms/input/Label.svelte';
  import ErrorMessage from '../../atoms/input/ErrorMessage.svelte';
  import InputTextarea from '../../atoms/input/InputTextarea.svelte';

  export let label;
  export let input;
  export let errorMessages;
</script>

<div>
  <Label {...label} />

  <InputTextarea {...input} />

  <ErrorMessage
    {errorMessages}
    name={input.name}
  />
</div>
