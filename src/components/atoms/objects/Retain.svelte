<script>
  export let size = 'wall';
  export let noPadding = false;
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/retain';
</style>

<div
  class="o-retain"
  class:o-retain--lap={size === 'lap'}
  class:o-retain--desk={size === 'desk'}
  class:o-retain--wall={size === 'wall'}
  class:o-retain--no-padding={noPadding}
>
  <slot />
</div>
