import gitignore from 'eslint-config-flat-gitignore'

import type { Config } from '../libs/eslint'

export function ignores(): Config[] {
  return [
    gitignore({ strict: false }),
    {
      ignores: [
        '**/__snapshots__',
        '**/.astro',
        '**/.next',
        '**/.vercel',
        '**/*.min.*',
        '**/bun.lockb',
        '**/coverage',
        '**/dist',
        '**/node_modules',
        '**/out',
        '**/output',
        '**/package-lock.json',
        '**/pnpm-lock.yaml',
        '**/public',
        '**/yarn.lock',
      ],
    },
  ]
}
