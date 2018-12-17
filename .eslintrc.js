module.exports = {
  root: true,
  env: {
    // this automatically sets the ecmaVersion parser option to 6
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'html'
  ],
  rules: {
    /* Other */
    "space-before-function-paren": ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'valid-jsdoc':  ["error", {
      requireParamDescription: false,
      requireReturnDescription: false,
      requireReturnType: true
    }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeature: {
      jsx: false
    },
    // 9 это 2018
    ecmaVersion: 9
  }
}
