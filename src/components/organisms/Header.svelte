<script>
  import PrimaryNav from '../molecules/PrimaryNav.svelte';
  import Layout from '../atoms/objects/Layout.svelte';
  import Cell from '../atoms/objects/Cell.svelte';
  import Layer from '../atoms/objects/Layer.svelte';
  import Retain from '../atoms/objects/Retain.svelte';

  export let segments = [];
  export let items = [];
</script>

<Layer>
  <Retain>
    <Layout class="o-layout  o-layout--justify  o-layout--fit  o-layout--gap-base">
      <Cell fill>
        <p>
          <a href="/">
            <mark>Logo</mark>
          </a>
        </p>
      </Cell>

      <Cell fit>
        <PrimaryNav activeSegment={segments[1]} items={items} />
      </Cell>
    </Layout>
  </Retain>
</Layer>
