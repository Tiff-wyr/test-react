module.exports = {
  root: true,
  globals: {
    _: true,
    React: true,
  },
  env: {
    browser: true,
    node: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
};