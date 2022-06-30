const base = require('@hideoo/eslint-config-base')

module.exports = {
  extends: ['@hideoo/eslint-config-base', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
  overrides: base.overrides,
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: {
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { classes: false, functions: false, variables: true }],
  },
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx'] },
    },
  },
}
