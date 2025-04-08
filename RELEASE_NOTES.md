# 设计系统 v1.0.2 发布说明

我们很高兴地宣布 @answerlau/design-system v1.0.2 正式发布！此版本主要增加了样式自动加载功能，同时也修复了组件注册相关的问题，大大提升了组件库在Vue 3环境中的易用性。

## 🔄 主要更新内容

### 1. 样式自动加载功能
- 新增样式自动加载功能，无需手动引入CSS文件
- 支持从CDN自动检测和加载样式文件
- 提供全局API `DesignSystem.loadStyles()` 用于手动加载样式

### 2. 组件注册机制优化
- 解决了"组件库没有install方法"的问题
- 完善了组件库的Vue 3注册机制
- 支持多种组件注册方式（全局注册、单组件注册）

### 3. 组件命名规范统一
- 所有组件名称统一使用kebab-case格式(如 `ds-button`)
- 符合Vue 3推荐的最佳实践，提高了与其他库的兼容性
- 确保组件在模板中使用时保持一致的命名风格

### 4. 单组件注册支持
- 每个组件都添加了独立的install方法
- 支持通过 `app.use(Button)` 方式单独引入组件
- 减少不必要的组件引入，优化应用性能

### 5. 组件库文档更新
- 更新了README文档，添加了样式自动加载的说明
- 提供了多种引入方式的示例代码
- 添加了兼容性说明部分

## 🐛 修复问题

- 修复Vue 3环境下组件注册失败的问题
- 修复CDN引用方式下组件无法正确注册的问题
- 修复样式文件无法自动加载的问题
- 修复组件库在按需引入时的兼容性问题

## 🚀 如何升级

### NPM/Yarn/PNPM

```bash
# 使用npm
npm install @answerlau/design-system@1.0.2

# 使用yarn
yarn add @answerlau/design-system@1.0.2

# 使用pnpm
pnpm add @answerlau/design-system@1.0.2
```

### CDN引用

```html
<!-- 引入Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- 引入组件库 (样式将自动加载) -->
<script src="https://cdn.jsdelivr.net/npm/@answerlau/design-system@1.0.2/dist/design-system.min.js"></script>
```

## 📝 使用示例

### 标准引入方式

```javascript
import { createApp } from 'vue'
import DesignSystem from '@answerlau/design-system'
// 样式会自动加载，无需手动引入
// import '@answerlau/design-system/dist/styles/design-system.css'
import App from './App.vue'

const app = createApp(App)
app.use(DesignSystem)
app.mount('#app')
```

### 单组件引入

```javascript
import { createApp } from 'vue'
import { Button, Input } from '@answerlau/design-system'
// 样式会自动加载，无需手动引入
// import '@answerlau/design-system/dist/styles/design-system.css'
import App from './App.vue'

const app = createApp(App)
// 使用app.use方式引入单个组件
app.use(Button)
app.use(Input)
app.mount('#app')
```

感谢您使用我们的组件库！如有任何问题或反馈，请访问我们的GitHub仓库提交issue。

---

设计系统团队 | 2024年4月7日

# 设计系统 v1.0.3 发布说明

我们很高兴地宣布 @answerlau/design-system v1.0.3 正式发布！此版本主要修复了CDN使用时找不到design-system.min.js的问题，确保了使用CDN引入组件库时的稳定性。

## 🔄 主要更新内容

### 1. 修复CDN引用问题
- 修复CDN使用时找不到design-system.min.js的问题
- 调整构建配置，确保始终生成.min.js文件
- 修正package.json中main字段指向正确的文件

### 2. 优化CDN体验
- 更新CDN引用链接至1.0.3版本
- 确保CDN使用时样式可以正确自动加载
- 提升CDN使用时的稳定性

## 🚀 如何升级

### NPM/Yarn/PNPM

```bash
# 使用npm
npm install @answerlau/design-system@1.0.3

# 使用yarn
yarn add @answerlau/design-system@1.0.3

# 使用pnpm
pnpm add @answerlau/design-system@1.0.3
```

### CDN引用

```html
<!-- 引入Vue 3 -->
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- 引入组件库 (样式将自动加载) -->
<script src="https://cdn.jsdelivr.net/npm/@answerlau/design-system@1.0.3/dist/design-system.min.js"></script>
```

感谢您使用我们的组件库！如有任何问题或反馈，请访问我们的GitHub仓库提交issue。

---

设计系统团队 | 2024年4月8日 