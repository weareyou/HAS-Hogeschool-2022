<script>
  import { errors, register } from '../../../utils/form';
  import Icon from '../Icon/Icon.svelte';

  export let options = [];
  export let autocomplete = '';
  export let name = '';
  export let required = false;
</script>

<style lang="scss">
  @use './shared';

  .c-select {
    display: grid;
  }

  .c-select__select,
  .c-input__icon {
    grid-row: 1 / -1;
    grid-column: 1 / -1;
  }

  .c-input__icon {
    align-self: center;
    justify-self: end;
    padding-inline-end: var(--space-tiny);
  }

  .c-select__select {
    background-color: var(--color-gray-light);
    padding-inline-end: calc(var(--space-base) * 1.5);
  }
</style>

<div class="c-select">
  <select
    {autocomplete}
    class="c-input  c-select__select"
    id="{name}"
    {name}
    {required}
    aria-describedby="{$errors[name] ? `error_${name}` : null}"
    aria-invalid="{$errors[name] ? 'true' : null}"
    use:register
  >
    {#each options as option}
      <option
        value="{option.key}"
      >
        {option.value}
      </option>
    {/each}
  </select>
  <div class="c-input__icon">
    <Icon icon="chevron-down" />
  </div>
</div>

