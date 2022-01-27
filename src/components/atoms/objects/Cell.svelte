<script>
  export let role = '';
  export let lap = '';
  export let desk = '';
  export let alignInline = '';
  export let fit = false;
  export let fill = false;
</script>

<style lang="scss">
  @use 'node_modules/@supple-kit/supple-css/objects/layout';
  @use 'node_modules/@supple-kit/supple-css/utilities/colspan' with (
    $in-query: (
      lap,
      desk,
    ),
  );
</style>

<div
  class="o-layout__cell
      {lap ? `u-colspan-${lap}@lap` : ''}
      {desk ? `u-colspan-${desk}@desk` : ''}
    "
  class:o-layout__align-inline-center={alignInline === 'center'}
  class:o-layout__fill={fill}
  class:o-layout__fit={fit}
  {role}
>
  <slot />
</div>
