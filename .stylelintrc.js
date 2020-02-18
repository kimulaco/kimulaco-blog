module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-scss'],
  rules: {
    'value-keyword-case': null,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true
  }
}
