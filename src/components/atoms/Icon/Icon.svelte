<script>
  export let icon = '';
  let svg = '';

  import(`./_svg/icon-${icon}.svg?raw`)
    .then((Icon) => {
      svg = Icon.default;
    });
</script>

<style>
  :global(svg) {
    display: block;
  }
</style>

{@html svg}
