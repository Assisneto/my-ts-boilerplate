module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: ['@typescript-eslint','prettier'],
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint', 'airbnb-base','plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: 'off',
    'prettier/prettier':['error'],
    '@typescript-eslint/semi': ['error'],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': ['error', { ignore: ['^@'] }],
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    "import/extensions": [ 0 ]
  },
};
