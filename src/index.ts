import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { prettier } from './configs/prettier'
import { ReactPkgs, react } from './configs/react'
import { tests } from './configs/tests'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import type { Config } from './libs/eslint'
import { isPkgInstalled } from './libs/pkg'

export default function hideoo(...userConfigs: Config[][]) {
  const configs: Config[][] = [ignores(), javascript(), unicorn(), imports(), tests()]

  if (isPkgInstalled('typescript')) {
    configs.push(typescript())
  }

  if (isPkgInstalled(ReactPkgs)) {
    configs.push(react())
  }

  configs.push(...userConfigs, prettier())

  return configs.flat()
}
