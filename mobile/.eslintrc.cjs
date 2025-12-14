/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['expo', 'prettier'],
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    es2022: true,
  },
  rules: {
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/', '.expo/'],
};
