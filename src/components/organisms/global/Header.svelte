<script>
  import PrimaryNav from '../../molecules/PrimaryNav.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import Cell from '../../atoms/objects/Cell.svelte';
  import Layer from '../../atoms/objects/Layer.svelte';
  import Retain from '../../atoms/objects/Retain.svelte';
  import Button from '../../atoms/Button.svelte';

  export let label = '';
  export let items = [];
  export let homeUrl = '/';
  export let languages;
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

<header>
  <Layer>
    <Retain>
      <Layout alignInline="end" fit>
        <Cell>
          <Layout fit gap="base" role="list">
            {#each languages as { lang, label, isActive, url }}
              <Cell>
                <a
                  href={url}
                  aria-current={isActive}
                  lang={lang}
                >
                  {label}
                </a>
              </Cell>
            {/each}
          </Layout>
        </Cell>

      </Layout>
      <br>
      <Layout fit gap="base" justify>
        <Cell>
          <p>
            <a href={homeUrl}>
              <mark>Logo</mark>
            </a>
          </p>
        </Cell>

        <Cell>
          <PrimaryNav items={items} label={label} />
        </Cell>
      </Layout>
    </Retain>
  </Layer>
</header>
