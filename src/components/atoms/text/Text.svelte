<script>
  import { marked } from 'marked';
  import Flow from '../objects/Flow.svelte';

  export let markdown = null;
</script>

<style lang="scss">
  :global(a) {
    font-weight: var(--font-weight-bold);
  }
</style>

<Flow>
  {#if markdown}
    {@html marked(markdown)}
  {:else}
    <slot />
  {/if}
</Flow>
