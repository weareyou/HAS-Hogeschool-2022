<script>
  import { onDestroy, onMount } from 'svelte';
  import { errors, formState } from '../../../utils/form';
  import Icon from '../Icon/Icon.svelte';

  export let options = [];
  export let autocomplete = '';
  export let name = '';
  export let required = false;

  let state;
  let el;

  formState.subscribe((value) => {
    state = value;
  });

  const handleChange = () => {
    state[name].touched = true;
    state[name].validity = el.validity;
    formState.set(state);
  };

  onMount(() => {
    state[name] = {
      touched: false,
      el,
    };
    formState.set(state);
  });

  onDestroy(() => {
    delete state[name];
    formState.set(state);
  });
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
  <select
    {autocomplete}
    class="c-input  c-select__select"
    id="{name}"
    {name}
    {required}
    aria-describedby="{$errors[name] ? `error_${name}` : null}"
    aria-invalid="{$errors[name] ? 'true' : null}"
    bind:this={el}
    on:change={handleChange}
  >
    {#each options as option}
      <option
        value="{option.value}"
      >
        {option.label}
      </option>
    {/each}
  </select>
  <div class="c-input__icon">
    <Icon icon="chevron-down" />
  </div>
</div>

