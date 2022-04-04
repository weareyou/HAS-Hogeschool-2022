<script>
  export let label = '';
  export let hint = '';
  export let isLegend = false;
  export let forValue = '';
  export { forValue as for };
</script>

<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  .c-label {
    display: block;
    inline-size: 100%;
    @include typography.font-size(vars.$milli);
  }



  /*  Elements
      ========================================================================= */

  .c-label__label,
  .c-label__hint {
    display: block;
  }

  .c-label__label {
    font-weight: var(--font-weight-bold);
  }
</style>

{#if isLegend}
  <legend
    class="c-label"
  >
    <span class="c-label__label">
      {label}
    </span>
    {#if hint}
      <span class="c-label__hint">{hint}</span>
    {/if}
  </legend>
{:else}
  <label
    class="c-label"
    for={forValue}
  >
    <span class="c-label__label">
      {label}
    </span>
    {#if hint}
      <span class="c-label__hint">{hint}</span>
    {/if}
  </label>
{/if}
