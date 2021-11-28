<script>
  export let name = '';
  export let type = 'text';
  export let autocomplete = '';
  export let required = false;
</script>

<input
  {autocomplete}
  id={name}
  {name}
  {required}
  {type}
>
