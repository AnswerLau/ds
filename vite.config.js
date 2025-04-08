import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { writeFileSync } from 'fs'

// CSS提取插件
const extractCSS = () => {
  return {
    name: 'extract-css',
    generateBundle(options, bundle) {
      // 确保样式文件被正确处理
      console.log('Bundle 文件:', Object.keys(bundle));
    }
  };
};

export default defineConfig({
  plugins: [
    vue(),
    extractCSS()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    host: true
  },
  css: {
    // 确保CSS提取
    extract: {
      filename: 'styles/design-system.css',
    },
  },
  build: {
    outDir: 'dist',
    // 确保CSS被包含在构建中
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'DesignSystem',
      fileName: (format) => {
        if (format === 'es') return 'design-system.esm.js';
        if (format === 'umd') return 'design-system.min.js';
        return `design-system.${format}.js`;
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'auto',
        name: 'DesignSystem',
        extend: true,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/design-system.css';
          }
          return assetInfo.name;
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // 保留控制台输出以便调试
        drop_debugger: true
      }
    }
  }
}) 