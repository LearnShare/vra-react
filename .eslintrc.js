module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'class-methods-use-this': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/button-has-type': 'off',
    'react/jsx-indent-props': [2, 4],
    'jsx-a11y/tabindex-no-positive': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'no-console': 'off',
    'react/sort-comp': 'off',
  },
};
