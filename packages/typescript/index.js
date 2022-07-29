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
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    'no-dupe-class-members': 'off',
    '@typescript-eslint/no-dupe-class-members': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      { classes: false, functions: false, typedefs: false, variables: false },
    ],

    // This breaks filtering with a type guard.
    // https://github.com/microsoft/TypeScript/pull/10027/files
    'unicorn/no-array-callback-reference': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: { extensions: ['.js', '.mjs', '.cjs', '.jsx', '.ts', '.tsx'] },
      typescript: { alwaysTryTypes: true },
    },
  },
}
