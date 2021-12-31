<script>
  import { register } from '../../../utils/form';

  export let label = '';
  export let name = '';
  export let value = '';
  export let type = '';
  export let checked = false;
  export let disabled = false;
  export let required = false;
  export let autocomplete = '';
</script>

<style lang="scss">
  @use 'src/sass/vars';

  .c-input-control {
    display: flex;
    align-items: normal;
    gap: var(--space-tiny);
  }

  .c-input-control__input {
    inline-size: 1rem;
    block-size: 1rem;
    accent-color: var(--color-error);
    margin-block-start: calc(var(--space-tiny) / 2);
  }
</style>

<label class="c-input-control" for="{name}_{value}">
  <input
    {autocomplete}
    {checked}
    class="c-input-control__input"
    {disabled}
    id="{name}_{value}"
    name="{name}"
    {required}
    {type}
    {value}
    use:register
  >
  <span class="c-input-control__label">{label}</span>
</label>
