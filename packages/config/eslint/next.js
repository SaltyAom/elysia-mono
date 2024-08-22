const config = require('./react-internal')

/** @type {import("eslint").Linter.Config} */
module.exports = {
    ...config,
    ignores: [...config.ignores, '.next']
}
