<script>
  export let role = '';
  export let fit = false;
  export let gap = '';
  export let reverse = false;
  export let justify = false;
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/layout' with (
    $gaps: ('small', 'base', 'huge')
  );

  .o-layout--justify {
    justify-content: space-between;
  }
</style>

<div
  class="o-layout"
  class:o-layout--fit={fit}
  class:o-layout--gap-base={gap === 'base'}
  class:o-layout--justify={justify}
  class:o-layout--reverse={reverse}
  {role}
>
  <slot />
</div>
