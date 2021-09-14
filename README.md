# 小工具 - css-import   
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/liuqh0609/tools-css-imports/LICENSE) [![npm](https://img.shields.io/npm/v/@tools/css-import/next.svg)](https://www.npmjs.com/package/@tools/css-import)


**一个用来查找样式文件中 import 语句的小工具。**

目前支持的样式文件:

- `css`
- `less`
- `scss`
- `wxss`

## 安装

`npm install @tools/css-import`

or

`yarn add @tools/css-import`

## 使用

```ts
import cssImport from '@tools/css-import';
import fs from 'fs';

const code = fs.readFileSync('../src/xxx.css');
const list = cssImport(code);

// TODO Something
```

## 注意事项

### 返回结果

返回结果是一个数据，该数组符合以下接口特征

```ts
interface IResultProps {
	/** url路径 */
	url?: string;
	/** 完整的import语句 */
	statements?: string;
}

export type Result = IResultProps[];
```

`example`:
```ts
[
  {
    statements: '@import url("./src/xxx.css")',
    url:'./src/xxx.css'
  },
  {
    statements: '@import url("./src/xxx1.css")',
    url:'./src/xxx1.css'
  }
]
```
### require时报错

在使用`require`引入项目时，抛出`undefined`的错误。

请使用以下写法引入。
```js
const cssImport =  require('@tools/css-import').default;
```


> 特别感谢[]()大佬，该项目是参考 [`css-imports`](https://github.com/popomore/css-imports) 项目改造的`ts`版本