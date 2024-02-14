import type { Config } from '../libs/eslint'
import { pluginUnicorn } from '../libs/plugins'

export function unicorn(): Config[] {
  return [
    {
      plugins: {
        unicorn: pluginUnicorn,
      },
      rules: {
        ...pluginUnicorn.configs.recommended.rules,

        'unicorn/filename-case': ['error', { cases: { camelCase: true, kebabCase: true, pascalCase: true } }],
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
      },
    },
  ]
}
