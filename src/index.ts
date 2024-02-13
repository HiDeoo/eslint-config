import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { prettier } from './configs/prettier'
import { unicorn } from './configs/unicorn'
import type { Config } from './libs/eslint'

export default function hideoo(...userConfigs: Config[]) {
  const configs: Config[][] = [ignores(), javascript(), unicorn(), imports()]

  configs.push(userConfigs)

  configs.push(prettier())

  return configs.flat()
}
