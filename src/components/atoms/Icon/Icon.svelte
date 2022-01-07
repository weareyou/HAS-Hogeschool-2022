<script>
  export let icon = '';
</script>

<style lang="scss">
  .c-icon {
    display: block;
    inline-size: 1.5rem;
    block-size: 1.5rem;
  }
</style>

<svg
  aria-hidden="true"
  class="c-icon"
>
  <use xlink:href="/dist/sprite.svg#icon-{icon}" />
</svg>
