import sveltePreprocess from 'svelte-preprocess';
import netlifyAdapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    preserve: ['ld+json'],
  }),
  kit: {
    // prerender: {
    //   default: true,
    // },
    // By default, `npm run build` will create a standard Node app.
    // You can create optimized builds for different platforms by
    // specifying a different adapter
    // adapter: adapter(),
    adapter: netlifyAdapter(),

    trailingSlash: 'never',
    csp: {
      directives: {
        'default-src': ['self'],
        'connect-src': ['*'],
      },
    },
  },
};

export default config;
