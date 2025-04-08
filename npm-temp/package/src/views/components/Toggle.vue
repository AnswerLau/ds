<template>
  <div class="section-page">
    <h1>Toggle</h1>
    <p class="description">开关组件用于切换某个功能的开启/关闭状态。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">开关有不同的状态和样式。</p>
      
      <div class="category-card">
        <h3>基础开关</h3>
        <p class="component-desc">基础开关用于切换某个功能的状态。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_toggle v-model="toggle1">开关状态: {{ toggle1 ? '开启' : '关闭' }}</ds_toggle>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_toggle v-model="toggle"&gt;开关状态: {{ toggle ? '开启' : '关闭' }}&lt;/ds_toggle&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>禁用状态</h3>
        <p class="component-desc">禁用状态的开关不可点击。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_toggle :model-value="false" disabled>禁用关闭状态</ds_toggle>
              <ds_toggle :model-value="true" disabled>禁用开启状态</ds_toggle>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_toggle :model-value="false" disabled&gt;禁用关闭状态&lt;/ds_toggle&gt;
&lt;ds_toggle :model-value="true" disabled&gt;禁用开启状态&lt;/ds_toggle&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>尺寸</h2>
      <p class="section-description">开关提供不同的尺寸以适应不同场景。</p>
      
      <div class="category-card">
        <h3>不同尺寸</h3>
        <p class="component-desc">小型、中型、大型开关</p>
        
        <div class="demo-block">
          <div class="demo-row align-items-center">
            <div class="demo-group" style="gap: var(--space-200);">
              <ds_toggle v-model="toggle2" size="small">小型开关</ds_toggle>
              <ds_toggle v-model="toggle2">中型开关（默认）</ds_toggle>
              <ds_toggle v-model="toggle2" size="large">大型开关</ds_toggle>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_toggle v-model="toggle" size="small"&gt;小型开关&lt;/ds_toggle&gt;
&lt;ds_toggle v-model="toggle"&gt;中型开关（默认）&lt;/ds_toggle&gt;
&lt;ds_toggle v-model="toggle" size="large"&gt;大型开关&lt;/ds_toggle&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">开关组件的属性、事件和插槽。</p>
      
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
              <td>modelValue</td>
              <td>绑定值</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>开关尺寸</td>
              <td>String</td>
              <td>medium</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="category-card">
        <h3>事件 (Events)</h3>
        
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>update:modelValue</td>
              <td>状态变更时触发</td>
              <td>(value: boolean)</td>
            </tr>
            <tr>
              <td>change</td>
              <td>状态变更时触发</td>
              <td>(value: boolean)</td>
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
              <td>开关标签内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsToggle from '../../components/ds_Toggle.vue';

export default {
  name: 'ToggleDemo',
  components: {
    ds_toggle: DsToggle
  },
  data() {
    return {
      toggle1: false,
      toggle2: true
    };
  }
}
</script>

<style scoped>

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

.align-items-center {
  align-items: center;
}

.demo-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-100);
  min-width: 150px;
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