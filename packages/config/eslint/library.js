const { resolve } = require('node:path')
const { configs } = require('@eslint/js')
const prettier = require('eslint-plugin-prettier/recommended')
const prettierRecommended = require('eslint-plugin-prettier/recommended')
const globals = require('globals')

/** @type {import("eslint").Linter.Config} */
module.exports = {
    plugins: {
        prettier
    },
    ...configs.recommended,
    ...prettierRecommended,
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        },
        globals: {
            ...globals.node
        }
    },

    ignores: [
        // Ignore dotfiles
        '.*.js',
        '.turbo',
        'node_modules/',
        'dist/',
        'scripts/',
        'eslint.config.js',
        'postcss.config.js',
        'tailwind.config.js',
        'vitest.config.mts'
    ]
}
