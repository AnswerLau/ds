<template>
  <div class="section-page">
    <h1>Tooltip</h1>
    <p class="description">文字提示组件用于在悬停时显示简短的信息提示。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">文字提示有不同的位置和主题。</p>
      
      <div class="category-card">
        <h3>基础文字提示</h3>
        <p class="component-desc">基础的文字提示功能，在鼠标悬停时显示。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_tooltip content="这是一个提示文本">
              <button class="demo-button">鼠标移到这里</button>
            </ds_tooltip>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tooltip content="这是一个提示文本"&gt;
  &lt;button&gt;鼠标移到这里&lt;/button&gt;
&lt;/ds_tooltip&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>不同位置</h3>
        <p class="component-desc">可以设置文字提示显示在不同的位置。</p>
        
        <div class="demo-block">
          <div class="demo-row justify-content-center">
            <ds_tooltip content="上方提示" placement="top">
              <button class="demo-button">上方</button>
            </ds_tooltip>
            
            <ds_tooltip content="右侧提示" placement="right">
              <button class="demo-button">右侧</button>
            </ds_tooltip>
            
            <ds_tooltip content="下方提示" placement="bottom">
              <button class="demo-button">下方</button>
            </ds_tooltip>
            
            <ds_tooltip content="左侧提示" placement="left">
              <button class="demo-button">左侧</button>
            </ds_tooltip>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tooltip content="上方提示" placement="top"&gt;
  &lt;button&gt;上方&lt;/button&gt;
&lt;/ds_tooltip&gt;

&lt;ds_tooltip content="右侧提示" placement="right"&gt;
  &lt;button&gt;右侧&lt;/button&gt;
&lt;/ds_tooltip&gt;

&lt;ds_tooltip content="下方提示" placement="bottom"&gt;
  &lt;button&gt;下方&lt;/button&gt;
&lt;/ds_tooltip&gt;

&lt;ds_tooltip content="左侧提示" placement="left"&gt;
  &lt;button&gt;左侧&lt;/button&gt;
&lt;/ds_tooltip&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>不同主题</h3>
        <p class="component-desc">文字提示有深色和浅色两种主题。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_tooltip content="深色主题" theme="dark">
              <button class="demo-button">深色主题</button>
            </ds_tooltip>
            
            <ds_tooltip content="浅色主题" theme="light">
              <button class="demo-button">浅色主题</button>
            </ds_tooltip>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tooltip content="深色主题" theme="dark"&gt;
  &lt;button&gt;深色主题&lt;/button&gt;
&lt;/ds_tooltip&gt;

&lt;ds_tooltip content="浅色主题" theme="light"&gt;
  &lt;button&gt;浅色主题&lt;/button&gt;
&lt;/ds_tooltip&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>自定义内容</h3>
        <p class="component-desc">可以使用插槽自定义文字提示的内容。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_tooltip placement="bottom">
              <template #content>
                <div>
                  <strong>自定义提示内容</strong>
                  <p style="margin: 5px 0 0;">这里可以放置更复杂的内容</p>
                </div>
              </template>
              <button class="demo-button">自定义内容</button>
            </ds_tooltip>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tooltip placement="bottom"&gt;
  &lt;template #content&gt;
    &lt;div&gt;
      &lt;strong&gt;自定义提示内容&lt;/strong&gt;
      &lt;p&gt;这里可以放置更复杂的内容&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  &lt;button&gt;自定义内容&lt;/button&gt;
&lt;/ds_tooltip&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">文字提示组件的属性、事件和插槽。</p>
      
      <div class="category-card">
        <h3>属性 (Props)</h3>
        
        <table class="api-table">
          <thead>
            <tr>
              <th>属性名</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>content</td>
              <td>提示内容</td>
              <td>String</td>
              <td>''</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>提示位置，可选值：top / right / bottom / left</td>
              <td>String</td>
              <td>top</td>
            </tr>
            <tr>
              <td>theme</td>
              <td>主题，可选值：dark / light</td>
              <td>String</td>
              <td>dark</td>
            </tr>
            <tr>
              <td>showDelay</td>
              <td>显示延迟时间（毫秒）</td>
              <td>Number</td>
              <td>200</td>
            </tr>
            <tr>
              <td>hideDelay</td>
              <td>隐藏延迟时间（毫秒）</td>
              <td>Number</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="category-card">
        <h3>插槽 (Slots)</h3>
        
        <table class="api-table">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>default</td>
              <td>触发提示的元素</td>
            </tr>
            <tr>
              <td>content</td>
              <td>自定义提示内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsTooltip from '../../components/ds_Tooltip.vue';

export default {
  name: 'TooltipDemo',
  components: {
    ds_tooltip: DsTooltip
  }
}
</script>

<style scoped>
.section-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-400) var(--space-200);
}

.description {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-300);
}

.section {
  margin-bottom: var(--space-400);
}

.section-description {
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-200);
}

.category-card {
  padding: var(--space-300);
  background-color: var(--color-bg-subtlest);
  border-radius: var(--radius-medium);
  margin-bottom: var(--space-200);
}

.component-desc {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-200);
}

.demo-block {
  padding: var(--space-300);
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-medium);
  margin-bottom: var(--space-200);
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-400);
}

.justify-content-center {
  justify-content: center;
}

.demo-button {
  background-color: var(--color-brand-default);
  color: var(--color-text-inverse);
  border: none;
  padding: var(--space-100) var(--space-200);
  border-radius: var(--radius-medium);
  cursor: pointer;
  font: var(--font-14-medium);
  transition: background-color 0.2s;
}

.demo-button:hover {
  background-color: var(--color-brand-hover);
}

.code-block {
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-small);
  padding: var(--space-200);
  margin-top: var(--space-200);
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: 'Courier New', monospace;
  font-size: 14px;
  color: var(--color-text-primary);
  background: transparent;
  padding: 0;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: var(--space-200);
}

.api-table th,
.api-table td {
  text-align: left;
  padding: var(--space-100) var(--space-200);
  border-bottom: 1px solid var(--color-stroke-divider);
}

.api-table th {
  font: var(--font-14-semibold);
  color: var(--color-text-primary);
  background-color: var(--color-bg-subtlest);
}

.api-table td {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
}
</style> 