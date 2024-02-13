import prettierConfig from 'eslint-config-prettier'

import type { Config } from '../libs/eslint'

export function prettier(): Config[] {
  return [prettierConfig]
}
