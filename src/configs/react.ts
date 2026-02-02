import type { Config } from '../libs/eslint'
import { isPkgInstalled } from '../libs/pkg'
import { pluginJSXA11y, pluginReact, pluginReactHooks, pluginReactRefresh } from '../libs/plugins'

const reactPkgs = ['react', 'preact']

export function react(): Config[] {
  if (!isPkgInstalled(reactPkgs)) {
    return []
  }

  return [
    {
      plugins: {
        react: pluginReact,
        'jsx-a11y': pluginJSXA11y,
        'react-hooks': pluginReactHooks,
        'react-refresh': pluginReactRefresh.plugin,
      },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        ...pluginReact.configs.recommended.rules,
        ...pluginReact.configs['jsx-runtime'].rules,
        ...pluginJSXA11y.configs.recommended.rules,

        'react/jsx-no-target-blank': 'off',
        'react/prop-types': 'off',

        'jsx-a11y/alt-text': ['error', { img: ['Image', 'Img'] }],

        ...(isPkgInstalled(['vite'])
          ? pluginReactRefresh.configs.vite().rules
          : pluginReactRefresh.configs.recommended().rules),
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
