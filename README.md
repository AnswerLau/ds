# 设计系统 Design System

一个基于Vue 3的高质量UI组件库，提供统一的设计语言和用户体验。

[![NPM version](https://img.shields.io/npm/v/@answerlau/design-system.svg?style=flat-square)](https://www.npmjs.com/package/@answerlau/design-system)
[![NPM downloads](https://img.shields.io/npm/dm/@answerlau/design-system.svg?style=flat-square)](https://www.npmjs.com/package/@answerlau/design-system)
[![License](https://img.shields.io/npm/l/@answerlau/design-system.svg?style=flat-square)](https://www.npmjs.com/package/@answerlau/design-system)

## 特性

- 💡 **一致的设计体验**: 遵循统一的设计规范，提供一致的视觉和交互体验
- 📦 **组件化架构**: 所有组件支持按需引入，减小打包体积
- 🔥 **Vue 3支持**: 基于Vue 3开发，完全支持Composition API
- 🎨 **可定制的主题**: 支持灵活的主题配置和样式覆盖
- 🌐 **响应式设计**: 适配不同尺寸的屏幕和设备
- 🛠️ **贴心的开发体验**: 提供完善的类型定义，便于在TypeScript项目中使用

## 支持环境

- 现代浏览器
- 支持移动端

## 组件

- Button - 按钮组件
- Input - 输入框组件
- Icon - 图标组件
- Tab - 标签页组件
- Dropdown - 下拉菜单
- Tooltip - 提示框
- Alert - 警告提示
- Message - 消息通知
- Toggle - 开关组件
- Checkbox - 复选框
- Radio - 单选框
- Select - 选择器
- Slider - 滑块组件

## 安装

### NPM 安装
```bash
npm install @answerlau/design-system
```

### CDN 引入
直接通过浏览器的HTML标签导入Design System，然后就可以使用全局变量`DesignSystem`。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/styles/design-system.css">
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/design-system.js"></script>
```

## 使用方法

### 完整引入

```javascript
import { createApp } from 'vue';
import DesignSystem from '@answerlau/design-system';
import '@answerlau/design-system/dist/styles/design-system.css';
import App from './App.vue';

const app = createApp(App);
app.use(DesignSystem);
app.mount('#app');
```

### 按需引入

```javascript
import { createApp } from 'vue';
import { Button, Input, Icon } from '@answerlau/design-system';
import '@answerlau/design-system/dist/styles/design-system.css';
import App from './App.vue';

const app = createApp(App);
app.component('ds-button', Button);
app.component('ds-input', Input);
app.component('ds-icon', Icon);
app.mount('#app');
```

### 在Vue组件中使用
```vue
<template>
  <div>
    <ds-button type="primary" @click="handleClick">点击按钮</ds-button>
    <ds-input v-model="inputValue" placeholder="请输入内容"></ds-input>
    <ds-slider v-model="sliderValue" :min="0" :max="100"></ds-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      sliderValue: 50
    }
  },
  methods: {
    handleClick() {
      this.$message.success('点击成功');
    }
  }
}
</script>
```

### 通过CDN使用
```html
<!DOCTYPE html>
<html>
<head>
    <title>设计系统示例</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/styles/design-system.css">
</head>
<body>
    <div id="app">
        <ds-button type="primary" @click="showMessage">点击按钮</ds-button>
        <ds-input v-model="inputValue" placeholder="请输入内容"></ds-input>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue@3.4.21/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/design-system.js"></script>
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

## 开发

```bash
# 克隆项目
git clone https://github.com/AnswerLau/ds.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

## 贡献指南

非常欢迎您的贡献！如果您发现任何问题或有改进建议，请提交Issue或Pull Request。

## 许可证

[MIT](LICENSE) 