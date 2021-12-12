<script>
  import { onDestroy, onMount } from 'svelte';
  import { errors, formState } from '../../../utils/form';

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
  bind:this={el}
  on:change={handleChange}
></textarea>
