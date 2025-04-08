<template>
  <div class="section-page">
    <h1>Layout</h1>
    <p class="description">布局系统提供了一致的空间关系和组织结构，确保界面的视觉平衡和用户体验。</p>
    
    <div class="section">
      <h2>间距 Spacing</h2>
      <p class="section-description">我们使用一套统一的间距系统，确保界面元素之间的空间关系一致且有序。</p>
      
      <div class="spacing-showcase">
        <div class="category-card">
          <h3>基础间距系统</h3>
          <div class="spacing-grid">
            <div v-for="size in ['0', '50', '75', '100', '150', '200', '300', '400', '500', '800', '1000']" 
                 :key="`space-${size}`" 
                 class="spacing-item">
              <div class="spacing-visual">
                <div class="spacing-bar" :style="{ width: `var(--space-${size})` }"></div>
                <div class="spacing-size">{{ getSpaceValue(size) }}px</div>
              </div>
              <div class="spacing-info">
                <div class="spacing-name">space-{{ size }}</div>
                <div class="spacing-desc">{{ getSpaceDescription(size) }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>使用示例</h2>
      <div class="category-card">
        <h3>基础元素间距</h3>
        <div class="example-box">
          <div class="example-content">
            <div class="demo-element">元素 1</div>
            <div class="space-indicator">space-200 (16px)</div>
            <div class="demo-element">元素 2</div>
            <div class="space-indicator">space-300 (24px)</div>
            <div class="demo-element">元素 3</div>
          </div>
        </div>
        
        <h3 style="margin-top: var(--space-400);">内边距应用</h3>
        <div class="example-grid">
          <div class="example-card" style="padding: var(--space-100);">
            <div class="card-label">space-100 (8px)</div>
            <div class="card-content">小型容器内边距</div>
          </div>
          <div class="example-card" style="padding: var(--space-200);">
            <div class="card-label">space-200 (16px)</div>
            <div class="card-content">常规容器内边距</div>
          </div>
          <div class="example-card" style="padding: var(--space-300);">
            <div class="card-label">space-300 (24px)</div>
            <div class="card-content">大型容器内边距</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  methods: {
    getSpaceValue(size) {
      const values = {
        '0': 0,
        '50': 4,
        '75': 6,
        '100': 8,
        '150': 12,
        '200': 16,
        '300': 24,
        '400': 32,
        '500': 40,
        '800': 64,
        '1000': 80
      };
      return values[size];
    },
    getSpaceDescription(size) {
      const descriptions = {
        '0': '--',
        '50': '小图标和文字之间的间隔',
        '75': '常规图标和文字之间的间隔',
        '100': '重复元素（即按钮组）之间的间隔',
        '150': '小容器的边距',
        '200': '常规容器的边距',
        '300': '大容器的边距',
        '400': '页面模块之间的间距、页面四周边距',
        '500': '暂无',
        '800': '暂无',
        '1000': '暂无'
      };
      return descriptions[size];
    }
  }
}
</script>

<style scoped>
.spacing-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-200);
}

.spacing-item {
  display: flex;
  align-items: center;
  padding-bottom: var(--space-200);
  border-bottom: 1px dashed var(--color-stroke-divider);
}

.spacing-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.spacing-visual {
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: var(--space-100);
}

.spacing-bar {
  height: 24px;
  background-color: var(--color-brand-default);
  border-radius: 4px;
}

.spacing-size {
  font: var(--font-14-medium);
  color: var(--color-text-tertiary);
}

.spacing-info {
  flex: 1;
}

.spacing-name {
  font: var(--font-16-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-50);
}

.spacing-desc {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
}

.example-box {
  background-color: var(--color-bg-subtlest);
  border-radius: 8px;
  padding: var(--space-300);
  margin-bottom: var(--space-300);
}

.example-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.demo-element {
  width: 100%;
  height: 60px;
  background-color: var(--color-brand-subtlest);
  border: 1px solid var(--color-brand-default);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--font-16-medium);
  color: var(--color-brand-default);
}

.space-indicator {
  padding: var(--space-100) 0;
  font: var(--font-14-medium);
  color: var(--color-text-tertiary);
  background-color: transparent;
  text-align: center;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-200);
}

.example-card {
  background-color: var(--color-bg-subtlest);
  border-radius: 8px;
  border: 1px solid var(--color-stroke-default);
  min-height: 120px;
  position: relative;
}

.card-label {
  position: absolute;
  top: 8px;
  right: 8px;
  font: var(--font-12-medium);
  color: var(--color-text-tertiary);
  background-color: var(--color-bg-default);
  padding: 4px 8px;
  border-radius: 4px;
}

.card-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--font-16-medium);
  color: var(--color-text-secondary);
}
</style> 