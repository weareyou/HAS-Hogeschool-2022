<script>
  export let element = 'div';
  export let gap = '';
  export let size = null;
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/_internal/functions';
  @use 'node_modules/@supple-kit/supple-css/objects/mesh';

  .o-mesh {
    --min-inline-size: calc((var(--size) / #{functions.strip-units(vars.$font-size)}) * 1rem);
  }
</style>

{#if element === 'div'}
  <!-- postcss-ignore -->
  <div
    class="o-mesh  o-mesh--flow"
    class:o-mesh--gap-base={gap === 'base'}
    style="--size: {size};"
  >
    <slot />
  </div>
{/if}

{#if element = 'ul'}
  <!-- postcss-ignore -->
  <ul
    class="o-mesh  o-mesh--flow"
    class:o-mesh--gap-base={gap === 'base'}
    style="--size: {size};"
  >
    <slot />
  </ul>
{/if}
