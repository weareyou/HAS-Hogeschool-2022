<script>
  export let role = '';
  export let fit = false;
  export let fill = false;
  export let gap = '';
  export let reverse = false;
  export let justify = false;
  export let stretch = false;
  export let alignInline = '';
  export let alignBlock = '';
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
  class:o-layout--align-block-center={alignBlock === 'center'}
  class:o-layout--align-block-end={alignBlock === 'end'}
  class:o-layout--align-inline-center={alignInline === 'center'}
  class:o-layout--gap-base={gap === 'base'}
  class:o-layout--align-inline-end={alignInline === 'end'}
  class:o-layout--fill={fill}
  class:o-layout--justify={justify}
  class:o-layout--reverse={reverse}
  class:o-layout--gap-huge={gap === 'huge'}
  class:o-layout--gap-large={gap === 'large'}
  class:o-layout--gap-small={gap === 'small'}
  class:o-layout--gap-tiny={gap === 'tiny'}
  class:o-layout--stretch={stretch}
  {role}
>
  <slot />
</div>
