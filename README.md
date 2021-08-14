# minista sitemap

<p>
  <a aria-label="Made by QRANOKO" href="https://qranoko.jp">
    <img src="https://img.shields.io/badge/MADE%20BY%20QRANOKO-212121.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/minista-sitemap">
    <img alt="" src="https://img.shields.io/npm/v/minista-sitemap.svg?style=for-the-badge&labelColor=212121">
  </a>
  <a aria-label="License" href="https://github.com/qrac/minista-sitemap/blob/master/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/minista-sitemap.svg?style=for-the-badge&labelColor=212121">
  </a>
</p>

![image](https://i.gyazo.com/3346e4804e9655416a6e3ed0af6f94b6.png)

## About

[minista](https://github.com/qrac/minista) で納品用のサイトマップを簡単に作るための React コンポーネント。

- 納品物に追加の CSS や JavaScript をバンドルさせない
- 無制限に入れ子リストを作れる

## How To Use

### [npm](https://www.npmjs.com/package/minista-sitemap)

```bash
$ npm install minista-sitemap
```

```js
import { Wrapper, Style, Header, Main, Nav, List } from "minista-sitemap"
```

example: [page](https://github.com/qrac/minista-sitemap/blob/main/test/src/pages/index.js) / [json](https://github.com/qrac/minista-sitemap/blob/main/test/project.json)

### Dark Mode

ダークモード（`@media (prefers-color-scheme: dark)`）用の CSS Variables を追加する場合は、Style コンポーネントに `darkMode={true}` を付与します。

```js
<Style darkMode={true} />
```

### Default Dark

基本色をダークテーマにする場合は、Style コンポーネントに `defaultDark={true}` を付与します。

```js
<Style defaultDark={true} />
```

## Support

| Chrome | Firefox | Safari |
| :----: | :-----: | :----: |
| Newest | Newest  | Newest |

## License

- MIT

## Credit

- Author: [Qrac](https://qrac.jp)
- Organization: [QRANOKO](https://qranoko.jp)
