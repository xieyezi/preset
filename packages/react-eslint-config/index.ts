// "off" 或 "off" - 关闭规则
// "warn" 或 1 - 开启规则，并提示警告
// "error" 或 2 - 开启规则，直接提示错误

module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  plugins: ["react-refresh"],
  extends: [
    "plugin:react-hooks/recommended",
    "@xieyezi/eslint-config-typescript",
  ],
  rules: {
    /* typescript */
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-anonymous-default-export": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-unused-vars": "off",
    "no-console": "warn",
    "no-empty": "off",

    /* react-refresh */
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
