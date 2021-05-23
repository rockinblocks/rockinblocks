module.exports = {
  extends: ["xo", "xo-react", "xo-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  plugins: ["jest", "prettier"]
}
