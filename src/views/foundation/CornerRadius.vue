<template>
  <div class="section-page">
    <h1>Corner Radius</h1>
    <p class="description">圆角系统定义了界面元素的边角处理方式，创造柔和现代的视觉效果。</p>
    
    <div class="section">
      <h2>圆角规范</h2>
      <p class="section-description">圆角系统提供了一套标准化的边角处理方案，可用于按钮、卡片、对话框等各种界面元素。</p>
      
      <div class="category-card">
        <h3>基础圆角 Base Radius</h3>
        <div class="component-grid">
          <div v-for="radius in [{name: 'none', value: '0'}, {name: 'tiny', value: '2px'}, {name: 'small', value: '4px'}, 
                                 {name: 'medium', value: '6px'}, {name: 'large', value: '8px'}, {name: 'xlarge', value: '12px'}, 
                                 {name: 'xxlarge', value: '16px'}, {name: 'xxxlarge', value: '24px'}, {name: 'circle', value: '50%'}]" 
               :key="`radius-${radius.name}`" 
               class="radius-item">
            <div class="radius-preview" :style="{ borderRadius: `var(--radius-${radius.name})` }"></div>
            <div class="radius-info">
              <div class="radius-name">radius-{{ radius.name }}</div>
              <div class="radius-value">{{ radius.value }}</div>
              <div class="radius-desc">{{ getRadiusDescription(radius.name) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>使用场景</h2>
      <p class="section-description">不同尺寸的圆角适用于不同的界面元素，以下是常见的应用场景。</p>
      
      <div class="category-card">
        <h3>按钮类圆角</h3>
        <div class="examples-grid">
          <div class="example-item">
            <div class="example-preview button-small" :style="{ borderRadius: 'var(--radius-small)' }">
              小型按钮
            </div>
            <div class="example-info">
              <div class="example-name">小型按钮</div>
              <div class="example-value">var(--radius-small)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview button-medium" :style="{ borderRadius: 'var(--radius-medium)' }">
              中型按钮
            </div>
            <div class="example-info">
              <div class="example-name">中型按钮</div>
              <div class="example-value">var(--radius-medium)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview button-large" :style="{ borderRadius: 'var(--radius-large)' }">
              大型按钮
            </div>
            <div class="example-info">
              <div class="example-name">大型按钮</div>
              <div class="example-value">var(--radius-large)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="category-card">
        <h3>容器类圆角</h3>
        <div class="examples-grid">
          <div class="example-item">
            <div class="example-preview card-small" :style="{ borderRadius: 'var(--radius-medium)' }">
              卡片
            </div>
            <div class="example-info">
              <div class="example-name">卡片</div>
              <div class="example-value">var(--radius-medium)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview modal-sample" :style="{ borderRadius: 'var(--radius-large)' }">
              弹窗
            </div>
            <div class="example-info">
              <div class="example-name">弹窗</div>
              <div class="example-value">var(--radius-large)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview tooltip-sample" :style="{ borderRadius: 'var(--radius-small)' }">
              提示框
            </div>
            <div class="example-info">
              <div class="example-name">提示框</div>
              <div class="example-value">var(--radius-small)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="category-card">
        <h3>特殊圆角</h3>
        <div class="examples-grid">
          <div class="example-item">
            <div class="example-preview avatar-sample" :style="{ borderRadius: 'var(--radius-circle)' }">
              头像
            </div>
            <div class="example-info">
              <div class="example-name">圆形头像</div>
              <div class="example-value">var(--radius-circle)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview tag-sample" :style="{ borderRadius: 'var(--radius-circle)' }">
              标签
            </div>
            <div class="example-info">
              <div class="example-name">胶囊标签</div>
              <div class="example-value">var(--radius-circle)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CornerRadius',
  methods: {
    getRadiusDescription(name) {
      const descriptions = {
        'none': '无圆角',
        'tiny': '小标签',
        'small': '小按钮',
        'medium': '中按钮',
        'large': '大按钮',
        'xlarge': '页面弹窗',
        'xxlarge': '暂无',
        'xxxlarge': '暂无',
        'circle': '半圆形胶囊按钮、标签、自定义'
      };
      return descriptions[name];
    }
  }
}
</script>

<style scoped>
.radius-item {
  display: flex;
  align-items: center;
  padding: var(--space-200);
  border: 1px solid var(--color-stroke-default);
  border-radius: var(--radius-medium);
  background-color: var(--color-bg-default);
  margin-bottom: var(--space-200);
}

.radius-preview {
  width: 100px;
  height: 100px;
  background-color: var(--color-brand-default);
  margin-right: var(--space-300);
  flex-shrink: 0;
}

.radius-info {
  flex: 1;
}

.radius-name {
  font: var(--font-16-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-50);
}

.radius-value {
  font: var(--font-14-medium);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-75);
  font-family: monospace;
}

.radius-desc {
  font: var(--font-14-regular);
  color: var(--color-text-tertiary);
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: var(--space-300);
}

.example-item {
  display: flex;
  flex-direction: column;
}

.example-preview {
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-150);
  background-color: var(--color-bg-subtlest);
  border: 1px solid var(--color-stroke-default);
  font: var(--font-14-medium);
  color: var(--color-text-primary);
}

.example-info {
  padding: var(--space-100);
}

.example-name {
  font: var(--font-14-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-50);
}

.example-value {
  font: var(--font-12-regular);
  color: var(--color-text-tertiary);
  font-family: monospace;
}

/* 示例样式 */
.button-small {
  width: 120px;
  height: 32px;
  background-color: var(--color-brand-default);
  color: white;
}

.button-medium {
  width: 160px;
  height: 40px;
  background-color: var(--color-brand-default);
  color: white;
}

.button-large {
  width: 200px;
  height: 48px;
  background-color: var(--color-brand-default);
  color: white;
}

.card-small {
  width: 180px;
  height: 100px;
  background-color: var(--color-bg-default);
  box-shadow: 0 2px 8px var(--color-bg-overlay);
}

.modal-sample {
  width: 200px;
  height: 100px;
  background-color: var(--color-bg-default);
  box-shadow: 0 4px 12px var(--color-bg-overlay);
}

.tooltip-sample {
  width: 140px;
  height: 60px;
  background-color: var(--color-bg-tooltip);
  color: var(--color-text-inverse);
}

.avatar-sample {
  width: 80px;
  height: 80px;
  background-color: var(--color-brand-subtlest);
  color: var(--color-brand-default);
}

.tag-sample {
  width: 100px;
  height: 32px;
  background-color: var(--color-brand-subtlest);
  color: var(--color-brand-default);
}
</style> 