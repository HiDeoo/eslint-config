import type { Config } from '../libs/eslint'
import { isPkgInstalled } from '../libs/pkg'
import { pluginJSXA11y, pluginReact, pluginReactHooks, pluginReactRefresh } from '../libs/plugins'

const reactPkgs = ['react', 'preact']
const allowConstantExportPkgs = ['vite']

export function react(): Config[] {
  if (!isPkgInstalled(reactPkgs)) {
    return []
  }

  const allowConstantExport = isPkgInstalled(allowConstantExportPkgs)

  return [
    {
      plugins: {
        react: pluginReact,
        'jsx-a11y': pluginJSXA11y,
        'react-hooks': pluginReactHooks,
        'react-refresh': pluginReactRefresh,
      },
      rules: {
        ...pluginReactHooks.configs.recommended.rules,
        ...pluginReact.configs.recommended.rules,
        ...pluginReact.configs['jsx-runtime'].rules,
        ...pluginJSXA11y.configs.recommended.rules,

        'react/jsx-no-target-blank': 'off',
        'react/prop-types': 'off',

        'jsx-a11y/alt-text': ['error', { img: ['Image', 'Img'] }],

        'react-refresh/only-export-components': ['warn', { allowConstantExport }],
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ]
}
