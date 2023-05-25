module.exports = {
  extends: [
    '@hideoo/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react-hooks', 'react-refresh'],
  rules: {
    'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image', 'Img'] }],
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    'react/prop-types': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'react-refresh/only-export-components': 'warn',
  },
  settings: {
    react: {
      version: '18.0',
    },
  },
}
