import { ignores } from './configs/ignores'
import { javascript } from './configs/javascript'
import { prettier } from './configs/prettier'
import { unicorn } from './configs/unicorn'
import type { Config } from './libs/eslint'

export default function hideoo(...userConfigs: Config[]) {
  const configs: Config[][] = [ignores(), javascript(), unicorn()]

  configs.push(userConfigs)

  configs.push(prettier())

  return configs.flat()
}
