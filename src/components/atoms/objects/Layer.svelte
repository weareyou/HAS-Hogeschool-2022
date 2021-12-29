<script>
  export let size = 'large';
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/tools/responsive';

  /*  Module
      ========================================================================= */

  .o-layer {
    // empty for reference
  }


  /*  Sizes
      ========================================================================= */

  .o-layer--tiny {
    padding-block: var(--space-tiny);
  }

  .o-layer--small {
    padding-block: var(--space-small);
  }

  .o-layer--base {
    padding-block: var(--space-base);
  }

  .o-layer--large {
    padding-block: var(--space-base);
  }

  .o-layer--huge {
    padding-block: var(--space-large);
  }


  /*  Responsive
      ========================================================================= */

  @include responsive.mq(desk) {
    .o-layer--large {
      padding-block: var(--space-large);
    }

    .o-layer--huge {
      padding-block: var(--space-huge);
    }
  }
</style>

<div
  class="o-layer"
  class:o-layer--base={size === 'base'}
  class:o-layer--large={size === 'large'}
  class:o-layer--small={size === 'small'}
  class:o-layer--tiny={size === 'tiny'}
  class:o-layer--huge={size === 'huge'}
>
  <slot></slot>
</div>
