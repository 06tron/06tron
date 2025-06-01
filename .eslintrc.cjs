/* eslint-env node */
module.exports = {
    rules: {
        'tsdoc/syntax': 'warn',
    },
    env: {
        node: true,
        browser: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
    root: true,
};
