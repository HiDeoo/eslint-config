import { astro } from './configs/astro'
import { ignores } from './configs/ignores'
import { imports } from './configs/imports'
import { javascript } from './configs/javascript'
import { prettier } from './configs/prettier'
import { react } from './configs/react'
import { tests } from './configs/tests'
import { typescript } from './configs/typescript'
import { unicorn } from './configs/unicorn'
import type { Config } from './libs/eslint'

export default function hideoo(...userConfigs: Config[]): Config[] {
  return [
    ignores(),
    javascript(),
    unicorn(),
    imports(),
    tests(),
    typescript(),
    react(),
    astro(),
    ...userConfigs,
    prettier(),
  ].flat()
}
