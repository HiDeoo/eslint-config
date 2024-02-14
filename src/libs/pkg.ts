import { isPackageExists } from 'local-pkg'

export function isPkgInstalled(pkgs: string | string[]): boolean {
  const all = Array.isArray(pkgs) ? pkgs : [pkgs]

  return all.some((pkg) => isPackageExists(pkg))
}
