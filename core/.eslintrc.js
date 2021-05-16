module.exports = {
  extends: ["xo", "xo-react", "xo-typescript", "prettier"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  root: true,
  plugins: ["jest", "prettier"]
}
