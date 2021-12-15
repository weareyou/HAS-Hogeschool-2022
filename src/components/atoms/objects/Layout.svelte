<script>
  export let element = 'div';
  export let alignInline = '';
  export let alignBlock = '';
  export let gap = null;
  export let fit = false;
  export let fill = false;
  export let hasEqualheight = false;
  export let noWrap = false;
  export let isReversed = false;
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/layout' with (
    $gaps: ('small', 'base', 'huge')
  );

  .o-layout--nowrap {
    flex-wrap: nowrap;
  }
</style>

{#if element === 'ul'}
  <ul
    class="o-layout"
    class:o-layout--fit={fit}
    class:o-layout--fill={fill}
    class:o-layout--align-inline-center={alignInline === 'center'}
    class:o-layout--align-inline-end={alignInline === 'end'}
    class:o-layout--align-block-center={alignBlock === 'center'}
    class:o-layout--align-block-end={alignBlock === 'end'}
    class:o-layout--gap-small={gap === 'small'}
    class:o-layout--gap-base={gap === 'base'}
    class:o-layout--gap-large={gap === 'large'}
    class:o-layout--gap-huge={gap === 'huge'}
    class:o-layout--stretch={hasEqualheight}
    class:o-layout--nowrap={noWrap}
    class:o-layout--reverse={isReversed}
  >
    <slot />
  </ul>
{:else}
  <div
    class="o-layout"
    class:o-layout--fit={fit}
    class:o-layout--fill={fill}
    class:o-layout--align-inline-center={alignInline === 'center'}
    class:o-layout--align-inline-end={alignInline === 'end'}
    class:o-layout--align-block-center={alignBlock === 'center'}
    class:o-layout--align-block-end={alignBlock === 'end'}
    class:o-layout--gap-small={gap === 'small'}
    class:o-layout--gap-base={gap === 'base'}
    class:o-layout--gap-large={gap === 'large'}
    class:o-layout--gap-huge={gap === 'huge'}
    class:o-layout--stretch={hasEqualheight}
    class:o-layout--nowrap={noWrap}
    class:o-layout--reverse={isReversed}
  >
    <slot />
  </div>
{/if}
