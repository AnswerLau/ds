# 设计系统 Design System

这是一个现代化的组件库和设计系统，为Web应用程序提供一致的设计语言和用户体验。

## 特点

- 一致的设计语言
- 组件化架构
- 可定制的主题
- 响应式设计
- 易于使用的接口

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
直接通过浏览器的 HTML 标签导入设计系统，然后就可以使用全局变量 `DesignSystem`。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/styles/design-system.css">
<!-- 引入组件库 -->
<script src="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/design-system.js"></script>
```

## 使用方法

### 通过模块引入
```javascript
import { Button, Input, Icon } from '@answerlau/design-system';

// 在Vue组件中使用
export default {
  components: {
    dsButton: Button,
    dsInput: Input,
    dsIcon: Icon
  }
}
```

### 通过CDN引入
```html
<!DOCTYPE html>
<html>
<head>
    <title>设计系统示例</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/styles/design-system.css">
</head>
<body>
    <div id="app">
        <ds-button type="primary">点击按钮</ds-button>
        <ds-input placeholder="请输入内容"></ds-input>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/AnswerLau/ds/dist/design-system.js"></script>
    <script>
        const app = Vue.createApp({});
        app.use(DesignSystem);
        app.mount('#app');
    </script>
</body>
</html>
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build
```

## 许可证

MIT 