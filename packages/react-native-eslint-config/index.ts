// "off" 或 "off" - 关闭规则
// "warn" 或 1 - 开启规则，并提示警告
// "error" 或 2 - 开启规则，直接提示错误

module.exports = {
  root: true,
  extends: ["@react-native", "@xieyezi/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
        "no-shadow": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-shadow": ["error"],
      },
    },
  ],
  rules: {
    // off
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
    "comma-dangle": "off",
    "jsx-quotes": "off",
    "no-empty": "off",
    quotes: "off",

    // warning
    "no-console": "warn",
  },
};
