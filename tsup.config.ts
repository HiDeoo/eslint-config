import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  target: 'node20',
})
