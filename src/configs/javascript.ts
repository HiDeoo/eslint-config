import js from '@eslint/js'
import globals from 'globals'

import type { Config } from '../libs/eslint'

export function javascript(): Config[] {
  return [
    js.configs.recommended,
    {
      languageOptions: {
        ecmaVersion: 2024,
        globals: {
          ...globals.browser,
          ...globals.node,
          ...globals.es2021,
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2024,
          sourceType: 'module',
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
      },
      rules: {
        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'default-case-last': 'error',
        eqeqeq: ['error', 'always', { null: 'ignore' }],
        'new-cap': ['error', { capIsNew: false }],
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-caller': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-constant-binary-expression': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-multi-str': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-new': 'error',
        'no-octal-escape': 'error',
        'no-proto': 'error',
        'no-restricted-globals': [
          'error',
          { name: 'global', message: 'Use `globalThis` instead.' },
          { name: 'self', message: 'Use `globalThis` instead.' },
        ],
        'no-restricted-properties': [
          'error',
          { property: '__defineGetter__', message: 'Use `Object.defineProperty` instead.' },
          { property: '__defineSetter__', message: 'Use `Object.defineProperty` instead.' },
          { property: '__lookupGetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
          { property: '__lookupSetter__', message: 'Use `Object.getOwnPropertyDescriptor` instead.' },
          { property: '__proto__', message: 'Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.' },
        ],
        'no-return-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-undef': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unneeded-ternary': ['error', { defaultAssignment: false }],
        'no-unreachable-loop': 'error',
        'no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTaggedTemplates: true,
            allowTernary: true,
            enforceForJSX: true,
          },
        ],
        'no-use-before-define': ['error', { classes: false, functions: false, variables: false }],
        'no-useless-call': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'prefer-arrow-callback': ['error', { allowNamedFunctions: true, allowUnboundThis: true }],
        'prefer-const': ['error', { destructuring: 'any', ignoreReadBeforeAssign: true }],
        'prefer-exponentiation-operator': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'symbol-description': 'error',
        'unicode-bom': ['error', 'never'],
        yoda: ['error', 'never'],
      },
    },
    {
      files: ['cli.?([cm])[jt]s?(x)', 'scripts/**/*.?([cm])[jt]s?(x)'],
      rules: {
        'no-console': 'off',
      },
    },
  ]
}
