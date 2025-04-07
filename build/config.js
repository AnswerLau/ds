/**
 * 构建配置
 */
const path = require('path');

module.exports = {
  // 入口文件
  entry: path.resolve(__dirname, '../src/components/index.js'),
  
  // 输出目录
  outDir: 'dist',
  
  // 构建目标格式
  formats: ['es', 'umd'],
  
  // 构建名称
  name: 'DesignSystem',
  
  // 文件名配置
  fileName: (format) => {
    if (format === 'es') return 'design-system.esm.js';
    if (format === 'umd') return 'design-system.js';
    return `design-system.${format}.js`;
  },
  
  // 外部依赖
  external: ['vue'],
  
  // 全局变量名称映射
  globals: {
    vue: 'Vue'
  },

  // CSS输出配置
  cssFileName: 'styles/design-system.css',
  
  // 是否压缩
  minify: true,
  
  // 是否生成sourcemap
  sourcemap: false
}; 