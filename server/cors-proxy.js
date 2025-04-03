// CORS代理服务器
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const cheerio = require('cheerio');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all requests
app.use(cors());

// 静态文件服务
app.use(express.static(path.join(__dirname, '../dist')));

// Health check endpoint
app.get('/', (req, res) => {
  res.send('CORS Proxy Server is running');
});

// Proxy endpoint
app.get('/proxy', async (req, res) => {
  const url = req.query.url;
  
  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }
  
  try {
    // Validate URL format
    new URL(url);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    // Set headers to match the proxied response
    Object.keys(response.headers).forEach(header => {
      // Skip headers that would cause CORS issues
      if (!['content-length', 'content-encoding'].includes(header.toLowerCase())) {
        res.setHeader(header, response.headers[header]);
      }
    });
    
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Send the response
    res.send(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(500).json({ 
      error: 'Failed to proxy request',
      message: error.message
    });
  }
});

// 从HTML中提取样式信息
function extractStylesFromHtml(html, baseUrl) {
  const $ = cheerio.load(html);
  const styles = {
    title: $('title').text(),
    url: baseUrl,
    colors: {},
    typography: {},
    spacing: {},
    mediaqueries: []
  };
  
  // 提取内联样式
  $('[style]').each((i, el) => {
    const style = $(el).attr('style');
    // 提取颜色
    const colorMatches = style.match(/color:\s*([^;]+)/g);
    const bgColorMatches = style.match(/background(-color)?:\s*([^;]+)/g);
    
    if (colorMatches) {
      colorMatches.forEach(match => {
        const color = match.split(':')[1].trim();
        styles.colors[`color-${color}`] = color;
      });
    }
    
    if (bgColorMatches) {
      bgColorMatches.forEach(match => {
        const parts = match.split(':');
        if (parts.length > 1) {
          const color = parts[1].trim();
          styles.colors[`bg-${color}`] = color;
        }
      });
    }
  });
  
  // 提取CSS链接
  const cssLinks = [];
  $('link[rel="stylesheet"]').each((i, el) => {
    const href = $(el).attr('href');
    if (href) {
      // 处理相对路径和绝对路径
      if (href.startsWith('http')) {
        cssLinks.push(href);
      } else if (href.startsWith('//')) {
        cssLinks.push(`https:${href}`);
      } else {
        const url = new URL(baseUrl);
        if (href.startsWith('/')) {
          cssLinks.push(`${url.origin}${href}`);
        } else {
          // 处理相对路径
          const basePath = url.pathname.split('/').slice(0, -1).join('/');
          cssLinks.push(`${url.origin}${basePath}/${href}`);
        }
      }
    }
  });
  
  // 提取内部样式表
  $('style').each((i, el) => {
    const cssText = $(el).text();
    // 提取媒体查询
    const mediaQueryMatches = cssText.match(/@media[^{]+\{([^}]+\})+/g);
    if (mediaQueryMatches) {
      mediaQueryMatches.forEach(query => {
        const mediaQuery = query.substring(0, query.indexOf('{')).trim();
        styles.mediaqueries.push(mediaQuery);
      });
    }
  });
  
  // 提取字体相关信息
  const bodyStyles = window.getComputedStyle && window.getComputedStyle(document.body);
  if (bodyStyles) {
    styles.typography['body-font'] = bodyStyles.fontFamily;
    styles.typography['body-size'] = bodyStyles.fontSize;
  }
  
  // 提取标题字体
  $('h1, h2, h3, h4, h5, h6').each((i, el) => {
    const tag = el.tagName.toLowerCase();
    styles.typography[`${tag}-size`] = $(el).css('font-size');
    styles.typography[`${tag}-weight`] = $(el).css('font-weight');
  });
  
  // 返回提取的样式数据和CSS链接
  return {
    styles,
    cssLinks,
    rawHtml: html.substring(0, 1000) + '...' // 仅返回部分HTML用于调试
  };
}

// Start the server
app.listen(PORT, () => {
  console.log(`CORS Proxy Server running on port ${PORT}`);
}); 