module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['airbnb-base'],
  plugins: [
    'svelte3',
  ],
  overrides: [
    {
      files: '**/*.svelte',
      processor: 'svelte3/svelte3',
    },
  ],
  env: {
    browser: true,
    node: true,
  },
  settings: {
    'svelte3/ignore-styles': () => true,
  },
};
