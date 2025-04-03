# 设计系统CORS代理服务器

这是一个简单的CORS代理服务器，用于绕过网站分析工具中的跨域限制。

## 功能

- 绕过浏览器的CORS限制
- 提取目标网站的样式信息
- 处理HTML、CSS和其他资源类型
- 提供错误处理和详细日志

## 安装

```bash
# 进入服务器目录
cd server

# 安装依赖
npm install
```

## 使用方法

### 启动服务器

```bash
# 启动服务器
npm start

# 或者使用开发模式（自动重启）
npm run dev
```

服务器将在 http://localhost:3001 上运行。

### API端点

主要代理端点：

```
GET /api/proxy?url=目标URL
```

例如，要获取 https://example.com 的样式信息：

```
http://localhost:3001/api/proxy?url=https://example.com
```

### 健康检查

```
GET /api/health
```

## 前端集成

在前端代码中，替换直接的URL请求为通过代理服务器的请求：

```javascript
// 原始请求（会遇到CORS问题）
// fetch('https://example.com')

// 使用代理服务器
fetch('http://localhost:3001/api/proxy?url=https://example.com')
  .then(response => response.json())
  .then(data => {
    console.log('通过代理获取的数据:', data);
    // 处理返回的样式数据
  })
  .catch(error => {
    console.error('代理请求失败:', error);
  });
```

## 注意事项

- 本代理服务器仅供开发和测试使用
- 在生产环境中，应该实现更安全的代理机制
- 某些网站可能会阻止爬虫请求，可能需要调整请求头
- 使用此代理时应遵守目标网站的使用条款 