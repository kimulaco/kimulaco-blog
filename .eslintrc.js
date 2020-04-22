module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  rules: {
    'no-console': [0 , { allow: ['error'] }]
    'camelcase': 0,
    '@typescript-eslint/no-unused-vars': ['error', {
      vars: 'all',
      args: 'after-used'
    }]
  }
}
