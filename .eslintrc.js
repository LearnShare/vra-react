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
    requireConfigFile: false,
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
    'react/sort-comp': 'off',
    'react/button-has-type': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/prop-types': 'off',
    'max-classes-per-file': 'off',
    'react/static-property-placement': 'off',
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'arrow-body-style': 'off',
    'react/no-array-index-key': 'off',
  },
};
