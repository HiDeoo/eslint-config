import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint'
import type { Linter } from 'eslint'

export type Config = Linter.FlatConfig | FlatConfig.Config
