<template>
  <div class="section-page">
    <h1>Radio</h1>
    <p class="description">单选框组件用于在多个选项中选择一个选项。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">单选框有不同的状态和样式。</p>
      
      <div class="category-card">
        <h3>基础单选框</h3>
        <p class="component-desc">基础单选框用于在多个选项中进行单选。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_radio v-model="radio1" label="1">选项一</ds_radio>
              <ds_radio v-model="radio1" label="2">选项二</ds_radio>
              <ds_radio v-model="radio1" label="3">选项三</ds_radio>
            </div>
          </div>
          <div class="demo-name">当前选中值: {{ radio1 }}</div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_radio v-model="radio" label="1"&gt;选项一&lt;/ds_radio&gt;
&lt;ds_radio v-model="radio" label="2"&gt;选项二&lt;/ds_radio&gt;
&lt;ds_radio v-model="radio" label="3"&gt;选项三&lt;/ds_radio&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>禁用状态</h3>
        <p class="component-desc">禁用状态的单选框不可点击。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_radio v-model="radio2" label="1" disabled>禁用未选中</ds_radio>
              <ds_radio v-model="radio2" label="2" disabled>禁用已选中</ds_radio>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_radio v-model="radio" label="1" disabled&gt;禁用未选中&lt;/ds_radio&gt;
&lt;ds_radio v-model="radio" label="2" disabled&gt;禁用已选中&lt;/ds_radio&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>尺寸</h2>
      <p class="section-description">单选框提供不同的尺寸以适应不同场景。</p>
      
      <div class="category-card">
        <h3>不同尺寸</h3>
        <p class="component-desc">小型、中型、大型单选框</p>
        
        <div class="demo-block">
          <div class="demo-row align-items-center">
            <div class="demo-group" style="gap: var(--space-200);">
              <ds_radio v-model="radio3" label="small" size="small">小型单选框</ds_radio>
              <ds_radio v-model="radio3" label="medium">中型单选框（默认）</ds_radio>
              <ds_radio v-model="radio3" label="large" size="large">大型单选框</ds_radio>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_radio v-model="radio" label="small" size="small"&gt;小型单选框&lt;/ds_radio&gt;
&lt;ds_radio v-model="radio" label="medium"&gt;中型单选框（默认）&lt;/ds_radio&gt;
&lt;ds_radio v-model="radio" label="large" size="large"&gt;大型单选框&lt;/ds_radio&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">单选框组件的属性、事件和插槽。</p>
      
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
              <td>String, Number, Boolean</td>
              <td>''</td>
            </tr>
            <tr>
              <td>label</td>
              <td>单选框的值</td>
              <td>String, Number, Boolean</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>单选框尺寸</td>
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
              <td>(value: string | number | boolean)</td>
            </tr>
            <tr>
              <td>change</td>
              <td>状态变更时触发</td>
              <td>(value: string | number | boolean)</td>
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
              <td>单选框标签内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsRadio from '../../components/ds_Radio.vue';

export default {
  name: 'RadioDemo',
  components: {
    ds_radio: DsRadio
  },
  data() {
    return {
      radio1: '1',
      radio2: '2',
      radio3: 'medium'
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
  background-color: var(--color-bg-subtlest);
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

.demo-name {
  font: var(--font-12-regular);
  color: var(--color-text-tertiary);
  margin-top: var(--space-100);
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