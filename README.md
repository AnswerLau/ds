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

```bash
npm install @answerlau/design-system
```

## 使用方法

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