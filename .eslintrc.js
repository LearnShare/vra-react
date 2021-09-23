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
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'import/named': 'off',
    'react/static-property-placement': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/jsx-closing-tag-location': 'off',
    'no-console': 'off',
  },
};
