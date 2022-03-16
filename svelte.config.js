import sveltePreprocess from 'svelte-preprocess';
import adapterNetlify from '@sveltejs/adapter-netlify';
import adapterStatic from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    preserve: ['ld+json'],
  }),
  kit: {
    prerender: {
      default: true,
    },
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    // adapter: adapterStatic(),
    adapter: process.env.npm_config_adapter === 'netlify' ? adapterNetlify() : adapterStatic(),

    // trailingSlash: 'never',
    // csp: {
    //   directives: {
    //     'default-src': ['self'],
    //     'connect-src': ['*'],
    //   },
    // },
  },
};

export default config;
