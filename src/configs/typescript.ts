import process from 'node:process'

import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript'

import type { Config } from '../libs/eslint'
import { isPkgInstalled } from '../libs/pkg'
import { pluginImportX, pluginTypeScript } from '../libs/plugins'

export function typescript(): Config[] {
  if (!isPkgInstalled('typescript')) {
    return []
  }

  return [
    ...pluginTypeScript.config(
      pluginTypeScript.configs.strictTypeChecked,
      pluginTypeScript.configs.stylisticTypeChecked,
      {
        ...pluginImportX.configs.typescript,
        settings: {
          ...pluginImportX.configs.typescript.settings,
          'import/resolver-next': [
            createTypeScriptImportResolver({
              alwaysTryTypes: true,
            }),
          ],
        },
      },
      {
        languageOptions: {
          parserOptions: {
            projectService: true,
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
          '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off',
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

          'import-x/no-duplicates': 'off',
        },
      },
      {
        files: ['**/*.?(c)js', 'vite.config.ts', 'vitest.config.ts'],
        extends: [pluginTypeScript.configs.disableTypeChecked],
      },
      {
        files: ['**/*.?(c)js'],
        name: 'antfu:typescript:javascript-overrides',
        rules: {
          '@typescript-eslint/no-require-imports': 'off',
          '@typescript-eslint/no-var-requires': 'off',
        },
      },
    ),
  ]
}
