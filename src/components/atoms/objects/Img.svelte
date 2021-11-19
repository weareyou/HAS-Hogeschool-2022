<script>
  export let domain = import.meta.env.VITE_MEDIA_URL;
  export let url = '';
  export let name;
  export let lazy = true;
  export let width = 0;
  export let height = 0;
  export let focalPoint;
  export let sizes = [];

  let path = `${domain}${url}?quality=30&center=${focalPoint.left},${focalPoint.top}`;
  let srcset = '';
  if (sizes) {
    srcset = sizes.map((size) => `${path}&width=${size} ${size}w`);
  }
</script>

<img
  alt={name}
  class="lazyload"
  data-src={lazy ? `${domain}${url}` : null}
  data-srcset={`${srcset.join(',')}`}
  height="{height}"
  sizes="auto"
  width="{width}"
/>
