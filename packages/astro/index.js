module.exports = {
  extends: ['@hideoo/eslint-config-typescript'],
  overrides: [
    {
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  ],
}
