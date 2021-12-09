<script>
  import { Field } from 'svelte-forms-lib';

  export let name = '';
  export let type = 'text';
  export let autocomplete = '';
  export let required = false;
</script>

<style global lang="scss">
  @use './shared';
</style>

<Field
  class="c-input"
  {autocomplete}
  id={name}
  name={name}
  {required}
  {type}
/>
