<script>
  import './_svg/icon-chevron-down.svg';

  /*
  export let icon = '';
  let svg = '';

  import(`./_svg/icon-${icon}.svg?raw`)
    .then((Icon) => {
      svg = Icon.default;
    });
    */
</script>

<style lang="scss">
  div {
    :global(svg) {
      display: block;
      inline-size: 1.5rem;
      block-size: 1.5rem;
    }
  }
</style>

<div>
  icon
  <!--{@html svg}-->
</div>
