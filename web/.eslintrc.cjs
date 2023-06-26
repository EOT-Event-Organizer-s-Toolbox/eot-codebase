module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  overrides: [
    {
      files: ['postcss.config.cjs', '.eslintrc.cjs'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'react-refresh/only-export-components': 'warn',
  },
};
