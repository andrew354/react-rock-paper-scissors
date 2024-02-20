module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.yarn',
    '.github',
    '.husky',
    '.vscode',
    'scripts',
    'config',
  ],
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'unused-imports'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'simple-import-sort/imports': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'no-restricted-imports': [
      'warn',
      {
        patterns: ['@/pages/*/*'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
