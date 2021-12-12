<script>
  import { key, Select } from 'svelte-forms-lib';
  import { getContext } from 'svelte';
  import Icon from '../Icon/Icon.svelte';

  export let options = [];
  export let autocomplete = '';
  export let name = '';
  export let required = false;

  const { errors } = getContext(key);
</script>

<style global lang="scss">
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
  <Select
    {autocomplete}
    class="c-input  c-select__select"
    id="{name}"
    {name}
    {required}
    aria-describedby="{$errors[name] ? `error_${name}` : null}"
    aria-invalid="{$errors[name] ? 'true' : null}"
  >
    {#each options as option}
      <option
        value="{option.value}"
      >
        {option.label}
      </option>
    {/each}
  </Select>
  <div class="c-input__icon">
    <Icon icon="chevron-down" />
  </div>
</div>

