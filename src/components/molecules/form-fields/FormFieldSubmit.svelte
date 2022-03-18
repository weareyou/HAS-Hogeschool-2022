<script>
  import Button from '../../atoms/Button.svelte';

  export let label = 'Submit';
  export let submitting = false;
</script>

<Button
  element="button"
  {label}
  type="submit"
  disabled={submitting}
/>
