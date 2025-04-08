<template>
  <div class="section-page">
    <h1>Elevation</h1>
    <p class="description">海拔系统通过阴影和层次关系，展现界面元素之间的空间关系和重要程度。</p>
    
    <div class="section">
      <h2>海拔规范</h2>
      <p class="section-description">海拔系统通过不同程度的阴影来表达元素的层级关系和重要性，为界面元素提供视觉深度。</p>
      
      <div class="category-card">
        <h3>浅色阴影 Light Shadow</h3>
        <p class="shadow-intro">适用于浅色背景的界面元素</p>
        
        <div class="shadow-list">
          <div class="shadow-item">
            <div class="shadow-preview light-bg" style="box-shadow: var(--elevation-shadow-light-100)">
              <div class="level-indicator">1</div>
            </div>
            <div class="shadow-info">
              <div class="shadow-name">elevation-shadow-light-100</div>
              
              <div class="shadow-desc">一级阴影 - 用于卡片hover状态</div>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-preview light-bg" style="box-shadow: var(--elevation-shadow-light-200)">
              <div class="level-indicator">2</div>
            </div>
            <div class="shadow-info">
              <div class="shadow-name">elevation-shadow-light-200</div>
              
              <div class="shadow-desc">二级阴影 - 用于Dropdown、Popover、Tooltip等</div>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-preview light-bg" style="box-shadow: var(--elevation-shadow-light-300)">
              <div class="level-indicator">3</div>
            </div>
            <div class="shadow-info">
              <div class="shadow-name">elevation-shadow-light-300</div>
             
              <div class="shadow-desc">三级阴影 - 用于模态弹窗</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="category-card">
        <h3>深色阴影 Dark Shadow</h3>
        <p class="shadow-intro">适用于深色背景的界面元素</p>
        
        <div class="shadow-list">
          <div class="shadow-item">
            <div class="shadow-preview dark-bg" style="box-shadow: var(--elevation-shadow-dark-100)">
              <div class="level-indicator dark">1</div>
            </div>
            <div class="shadow-info">
              <div class="shadow-name">elevation-shadow-dark-100</div>
              
              <div class="shadow-desc">一级阴影（深色背景容器）- 用于卡片hover状态</div>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-preview dark-bg" style="box-shadow: var(--elevation-shadow-dark-200)">
              <div class="level-indicator dark">2</div>
            </div>
            <div class="shadow-info">
              <div class="shadow-name">elevation-shadow-dark-200</div>
              
              <div class="shadow-desc">二级阴影（深色背景容器）- 用于Dropdown、Popover、Tooltip等</div>
            </div>
          </div>
          
          <div class="shadow-item">
            <div class="shadow-preview dark-bg" style="box-shadow: var(--elevation-shadow-dark-300)">
              <div class="level-indicator dark">3</div>
            </div>
            <div class="shadow-info">
              <div class="shadow-name">elevation-shadow-dark-300</div>
              
              <div class="shadow-desc">三级阴影（深色背景容器）- 用于模态弹窗</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>使用场景</h2>
      <p class="section-description">阴影系统为不同界面元素提供了层次感，以下是常见的使用场景。</p>
      
      <div class="category-card">
        <h3>常见应用</h3>
        <div class="examples-grid">
          <div class="example-item">
            <div class="example-preview card-hover" style="box-shadow: var(--elevation-shadow-light-100)">
              卡片 Hover 状态
            </div>
            <div class="example-info">
              <div class="example-name">卡片悬停状态</div>
              <div class="example-value">var(--elevation-shadow-light-100)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview dropdown-example" style="box-shadow: var(--elevation-shadow-light-200)">
              下拉菜单
            </div>
            <div class="example-info">
              <div class="example-name">下拉菜单</div>
              <div class="example-value">var(--elevation-shadow-light-200)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview tooltip-example" style="box-shadow: var(--elevation-shadow-light-200)">
              工具提示
            </div>
            <div class="example-info">
              <div class="example-name">工具提示</div>
              <div class="example-value">var(--elevation-shadow-light-200)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview modal-example" style="box-shadow: var(--elevation-shadow-light-300)">
              模态弹窗
            </div>
            <div class="example-info">
              <div class="example-name">模态弹窗</div>
              <div class="example-value">var(--elevation-shadow-light-300)</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="category-card dark-container">
        <h3>深色背景应用</h3>
        <div class="examples-grid">
          <div class="example-item">
            <div class="example-preview card-hover-dark" style="box-shadow: var(--elevation-shadow-dark-100)">
              深色卡片 Hover
            </div>
            <div class="example-info">
              <div class="example-name">深色卡片悬停</div>
              <div class="example-value">var(--elevation-shadow-dark-100)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview dropdown-dark" style="box-shadow: var(--elevation-shadow-dark-200)">
              深色下拉菜单
            </div>
            <div class="example-info">
              <div class="example-name">深色下拉菜单</div>
              <div class="example-value">var(--elevation-shadow-dark-200)</div>
            </div>
          </div>
          
          <div class="example-item">
            <div class="example-preview modal-dark" style="box-shadow: var(--elevation-shadow-dark-300)">
              深色模态弹窗
            </div>
            <div class="example-info">
              <div class="example-name">深色模态弹窗</div>
              <div class="example-value">var(--elevation-shadow-dark-300)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Elevation'
}
</script>

<style scoped>
.shadow-intro {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-200);
}

.shadow-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
}

.shadow-item {
  display: flex;
  align-items: flex-start;
  padding: var(--space-200);
  border-radius: var(--radius-medium);
  background-color: var(--color-bg-default);
  align-items: center;
}

.shadow-preview {
  width: 120px;
  height: 120px;
  border-radius: var(--radius-medium);
  margin-right: var(--space-300);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.light-bg {
  background-color: white;
}

.dark-bg {
  background-color: #333;
}

.level-indicator {
  font: var(--font-32-bold);
  color: var(--color-text-primary);
}

.level-indicator.dark {
  color: white;
}

.shadow-info {
  flex: 1;
}

.shadow-name {
  font: var(--font-16-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-50);
}

.shadow-value {
  font: var(--font-12-regular);
  font-family: monospace;
  color: var(--color-text-secondary);
  margin-bottom: var(--space-100);
  padding: var(--space-100);
  background-color: var(--color-bg-subtlest);
  border-radius: var(--radius-small);
  word-break: break-word;
}

.shadow-desc {
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
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-150);
  background-color: white;
  border-radius: var(--radius-medium);
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

.dark-container {
  background-color: #1a1a1a;
}

.dark-container h3 {
  color: white;
}

.card-hover {
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: var(--radius-medium);
}

.dropdown-example {
  width: 80%;
  height: 80%;
  background-color: white;
  border-radius: var(--radius-small);
}

.tooltip-example {
  width: 70%;
  height: 50%;
  background-color: #333;
  color: white;
  border-radius: var(--radius-small);
}

.modal-example {
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: var(--radius-large);
}

.card-hover-dark, 
.dropdown-dark, 
.modal-dark {
  background-color: #333;
  color: white;
  border-radius: var(--radius-medium);
  width: 80%;
  height: 80%;
}

.dropdown-dark {
  border-radius: var(--radius-small);
}

.modal-dark {
  border-radius: var(--radius-large);
}
</style> 