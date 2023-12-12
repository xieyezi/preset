// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，并提示警告
// "error" 或 2 - 开启规则，直接提示错误
// https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/eslint-plugin

module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.js"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
    },
  },
  rules: {
    // off
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    //import
    "import/namespace": "off",

    // error
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
