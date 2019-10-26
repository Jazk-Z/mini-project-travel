module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["standard", "prettier"],
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true,
    getCurrentPages: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: { "prettier/prettier": "error" },
  plugins: ["prettier"],
  parser: "babel-eslint",
  rules: {
    "no-unused-vars": [
      0,
      {
        vars: "all", // all 检测所有变量，包括全局环境中的变量。这是默认值。
        args: "none" // none - 不检查参数。
      }
    ]
  }
};
