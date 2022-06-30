module.exports = {
  extends: ['eslint:recommended', 'plugin:unicorn/recommended', 'plugin:import/recommended', 'prettier'],
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  ignorePatterns: [
    '*.min.*',
    '__snapshots__',
    'coverage',
    'dist',
    'output',
    'packages-lock.json',
    'pnpm-lock.yaml',
    'public',
    'yarn.lock',
  ],
  overrides: [
    {
      files: ['*.cjs', '*.mjs'],
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['cli.*', 'scripts/**/*.*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'array-callback-return': 'error',
    eqeqeq: 'error',
    'no-alert': 'warn',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
    'no-return-assign': 'error',
    'no-var': 'error',
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
    'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
    'prefer-exponentiation-operator': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    'import/first': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-mutable-exports': 'error',
    'import/order': ['warn', { 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } }],

    'unicorn/filename-case': ['error', { cases: { camelCase: true, kebabCase: true, pascalCase: true } }],
    'unicorn/no-null': 'off',
    'unicorn/no-process-exit': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.cjs', '.mjs'] },
    },
  },
}
