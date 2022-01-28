module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'next/core-web-vitals',
    'airbnb',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-props-no-spreading': 1,
    'import/no-named-as-default': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'arrow-body-style': 0,
    'no-use-before-define': 0,
  },
};