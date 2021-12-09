<script>
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
></textarea>
