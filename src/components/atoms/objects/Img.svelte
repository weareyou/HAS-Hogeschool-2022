<script>
  export let url = ''; // "/media/pqvllilk/sunset-5536777_1920.jpg"
  export let name; // alt...
  export let lazy = true;
  export let width = 0;
  export let height = 0;
  export let focalPoint = null;
  export let sizes = []; // [300, 600, 900]
  let path = '/img';

  if (focalPoint) {
    path = `${path}/center:${focalPoint.left},${focalPoint.top}`;
  }

  let srcset = [];
  // if (sizes) {
  //   srcset = sizes.map((size) => `${path}/width:${size}/format:avif::${url} ${size}w`);
  // }

  const getSrcset = ({ format = 'jpg' }) => {
    // console.log(format);
    if (sizes) {
      srcset = sizes.map((size) => `${path}/width:${size}/format:${format}::${url} ${size}w`);
    }

    return srcset;
  };
</script>

<picture>
  <source
    data-srcset={lazy ? getSrcset({ format: 'avif' }) : null}
    srcset={!lazy ? getSrcset({ format: 'avif' }) : null}
    type="image/avif"
  >
  <source
    data-srcset={lazy ? getSrcset({ format: 'webp' }) : null}
    srcset={!lazy ? getSrcset({ format: 'webp' }) : null}
    type="image/webp"
  >
  <source
    data-srcset={lazy ? getSrcset({ format: 'jpg' }) : null}
    srcset={!lazy ? getSrcset({ format: 'jpg' }) : null}
  >
  <img
    alt={name}
    class="lazyload"
    height="{height}"
    sizes="auto"
    src=""
    width="{width}"
  />
</picture>


