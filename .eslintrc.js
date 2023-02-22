const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['prettier'],
  globals: {},
  rules: {
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // Possible errors
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],

    // Best practices
    curly: ['error', 'all'],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'no-caller': 'error',
    'no-new': 'error',
    'no-with': 'error',

    // Stylistic issues
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'func-call-spacing': ['error', 'never'],
    indent: 'off',
    // "@typescript-eslint/indent": [ "error", 2, {
    //   "SwitchCase": 1
    // }],
    'no-trailing-spaces': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': 'error',
    'new-cap': 'error',
    'no-bitwise': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'never',
      },
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        words: false,
        nonwords: false,
      },
    ],

    // Variables
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],

    // ES6+
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: true,
    //     ignoreMemberSort: false,
    //   },
    // ],
    // 'import/newline-after-import': ['error'],
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
    //     'newlines-between': 'never',
    //   },
    // ],

    // TS-specific
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    // '@typescript-eslint/no-require-imports': 'error',
  },
});
