const base = require('@hideoo/eslint-config-base')

const baseRules = {
  '@typescript-eslint/consistent-type-imports': [
    'error',
    { prefer: 'type-imports', disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
  ],
  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'error',
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
  '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'error',
  '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { classes: false, functions: false, typedefs: false, variables: false },
  ],

  // This breaks filtering with a type guard.
  // https://github.com/microsoft/TypeScript/pull/10027/files
  'unicorn/no-array-callback-reference': 'off',
}

module.exports = {
  extends: [
    '@hideoo/eslint-config-base',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/typescript',
  ],
  overrides: [
    ...base.overrides,
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@typescript-eslint/strict-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        ...baseRules,
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'no-var': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
      },
    },
  ],
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: false,
  },
  rules: baseRules,
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
