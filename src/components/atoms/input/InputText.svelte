<script>
  import { onDestroy, onMount } from 'svelte';
  import { errors, formState } from '../../../utils/form';

  export let name = '';
  export let type = 'text';
  export let autocomplete = '';
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

<style lang="scss">
  @use './shared';
</style>

<input
  class="c-input"
  {autocomplete}
  id={name}
  name={name}
  {required}
  {type}
  aria-invalid="{$errors[name] ? 'true' : null}"
  aria-describedby="{$errors[name] ? `error_${name}` : null}"
  bind:this={el}
  on:change={handleChange}
/>
