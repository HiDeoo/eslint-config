module.exports = {
  extends: [
    '@hideoo/eslint-config-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
  ],
  rules: {
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image', 'Img'],
      },
    ],

    'react/prop-types': 'off',
  },
}
