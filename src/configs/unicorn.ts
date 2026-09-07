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

        'unicorn/better-dom-traversing': 'off',
        'unicorn/consistent-boolean-name': 'off',
        'unicorn/filename-case': ['error', { cases: { camelCase: true, kebabCase: true, pascalCase: true } }],
        'unicorn/max-nested-calls': 'off',
        'unicorn/name-replacements': 'off',
        'unicorn/no-break-in-nested-loop': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-process-exit': 'off',
        'unicorn/no-top-level-side-effects': 'off',
        'unicorn/no-unreadable-for-of-expression': 'off',
        'unicorn/no-useless-undefined': 'off',
        'unicorn/prefer-export-from': ['error', { checkUsedVariables: false }],
        'unicorn/prefer-https': [
          'error',
          { ignore: [/^http:\/\/example\.com(?:\/|$)/, 'http://purl.org/syndication/history/1.0'] },
        ],
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-top-level-await': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/single-line-block-comment-style': 'off',
      },
    },
  ]
}
