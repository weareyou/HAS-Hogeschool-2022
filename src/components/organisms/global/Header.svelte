<script>
  import PrimaryNav from '../../molecules/PrimaryNav.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';
  import Layer from '../../atoms/objects/Layer.svelte';
  import Retain from '../../atoms/objects/Retain.svelte';
  import Button from '../../atoms/Button.svelte';

  export let segments = [];
  export let items = [];
</script>

<style lang="scss">
  :global(.c-skip-link) {
    position: absolute;
    z-index: 2;
    transform: translateX(-100%);

    &:focus {
      transform: none;
    }
  }
</style>

<Button
  class="c-skip-link"
  href="#main"
  label="Ga naar de inhoud"
/>

<Layer>
  <Retain>
    <Layout fit gap="base" justify>
      <Cell>
        <p>
          <a href="/">
            <mark>Logo</mark>
          </a>
        </p>
      </Cell>

      <Cell>
        <PrimaryNav activeSegment={segments[1]} items={items} />
      </Cell>
    </Layout>
  </Retain>
</Layer>
