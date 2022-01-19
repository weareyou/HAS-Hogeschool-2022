<style lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/objects/layout' with (
    $gaps: ('small', 'base', 'huge')
  );

  .o-layout--nowrap {
    flex-wrap: nowrap;
  }

  .o-layout--justify {
    justify-content: space-between;
  }
</style>

<div {...$$props}>
  <slot />
</div>
