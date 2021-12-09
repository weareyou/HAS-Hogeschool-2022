<script>
  import { ErrorMessage } from 'svelte-forms-lib';

  export let name = '';
</script>

<style global lang="scss">
  @use 'src/sass/vars';
  @use 'node_modules/@supple-kit/supple-css/tools/typography';

  .c-error-message {
    @include typography.font-size(vars.$milli);
    color: var(--color-error);
  }
</style>

<ErrorMessage
  class="c-error-message"
  {name}
/>
