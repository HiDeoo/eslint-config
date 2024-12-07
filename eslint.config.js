import hideoo from './dist/index.js'

export default hideoo([
  {
    files: ['src/configs/*.ts'],
    rules: {
      // Most plugins do not have proper types yet.
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
])
