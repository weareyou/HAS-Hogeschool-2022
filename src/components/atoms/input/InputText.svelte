<script>
  import { errors, register } from '../../../utils/form';

  export let name = '';
  export let type = 'text';
  export let autocomplete = '';
  export let required = false;
  export let pattern = '';
</script>

<style lang="scss">
  @use './shared';
</style>

<input
  class="c-input"
  id={name}
  {autocomplete}
  {type}
  {name}
  {required}
  {pattern}
  aria-invalid="{$errors[name] ? 'true' : null}"
  aria-describedby="{$errors[name] ? `error_${name}` : null}"
  use:register
/>
