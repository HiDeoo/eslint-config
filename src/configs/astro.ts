import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

import type { Config } from '../libs/eslint'
import { isPkgInstalled } from '../libs/pkg'
import { pluginTypeScript } from '../libs/plugins'

const require = createRequire(import.meta.url)

export function astro(): Config[] {
  if (!isPkgInstalled('astro')) {
    return []
  }

  const astroESLintParser: typeof import('astro-eslint-parser') = require(
    fileURLToPath(import.meta.resolve('astro-eslint-parser')),
  )
  const { default: pluginAstro }: typeof import('eslint-plugin-astro') = require(
    fileURLToPath(import.meta.resolve('eslint-plugin-astro')),
  )

  return [
    ...pluginAstro.configs.recommended,
    {
      files: ['**/*.astro'],
      languageOptions: {
        globals: {
          'astro/astro': true,
        },
        parser: astroESLintParser,
        parserOptions: {
          extraFileExtensions: ['.astro'],
          parser: pluginTypeScript.parser,
          sourceType: 'module',
        },
      },
      plugins: {
        astro: pluginAstro,
      },
      processor: 'astro/client-side-ts',
      rules: {
        ...pluginTypeScript.configs.disableTypeChecked.rules,

        'astro/no-prerender-export-outside-pages': 'off',
        'unicorn/text-encoding-identifier-case': 'off',
      },
    },
    {
      // Configuration for `<script>` tag in `.astro` files.
      files: ['**/*.astro/*.js'],
    },
    {
      // Configuration for `<script>` tag using TypeScript in `.astro` files.
      files: ['**/*.astro/*.ts'],
      languageOptions: {
        parser: pluginTypeScript.parser,
        parserOptions: {
          project: false,
        },
      },
      rules: {
        ...pluginTypeScript.configs.disableTypeChecked.rules,
      },
    },
  ]
}
