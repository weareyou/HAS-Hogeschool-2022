<script>
  import { onDestroy, onMount } from 'svelte';
  import { formState } from '../../../utils/form';

  export let label = '';
  export let name = '';
  export let value = '';
  export let type = '';
  export let checked = false;
  export let disabled = false;
  export let required = false;
  export let autocomplete = '';

  let state;
  let el;

  formState.subscribe((val) => {
    state = val;
  });

  const handleChange = () => {
    state[name].touched = true;
    state[name].validity = el.validity;
    formState.set(state);
  };

  onMount(() => {
    // registerField(name, el);
    // state[name] = {
    //   touched: false,
    //   el,
    // };
    // formState.set(state);
  });

  onDestroy(() => {
    delete state[name];
    formState.set(state);
  });
</script>

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
    bind:this={el}
    on:change={handleChange}
  >
  <span class="c-input-control__label">{label}</span>
</label>
