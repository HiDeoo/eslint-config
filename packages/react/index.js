module.exports = {
  extends: [
    '@hideoo/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image', 'Img'] }],
    'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: '18.0',
    },
  },
}
