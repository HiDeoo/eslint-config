import process from 'node:process'

import type { Config } from '../libs/eslint'
import { isPkgInstalled } from '../libs/pkg'
import { pluginImport, pluginTypeScript } from '../libs/plugins'

export function typescript(): Config[] {
  if (!isPkgInstalled('typescript')) {
    return []
  }

  return [
    ...pluginTypeScript.configs.strictTypeChecked,
    ...pluginTypeScript.configs.stylisticTypeChecked,
    pluginImport.configs.typescript,
    {
      languageOptions: {
        parserOptions: {
          project: ['tsconfig.json'],
          tsconfigRootDir: process.cwd(),
          warnOnUnsupportedTypeScriptVersion: false,
        },
      },
      rules: {
        'no-use-before-define': 'off',
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',

        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', disallowTypeAnnotations: false, fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/method-signature-style': ['error', 'property'],
        '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
        '@typescript-eslint/no-dynamic-delete': 'off',
        '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
        '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
        '@typescript-eslint/no-import-type-side-effects': 'error',
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true, allowDefinitionFiles: true }],
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-use-before-define': [
          'error',
          { classes: false, functions: false, typedefs: false, variables: false },
        ],
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowBoolean: true, allowNumber: true }],

        // This breaks filtering with a type guard.
        // https://github.com/microsoft/TypeScript/pull/10027/files
        'unicorn/no-array-callback-reference': 'off',
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'no-var': 'off',

        '@typescript-eslint/triple-slash-reference': 'off',

        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['**/*.js', 'vite.config.ts', 'vitest.config.ts'],
      ...pluginTypeScript.configs.disableTypeChecked,
    },
  ]
}
