import type { Config } from '../libs/eslint'
import { pluginImportX } from '../libs/plugins'

export function imports(): Config[] {
  return [
    {
      plugins: {
        'import-x': pluginImportX,
      },
      rules: {
        'import-x/export': 'error',
        'import-x/first': 'error',
        'import-x/named': 'error',
        'import-x/no-anonymous-default-export': 'error',
        'import-x/no-duplicates': 'warn',
        'import-x/no-mutable-exports': 'error',
        'import-x/no-named-default': 'error',
        'import-x/no-self-import': 'error',
        'import-x/no-webpack-loader-syntax': 'error',
        'import-x/order': [
          'warn',
          { 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } },
        ],
      },
    },
  ]
}
