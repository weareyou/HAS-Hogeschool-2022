<script>
  export let items = [];
  export let activeSegment = '';
</script>

<ul>
  {#each items as item}
    <li>
      <a
        href={item.href}
        aria-current={item.href.split('/')[1] === activeSegment ? 'page': null}
      >{item.label} {item.href.split('/')[1] === activeSegment ? '(current)' : ''}</a>
    </li>
  {/each}
</ul>
