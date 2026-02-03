import js from '@eslint/js'
import prettier from 'eslint-config-prettier'
import nextPlugin from '@next/eslint-plugin-next'
import reactPlugin from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: ['node_modules', '.next', 'out'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        browser: true,
        node: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/jsx-boolean-value': ['error', 'always'],
      'react/self-closing-comp': 'error',
      'react/prop-types': 'off',
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  prettier,
]
