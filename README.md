# MOBX REACT 项目

## 步骤：

### 新建项目

```
mkdir proj
```

### init

```
cd proj
npm init -y
```

### 开发依赖

```
npm i -D webpack webpack-dev-server typescript awesome-typescript-loader source-map-loader html-webpack-plugin css-loader style-loader file-loader mobx-react-devtools mocha chai mochawesome @types/chai @types/mocha ts-node enzyme react-addons-test-utils @types/enzyme
```

### 依赖
```
npm i -S react react-dom @types/react @types/react-dom mobx@3.1.11 mobx-react @types/lodash lodash @types/node
```

### 创建文档结构
```
mkdir build src src/components src/interfaces src/stores static static/images test
```

### 创建文件
```
touch tsconfig.json build/webpack.base.js src/index.tsx src/components/App.tsx src/stores/index.ts src/interfaces/index.ts test/mocha.opts test/test.spec.ts
```


### 重点

+ typescript 的 react 写法，类型定义
+ typescript 接口的定义与使用
+ mobx 的 store 写法
+ mobx 的 组件之间共享store tree及传递方法
+ mobx 的 常用 API 用法
+ mocha 测试工具与 chai 断言库的组合使用
+ mocha 与 chai 、 enzyme 组合对react组件进行测试

### 运行项目
```
npm install
npm start
npm test
```