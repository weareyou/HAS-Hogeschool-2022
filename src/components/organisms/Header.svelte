<script>
  import PrimaryNav from '../molecules/PrimaryNav.svelte';

  export let segments = [];
  export let items = [];
</script>

<p>
  <mark>Logo</mark>
</p>

<PrimaryNav activeSegment={segments[1]} items={items} />
