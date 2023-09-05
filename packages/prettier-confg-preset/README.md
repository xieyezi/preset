# 使用方式

```bash
pnpm add @xieyezi/prettier-config-preset -D
```

### package.json

```json
{
  "prettier": "@xieyezi/prettier-config-preset"
}
```

### .prettierrc.js (CJS 使用方式)

```js
const xieyeziConfig = require("@xieyezi/prettier-config-preset");
module.exports = {
  ...xieyeziConfig
  // 你的其他配置
};
```

### `ESM` 使用方式

```js
import xieyeziConfig from "@xieyezi/prettier-config-preset";
```
