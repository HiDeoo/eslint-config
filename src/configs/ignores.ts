import type { Config } from '../libs/eslint'

export function ignores(): Config[] {
  return [
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
