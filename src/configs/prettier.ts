import prettierConfig from 'eslint-config-prettier/flat'

import type { Config } from '../libs/eslint'

export function prettier(): Config[] {
  return [prettierConfig]
}
