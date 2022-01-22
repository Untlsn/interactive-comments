module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'quotes': ['warn', 'single'],
    'semi': 'warn',
    'max-len': 'off',
    'array-element-newline': 'off',
    'comma-dangle': ['warn', 'always-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'keyword-spacing': 'warn',
    'vue/max-attributes-per-line': 'off',
    // page will be single word
    'vue/multi-word-component-names': 'off',
    // app use global macro
    'no-undef': 'off',
  },
};
