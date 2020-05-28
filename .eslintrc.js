module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "max-len": [2, { code: 120, tabWidth: 2, ignoreUrls: true }],
    "implicit-arrow-linebreak": [2, "beside"],
    semi: [2, "never"],
    "arrow-parens": [2, "as-needed", { requireForBlockBody: true }],
    "function-call-argument-newline": 0,
    "function-paren-newline": 0,
  },
  plugins: ["jest"],
}
