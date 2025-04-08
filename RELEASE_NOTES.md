# 设计系统 v1.0.1 发布说明

我们很高兴地宣布 @answerlau/design-system v1.0.1 正式发布！此版本主要聚焦于提升组件库在Vue 3环境中的兼容性，修复了组件注册相关的问题。

## 🔄 主要更新内容

### 1. 组件注册机制优化
- 解决了"组件库没有install方法"的问题
- 完善了组件库的Vue 3注册机制
- 支持多种组件注册方式（全局注册、单组件注册）

### 2. 组件命名规范统一
- 所有组件名称统一使用kebab-case格式(如 `ds-button`)
- 符合Vue 3推荐的最佳实践，提高了与其他库的兼容性
- 确保组件在模板中使用时保持一致的命名风格

### 3. 单组件注册支持
- 每个组件都添加了独立的install方法
- 支持通过 `app.use(Button)` 方式单独引入组件
- 减少不必要的组件引入，优化应用性能

### 4. 组件库文档更新
- 更新了README文档，添加了组件注册方式说明
- 提供了多种引入方式的示例代码
- 添加了兼容性说明部分

## 🐛 修复问题

- 修复Vue 3环境下组件注册失败的问题
- 修复CDN引用方式下组件无法正确注册的问题
- 修复组件库在按需引入时的兼容性问题

## 🚀 如何升级

### NPM/Yarn/PNPM

```bash
# 使用npm
npm install @answerlau/design-system@1.0.1

# 使用yarn
yarn add @answerlau/design-system@1.0.1

# 使用pnpm
pnpm add @answerlau/design-system@1.0.1
```

### CDN引用

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@answerlau/design-system@1.0.1/dist/styles/design-system.css">

<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/npm/@answerlau/design-system@1.0.1/dist/design-system.min.js"></script>
```

## 📝 使用示例

### 标准引入方式

```javascript
import { createApp } from 'vue'
import DesignSystem from '@answerlau/design-system'
import '@answerlau/design-system/dist/styles/design-system.css'
import App from './App.vue'

const app = createApp(App)
app.use(DesignSystem)
app.mount('#app')
```

### 单组件引入（新增特性）

```javascript
import { createApp } from 'vue'
import { Button, Input } from '@answerlau/design-system'
import '@answerlau/design-system/dist/styles/design-system.css'
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