<script>
  export let url = ''; // "/media/pqvllilk/sunset-5536777_1920.jpg"
  export let name; // alt...
  export let lazy = true;
  export let width = 0;
  export let height = 0;
  export let focalPoint = {};
  export let sizes = [];
  const prefix = '/img/';

  const path = `${prefix}center:${focalPoint.left},${focalPoint.top}`;
  let srcset = [];
  if (sizes) {
    srcset = sizes.map((size) => `${path}/width:${size}::${url} ${size}w`);
  }
</script>

<img
  alt={name}
  class="lazyload"
  data-srcset={!lazy ? `${srcset.join(',')}` : null}
  srcset={lazy ? `${srcset.join(',')}` : null}
  width="{width}"
  height="{height}"
  sizes="auto"
/>
