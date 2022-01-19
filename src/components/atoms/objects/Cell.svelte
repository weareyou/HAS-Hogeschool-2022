<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/objects/layout';
  @use 'node_modules/@supple-kit/supple-css/utilities/colspan' with (
    $in-query: (
      lap,
      desk,
    ),
  );
</style>

<div {...$$props}>
  <slot />
</div>
