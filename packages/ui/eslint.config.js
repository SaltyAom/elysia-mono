const config = require('config/eslint/library')
const typescript = require('config/eslint/typescript')

/** @type {import("eslint").Linter.Config} */
module.exports = typescript(__dirname, config, {
    ignores: [...config.ignores]
})
