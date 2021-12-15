<script>
  export let space = '';
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/flow' with (
  $gaps: ('base', 'tiny'),
);
</style>

<div
  class="o-flow"
  class:o-flow--tiny={space === 'tiny'}
  class:o-flow--base={space === 'base'}
>
  <slot />
</div>
