module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-indent': 'off',
    'object-curly-newline': 'off',
    'jsx-wrap-multilines': 'off',
    'jsx-one-expression-per-line': 'off',
  },
};
