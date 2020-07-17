# 公文系统

#### 目录结构

`tree -L 5 -I 'node_modules/' > test.md`
```
├── src
│   ├── App.js  路由
│   ├── App.test.js
│   ├── Util
│   │   ├── CommonMethod.js 公用方法
│   │   ├── ServiceCall.js 接口调用/axios
│   │   ├── Util.js 全局变量
│   │   └── loadable.js 路由拆分
│   ├── index.js 入口文件
│   ├── index.less 公共样式
│   ├── js
│   │   ├── components 组件/公共组件
│   │   │   ├── container   正式组件「class/函数」写法
│   │   │   │   └── FormContainer.jsx
│   │   │   ├── hook        正式组件「hook」写法
│   │   │   │   ├── hook.less  组件的公共样式
│   │   │   │   ├── modal      弹框
│   │   │   │   ├── prograss   流程
│   │   │   │   └── title      标题
│   │   │   └── presentational  测试组件「不确定的组件」写在这里
│   │   │       ├── Alertnote.jsx
│   │   │       ├── Input.jsx
│   │   │       ├── Testcon.jsx
│   │   │       └── Transfertree.jsx
│   │   └── stories 组件测试storybook
│   │       └── index.js   组件测试主页
│   ├── logo.svg
│   ├── polyfill.js
│   ├── routes  各个页面
│   │   ├── DeductionTable （测试模块：一个模块一个文件夹）
│   │   │   ├── DeductionTable.jsx
│   │   │   └── Test.jsx
│   │   └── 其它模块文件夹
│   ├── serviceWorker.js
│   └── setupTests.js
```

----

#### 注意事项

Webpack 只处理 src 中的文件。 你需要将任何 JS 和 CSS 文件放在 src 中，否则 Webpack 将发现不了它们
只能在 `public/index.html` 中使用 `public` 中的文件

----

### 重点:兼容`ie 10`

1. 删除整个`node_modules` 包

2. 改变`node_modules`  

   ```javascript
   "browserslist": {
       "production": [
         ">0.2%",
         "not dead",
         "not op_mini all",
         "ie > 9"
       ],
       "development": [
         "last 1 chrome version",
         "last 1 firefox version",
         "last 1 safari version",
         "ie > 9"
       ]
   }
   ```

3. 暴露`webpack`配置文件

   ```javascript
   // 添加git仓库
   git add .
   git commit -m '为了运行eject'
   //命令行
   $ npm run eject
   ```

4. 一键安装

   ```javascript
   npm install
   ```

5. 安装兼容依赖

   ```javascript
   npm install setprototypeof react-app-polyfill core-js mutation-observer --save
   ```

6. 编辑`react`入口文件

   ```javascript
   // 这里是src/index.js
   import 'react-app-polyfill/ie9';
   import 'react-app-polyfill/stable';
   import './polyfill';       // 说明 请看序号7
   import 'core-js/es/set';
   import 'core-js/es/map';
   import 'mutation-observer';
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import * as serviceWorker from './serviceWorker';
   
   ReactDOM.render(
       <App />,
     document.getElementById('root')
   );
   serviceWorker.unregister();
   ```

7. `pofyfill`说明

   ```javascript
   # src文件夹下面创建polyfill.js文件
   import  setprototypeof from 'setprototypeof';
   Object.setPrototypeOf = setprototypeof;
   ```

8. 改变`webpack.config.js`

   

文档地址

| 文档名称             | 文档地址                                   |
| -------------------- | ------------------------------------------ |
| Antd Design (UI框架) | https://ant.design/docs/react/introduce-cn |
| React                | https://react.docschina.org/               |
| Axios                | http://www.axios-js.com/docs/              |

## 文件夹结构说明

> 重要面向src目录里面的内容

+ `src/pages`要编写的页面
+ `src/server`request请求函数
+ `src/util` 通用方法
+ `src/components` 公用组件