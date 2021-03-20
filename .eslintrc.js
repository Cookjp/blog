module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
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
    'no-mixed-spaces-and-tabs': [
      0,
      'smart-tabs',
    ],
    'prefer-destructuring': [2, {
      array: true,
      object: true,
    }],
    'func-style': [2, 'expression'],
    'function-paren-newline': [2, 'consistent'],
    'no-confusing-arrow': [0],
    camelcase: [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],

  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['src', './src'],
          ['Pages', './src/pages'],
          ['Graphql', './src/graphql'],
          ['Components', './src/components'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
