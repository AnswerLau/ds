# Design System

基于 Vue 3 的高质量UI组件库

## 特性

- 🚀 基于 Vue 3 composition API
- 📦 开箱即用的高质量组件
- 🎨 统一的设计规范
- 🔧 支持按需引入
- 📱 支持响应式布局
- 🌍 支持国际化
- ⚡️ 支持 Tree Shaking
- 🎯 使用 TypeScript 开发，提供完整的类型定义
- �� 兼容性强，支持全局注册和单组件注册
- 🎭 样式自动加载，无需手动引入CSS文件

## 安装

### 使用包管理器

```bash
# 使用npm
npm install @answerlau/design-system

# 使用yarn
yarn add @answerlau/design-system

# 使用pnpm
pnpm add @answerlau/design-system
```

### 使用CDN

```html
<!-- 引入Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- 引入组件库 (样式将自动加载) -->
<script src="https://cdn.jsdelivr.net/npm/@answerlau/design-system@1.0.1/dist/design-system.min.js"></script>
```

## 快速开始

### 完整引入

```javascript
import { createApp } from 'vue'
import DesignSystem from '@answerlau/design-system'
// 样式会自动加载，也可以手动引入
// import '@answerlau/design-system/dist/styles/design-system.css'
import App from './App.vue'

const app = createApp(App)
app.use(DesignSystem)
app.mount('#app')
```

### 按需引入

```javascript
import { createApp } from 'vue'
import { Button, Input } from '@answerlau/design-system'
// 样式会自动加载，也可以手动引入
// import '@answerlau/design-system/dist/styles/design-system.css'
import App from './App.vue'

const app = createApp(App)

// 方法一：使用app.use方式引入单个组件
app.use(Button)
app.use(Input)

// 方法二：使用app.component方式手动注册
// app.component('ds-button', Button)
// app.component('ds-input', Input)

app.mount('#app')
```

### CDN引入示例

```html
<!DOCTYPE html>
<html>
<head>
    <title>Design System Demo</title>
    <!-- 不需要手动引入CSS，将自动加载 -->
</head>
<body>
    <div id="app">
        <ds-button type="primary" @click="showMessage">点击按钮</ds-button>
        <ds-input v-model="inputValue" placeholder="请输入内容"></ds-input>
    </div>
    
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@answerlau/design-system@1.0.1/dist/design-system.min.js"></script>
    <script>
        const app = Vue.createApp({
            data() {
                return {
                    inputValue: ''
                }
            },
            methods: {
                showMessage() {
                    this.$message.success('操作成功');
                }
            }
        });
        
        app.use(DesignSystem);
        app.mount('#app');
    </script>
</body>
</html>
```

## 样式自动加载

从v1.0.1版本开始，组件库支持自动加载样式功能，无需手动引入CSS文件。具体特性如下：

- 使用NPM/Yarn/PNPM安装时，样式会自动加载
- 使用CDN引入时，样式会自动从同源路径加载
- 也可以通过全局API手动加载样式: `DesignSystem.loadStyles()`
- 仍然支持传统方式手动引入CSS: `import '@answerlau/design-system/dist/styles/design-system.css'`

## 组件列表

- Button 按钮
- Icon 图标
- Input 输入框
- Checkbox 复选框
- Radio 单选框
- Toggle 开关
- Alert 警告
- Tooltip 文字提示
- Select 选择器
- Dropdown 下拉菜单
- Tab 标签页
- Slider 滑块
- Message 全局提示

## 兼容性说明

本组件库专为Vue 3设计，提供了多种组件注册方式，确保在各种场景下都能顺利使用：

### Vue 3标准注册方式

```javascript
// 全局注册所有组件
app.use(DesignSystem)

// 或者单独注册某个组件
app.use(Button)

// 或者手动命名注册
app.component('custom-button', Button)
```

### 组件命名规范

所有组件在内部均使用kebab-case命名规范，例如`ds-button`而非`dsButton`或`DsButton`。这符合Vue 3推荐的最佳实践。

## 版本更新

### v1.0.1
- 🔄 优化组件注册机制，解决"组件库没有install方法"的问题
- ✅ 完善每个组件的install方法，支持单组件注册
- 🔧 组件名称统一使用kebab-case格式，提高兼容性
- 📝 更新文档，添加组件注册方式说明
- 🎭 新增样式自动加载功能，无需手动引入CSS文件

### v1.0.0
- 🚀 首次发布，包含13个基础组件
- 📦 支持按需引入和全量引入
- 🎨 统一的设计风格
- 🌍 基于Vue 3开发

## 浏览器支持

- 现代浏览器和 IE 11+
- Chrome
- Firefox
- Safari
- Edge

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (git checkout -b feature/AmazingFeature)
3. 提交你的改动 (git commit -m 'Add some AmazingFeature')
4. 推送到分支 (git push origin feature/AmazingFeature)
5. 提交 Pull Request

## 开源协议

[MIT](LICENSE) 