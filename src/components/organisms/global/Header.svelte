<script>
  import PrimaryNav from '../../molecules/Header/PrimaryNav.svelte';
  import Layout from '../../atoms/objects/Layout.svelte';
  import Layer from '../../atoms/objects/Layer.svelte';
  import Retain from '../../atoms/objects/Retain.svelte';
  import Button from '../../atoms/Button.svelte';
  import LanguageNav from '../../molecules/Header/LanguageNav.svelte';
  import logo from './logo-has.svg';

  export let skipToContentLabel = '';
  export let primaryNav;
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
  label={skipToContentLabel}
/>

<header>
  <Layer size="base">
    <Retain>

      <Layout fit gap="base" justify>
        <a href={homeUrl}>
          <img alt="HAS Hogeschool logo" height="106" src="{logo}" width="134" />
        </a>

        <div>
          <Layout alignInline="end" fit>
            <LanguageNav {...languages} />
          </Layout>

          <br />

          <Layout alignInline="end" fit>
            <PrimaryNav {...primaryNav} />
          </Layout>
        </div>

      </Layout>
    </Retain>
  </Layer>
</header>
