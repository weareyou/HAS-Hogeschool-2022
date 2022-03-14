<script>
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';
  import Text from '../atoms/text/Text.svelte';
  import Img from '../atoms/objects/Img.svelte';

  export let text = '';
  export let image = {};
  export let caption = '';
  export let inverted = false;
</script>

<section>
  <Layer>
    <Retain>
      <Layout gap="base" reverse={inverted}>
        <Cell lap="6">
          <Text markdown="{text}" />
        </Cell>
        <Cell lap="6">
          <figure>
            <Img {...image} sizes={[654, 1024, 1208]} />
            <figcaption>{caption}</figcaption>
          </figure>
        </Cell>
      </Layout>
    </Retain>
  </Layer>
</section>

