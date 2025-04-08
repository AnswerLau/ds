<template>
  <div class="section-page">
    <h1>Select</h1>
    <p class="description">选择器组件用于在多个选项中选择一个选项。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">选择器有不同的状态和样式。</p>
      
      <div class="category-card">
        <h3>基础选择器</h3>
        <p class="component-desc">基础选择器用于在多个选项中进行单选。</p>
        
        
          <div class="demo-row">
            <ds_select 
              v-model="selectedValue1" 
              :options="options"
              placeholder="请选择一个选项"
              style="width: 300px;"
              icon-left="arrow-down"
            />
          </div>
          <div class="demo-name">当前选中值: {{ selectedValue1 }}</div>
       
        
        <div class="code-block">
          <pre><code>&lt;ds_select 
  v-model="selectedValue" 
  :options="options"
  placeholder="请选择一个选项"
/&gt;

// options 数据结构
[
  { value: 'option1', label: '选项一' },
  { value: 'option2', label: '选项二' },
  { value: 'option3', label: '选项三' }
]</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>禁用状态</h3>
        <p class="component-desc">禁用状态的选择器不可点击。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_select 
              v-model="selectedValue2" 
              :options="options"
              disabled
              placeholder="禁用状态"
              style="width: 300px;"
            />
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_select 
  v-model="selectedValue" 
  :options="options"
  disabled
  placeholder="禁用状态"
/&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>尺寸</h2>
      <p class="section-description">选择器提供不同的尺寸以适应不同场景。</p>
      
      <div class="category-card">
        <h3>不同尺寸</h3>
        <p class="component-desc">小型、中型、大型选择器</p>
        
        <div class="demo-block">
          <div class="demo-row align-items-center">
            <div class="demo-group" style="gap: var(--space-200); width: 100%;">
              <ds_select 
                v-model="selectedValue3" 
                :options="options"
                size="small"
                placeholder="小型选择器"
              />
              <ds_select 
                v-model="selectedValue3" 
                :options="options"
                placeholder="中型选择器（默认）"
              />
              <ds_select 
                v-model="selectedValue3" 
                :options="options"
                size="large"
                placeholder="大型选择器"
              />
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_select 
  v-model="selectedValue" 
  :options="options"
  size="small"
  placeholder="小型选择器"
/&gt;

&lt;ds_select 
  v-model="selectedValue" 
  :options="options"
  placeholder="中型选择器（默认）"
/&gt;

&lt;ds_select 
  v-model="selectedValue" 
  :options="options"
  size="large"
  placeholder="大型选择器"
/&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>带图标的选择器</h2>
      <p class="section-description">选择器可以包含图标。</p>
      
      <div class="category-card">
        <h3>带图标的选项</h3>
        <p class="component-desc">选项可以包含图标，使选择器更加直观。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_select 
              v-model="selectedValue4" 
              :options="iconOptions"
              placeholder="请选择一个选项"
              style="width: 300px;"
            />
          </div>
          <div class="demo-name">当前选中值: {{ selectedValue4 }}</div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_select 
  v-model="selectedValue" 
  :options="iconOptions"
  placeholder="请选择一个选项"
/&gt;

// iconOptions 数据结构
[
  { value: 'message', label: '消息', icon: 'message' },
  { value: 'settings', label: '设置', icon: 'settings' },
  { value: 'user', label: '用户', icon: 'user' }
]</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">选择器组件的属性、事件和插槽。</p>
      
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
              <td>String, Number, Boolean, Object</td>
              <td>''</td>
            </tr>
            <tr>
              <td>options</td>
              <td>选项数组，每项需包含 label 和 value 属性</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>占位文本</td>
              <td>String</td>
              <td>'请选择'</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>选择器尺寸，可选值：small / medium / large</td>
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
              <td>选项变更时触发</td>
              <td>(value: string | number | boolean | object)</td>
            </tr>
            <tr>
              <td>change</td>
              <td>选项变更时触发</td>
              <td>(value: string | number | boolean | object)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsSelect from '../../components/ds_Select.vue';


export default {
  name: 'SelectDemo',
  components: {
    ds_select: DsSelect
  },
  data() {
    return {
      selectedValue1: '',
      selectedValue2: '',
      selectedValue3: '',
      selectedValue4: '',
      options: [
        { value: 'option1', label: '选项一' },
        { value: 'option2', label: '选项二' },
        { value: 'option3', label: '选项三' },
        { value: 'option4', label: '选项四' },
        { value: 'option5', label: '选项五' }
      ],
      iconOptions: [
        { value: 'message', label: '消息', icon: 'message' },
        { value: 'settings', label: '设置', icon: 'settings' },
        { value: 'user', label: '用户', icon: 'user' },
        { value: 'bell', label: '通知', icon: 'bell' },
        { value: 'home', label: '主页', icon: 'home' }
      ]
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