<script>
  import { errors, register } from '../../../utils/form';

  export let name = '';
  export let required = false;
</script>

<style lang="scss">
  @use './shared';
</style>

<textarea
  class="c-input"
  id="{name}"
  {name}
  {required}
  aria-describedby="{$errors[name] ? `error_${name}` : null}"
  aria-invalid="{$errors[name] ? 'true' : null}"
  use:register
></textarea>
