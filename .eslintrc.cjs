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
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': ['off'],
        'import/no-duplicates': ['off'],
        'import/no-mutable-exports': ['off'],
        'import/prefer-default-export': ['off'],
      },
    },
  ],
  env: {
    es6: true,
    browser: true,
    // node: true,
  },
  settings: {
    'svelte3/ignore-styles': () => true,
  },
};
