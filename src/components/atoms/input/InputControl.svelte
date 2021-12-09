<script>
  export let label = '';
  export let name = '';
  export let value = '';
  export let type = '';
  export let checked = false;
  export let disabled = false;
  export let required = false;
  export let autocomplete = '';
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
    value={value}
  >
  <span class="c-input-control__label">{label}</span>
</label>
