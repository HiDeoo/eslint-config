import { ignores } from './configs/ignores'
import { javascript } from './configs/javascript'
import { unicorn } from './configs/unicorn'
import type { Config } from './libs/eslint'

export default function hideoo(...userConfigs: Config[]) {
  const configs: Config[][] = [ignores(), javascript(), unicorn()]

  configs.push(userConfigs)

  return configs.flat()
}
