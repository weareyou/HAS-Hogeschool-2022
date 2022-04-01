<script>
  /*
  export let author = null;
  export let site;
  export let path = [];
  export let title;
  export let description;

  const {
    siteName,
    twitterHandle,
    domain,
  } = site;

  $: itemListElements = path.map((segment, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@id': `${domain}${segment.uri !== 'home' ? segment.uri : ''}`,
      name: segment.title,
    },
  }));

  $: schema = [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElements,
  }, {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: domain,
    name: siteName,
  }];
   */
  export let title = '';
  export let description = '';
  export let alternate = [];
</script>

<svelte:head>
  <title>{title}</title>
  <meta content="{description}" name="description">

  <meta content="Unique page title - My Site" property="og:title">
  <meta content="Page description" property="og:description">
  <meta content="https://www.mywebsite.com/image.jpg" property="og:image">
  <meta content="Image description" property="og:image:alt">
  <meta content="en_GB" property="og:locale">
  <meta content="website" property="og:type">
  <meta content="summary_large_image" name="twitter:card">
  <meta content="https://www.mywebsite.com/page" property="og:url">
  <link href="https://www.mywebsite.com/page" rel="canonical">

  {#each alternate as { culture, url }}
    <link rel="alternate" hreflang={culture} href={url}>
  {/each}
  <!--
   <title>{title} • {siteName}</title>
   {#if author}
     <meta name="author" content={`${author.firstName} ${author.lastName}`}>
   {/if}
   <meta name="description" content={description}>
   <meta name="twitter:site" content={twitterHandle}>

   {@html '<script type="application/ld+json">' + JSON.stringify(schema) + '</script>'}
   -->
</svelte:head>
