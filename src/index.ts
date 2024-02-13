import { isPackageExists } from 'local-pkg'

import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { prettier } from './configs/prettier'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import type { Config } from './libs/eslint'

export default function hideoo(...userConfigs: Config[][]) {
  const configs: Config[][] = [ignores(), javascript(), unicorn(), imports()]

  if (isPackageExists('typescript')) {
    configs.push(typescript())
  }

  configs.push(...userConfigs, prettier())

  return configs.flat()
}
