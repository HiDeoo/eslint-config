import astroESLintParser from 'astro-eslint-parser'

import type { Config } from '../libs/eslint'
import { isPkgInstalled } from '../libs/pkg'
import { pluginAstro, pluginJSXA11y, pluginTypeScript } from '../libs/plugins'

export function astro(): Config[] {
  if (!isPkgInstalled('astro')) {
    return []
  }

  return [
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
        // @ts-expect-error - The plugin does not yet support flat configs.
        astro: pluginAstro,
        'jsx-a11y': pluginJSXA11y,
      },
      processor: 'astro/client-side-ts',
      rules: {
        ...pluginAstro.configs.recommended.rules,
        // @ts-expect-error - This is not typed in the plugin but the rules exist.
        ...pluginAstro.configs['jsx-a11y-recommended'].rules,

        'astro/jsx-a11y/alt-text': ['error', { img: ['Image', 'Img'] }],

        'unicorn/text-encoding-identifier-case': 'off',

        // https://github.com/ota-meshi/eslint-plugin-astro/issues/168
        '@typescript-eslint/no-unsafe-return': 'off',
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
        // @ts-expect-error - Invalid `meta` type.
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
