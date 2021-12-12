<script>
  import Button from '../../atoms/Button.svelte';

  export let label = 'Submit';
</script>

<Button
  element="button"
  {label}
  type="submit"
/>
