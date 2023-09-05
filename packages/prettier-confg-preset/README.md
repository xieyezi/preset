<p align="center">
<img src="https://s2.loli.net/2022/04/10/4hAyLUkQIDZ1oxR.png" height="150">
</p>

<h1 align="center">prettier-config-preset <sup>Changan Auto</sup></h1>

<p align="center">
<a href="https://www.npmjs.com/package/@xieyezi/prettier-config-preset" target="__blank"><img src="https://api.iconify.design/simple-icons:prettier.svg?color=%23878787" height="32" alt="vue2-prettier-config" /></a>
</p>

<p align="center">
长安汽车云平台开发所车云数字应用开发室 prettier 规则.<br>
</p>

## 使用方式

```bash
pnpm add @xieyezi/prettier-config-preset -D
```

### package.json

```json
{
  "prettier": "@xieyezi/prettier-config-preset"
}
```
### .prettierrc.js (CJS使用方式)

```js
const changanAutoConfig = require('@xieyezi/prettier-config-preset');
module.exports = {
  ...changanAutoConfig,
  // 你的其他配置
}
```

### `ESM` 使用方式

```js
import changanAutoConfig from '@xieyezi/prettier-config-preset';
```
