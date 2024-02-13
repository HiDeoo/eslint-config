import { ignores } from './configs/ignores'
import { javascript } from './configs/javascript'
import type { Config } from './libs/eslint'

export default function hideoo(...userConfigs: Config[]) {
  const configs: Config[][] = [ignores(), javascript()]

  configs.push(userConfigs)

  return configs.flat()
}
