import type { Config } from '../libs/eslint'
import prettierConfig from 'eslint-config-prettier'

export function prettier(): Config[] {
  return [prettierConfig]
}
