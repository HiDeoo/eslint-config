import type { Config } from '../libs/eslint'
import { pluginNoOnlyTests } from '../libs/plugins'

export function tests(): Config[] {
  return [
    {
      plugins: {
        'no-only-tests': pluginNoOnlyTests,
      },
      rules: {
        'no-only-tests/no-only-tests': 'warn',
      },
    },
  ]
}
