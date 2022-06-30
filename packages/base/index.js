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
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    'import/first': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-mutable-exports': 'error',
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],

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
