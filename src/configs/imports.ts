import type { Config } from '../libs/eslint'
import { pluginImport } from '../libs/plugins'

export function imports(): Config[] {
  return [
    {
      plugins: {
        import: pluginImport,
      },
      rules: {
        'import/export': 'error',
        'import/first': 'error',
        'import/named': 'error',
        'import/no-anonymous-default-export': 'error',
        'import/no-duplicates': 'warn',
        'import/no-mutable-exports': 'error',
        'import/no-named-default': 'error',
        'import/no-self-import': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/order': [
          'warn',
          { 'newlines-between': 'always', alphabetize: { order: 'asc', caseInsensitive: true } },
        ],
      },
    },
  ]
}
