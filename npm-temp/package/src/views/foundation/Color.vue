<script>
export default {
  name: 'Color'
}
</script>

<template>
  <div class="section-page">
    <h1>Color System</h1>
    <p class="description">我们的颜色系统旨在创建一致的视觉语言，提供清晰的层次结构和良好的可访问性。</p>
    
    <!-- 语义化颜色 -->
    <div class="section">
      <h2>语义化颜色 Semantic Colors</h2>
      
      <div class="category-card">
        <h3>背景色 Background</h3>
        <div class="component-grid">
          <div v-for="name in ['default', 'subtlest', 'editor', 'surface', 'modal', 'tooltip', 'hover', 'active', 'overlay']" 
               :key="`bg-${name}`" 
               class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--color-bg-${name})` }"></div>
            <div class="color-info">
              <div class="color-name">Background {{name}}</div>
              <div class="color-value">var(--color-bg-{{name}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>文本色 Text</h3>
        <div class="component-grid">
          <div v-for="name in ['primary', 'secondary', 'tertiary', 'disabled', 'inverse', 'inverse-secondary']" 
               :key="`text-${name}`" 
               class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--color-text-${name})` }"></div>
            <div class="color-info">
              <div class="color-name">Text {{name}}</div>
              <div class="color-value">var(--color-text-{{name}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>边框色 Stroke</h3>
        <div class="component-grid">
          <div v-for="name in ['default', 'active', 'divider', 'scrollbar', 'surround']" 
               :key="`stroke-${name}`" 
               class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--color-stroke-${name})` }"></div>
            <div class="color-info">
              <div class="color-name">Stroke {{name}}</div>
              <div class="color-value">var(--color-stroke-{{name}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>品牌色 Brand</h3>
        <div class="component-grid">
          <div v-for="name in ['default', 'hover', 'active', 'disabled', 'subtlest']" 
               :key="`brand-${name}`" 
               class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--color-brand-${name})` }"></div>
            <div class="color-info">
              <div class="color-name">Brand {{name}}</div>
              <div class="color-value">var(--color-brand-{{name}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>强调色 Emphasize</h3>
        <div class="component-grid">
          <div v-for="name in ['default', 'hover', 'active', 'disabled', 'subtlest']" 
               :key="`emphasize-${name}`" 
               class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--color-emphasize-${name})` }"></div>
            <div class="color-info">
              <div class="color-name">Emphasize {{name}}</div>
              <div class="color-value">var(--color-emphasize-{{name}})</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 基础颜色 -->
    <div class="section">
      <h2>基础颜色 Base Colors</h2>
      
      <div class="category-card">
        <h3>中性色 Neutral</h3>
        <div class="component-grid">
          <div v-for="i in 12" :key="`neutral-${i*100}`" class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--neutral-${i*100})` }"></div>
            <div class="color-info">
              <div class="color-name">Neutral {{i*100}}</div>
              <div class="color-value">var(--neutral-{{i*100}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>品牌色 Brand</h3>
        <div class="component-grid">
          <div v-for="i in 10" :key="`atomm-${i*100}`" class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--atomm-${i*100})` }"></div>
            <div class="color-info">
              <div class="color-name">Atomm {{i*100}}</div>
              <div class="color-value">var(--atomm-{{i*100}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>功能色 Function</h3>
        <div class="sub-category">
          <h4>Primary - Blue</h4>
          <div class="component-grid">
            <div v-for="i in 10" :key="`blue-${i*100}`" class="color-item">
              <div class="color-block" :style="{ backgroundColor: `var(--blue-${i*100})` }"></div>
              <div class="color-info">
                <div class="color-name">Blue {{i*100}}</div>
                <div class="color-value">var(--blue-{{i*100}})</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sub-category">
          <h4>Success - Green</h4>
          <div class="component-grid">
            <div v-for="i in 10" :key="`green-${i*100}`" class="color-item">
              <div class="color-block" :style="{ backgroundColor: `var(--green-${i*100})` }"></div>
              <div class="color-info">
                <div class="color-name">Green {{i*100}}</div>
                <div class="color-value">var(--green-{{i*100}})</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sub-category">
          <h4>Warning - Orange</h4>
          <div class="component-grid">
            <div v-for="i in 10" :key="`orange-${i*100}`" class="color-item">
              <div class="color-block" :style="{ backgroundColor: `var(--orange-${i*100})` }"></div>
              <div class="color-info">
                <div class="color-name">Orange {{i*100}}</div>
                <div class="color-value">var(--orange-{{i*100}})</div>
              </div>
            </div>
          </div>
        </div>

        <div class="sub-category">
          <h4>Danger - Red</h4>
          <div class="component-grid">
            <div v-for="i in 10" :key="`red-${i*100}`" class="color-item">
              <div class="color-block" :style="{ backgroundColor: `var(--red-${i*100})` }"></div>
              <div class="color-info">
                <div class="color-name">Red {{i*100}}</div>
                <div class="color-value">var(--red-{{i*100}})</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <h2>扩展色 Extended</h2>
      <div class="category-card">
        <h3>Yellow</h3>
        <div class="component-grid">
          <div v-for="i in 10" :key="`yellow-${i*100}`" class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--yellow-${i*100})` }"></div>
            <div class="color-info">
              <div class="color-name">Yellow {{i*100}}</div>
              <div class="color-value">var(--yellow-{{i*100}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>Cyan</h3>
        <div class="component-grid">
          <div v-for="i in 10" :key="`cyan-${i*100}`" class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--cyan-${i*100})` }"></div>
            <div class="color-info">
              <div class="color-name">Cyan {{i*100}}</div>
              <div class="color-value">var(--cyan-{{i*100}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>Purple</h3>
        <div class="component-grid">
          <div v-for="i in 10" :key="`purper-${i*100}`" class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--purper-${i*100})` }"></div>
            <div class="color-info">
              <div class="color-name">Purple {{i*100}}</div>
              <div class="color-value">var(--purper-{{i*100}})</div>
            </div>
          </div>
        </div>
      </div>

      <div class="category-card">
        <h3>Pink</h3>
        <div class="component-grid">
          <div v-for="i in 10" :key="`pink-${i*100}`" class="color-item">
            <div class="color-block" :style="{ backgroundColor: `var(--pink-${i*100})` }"></div>
            <div class="color-info">
              <div class="color-name">Pink {{i*100}}</div>
              <div class="color-value">var(--pink-{{i*100}})</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-category {
  margin-bottom: var(--space-300);
}

.color-item {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--color-stroke-default);
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--color-bg-default);
  transition: all 0.2s ease;
}

.color-item:hover {
  border-color: var(--color-stroke-active);
  box-shadow: 0 2px 8px var(--color-bg-overlay);
}

.color-block {
  height: 80px;
  width: 100%;
}

.color-info {
  padding: var(--space-100) var(--space-150);
}

.color-name {
  font: var(--font-14-medium);
  margin-bottom: var(--space-50);
  color: var(--color-text-secondary);
}

.color-value {
  font-family: monospace;
  font: var(--font-12-regular);
  color: var(--color-text-tertiary);
}
</style> 