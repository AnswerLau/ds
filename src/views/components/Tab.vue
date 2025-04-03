<template>
  <div class="section-page">
    <h1>Tab</h1>
    <p class="description">标签页组件用于在不同内容区域之间进行切换。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">标签页有不同的类型和样式。</p>
      
      <div class="category-card">
        <h3>基础标签页</h3>
        <p class="component-desc">基础的标签页，提供了基本的内容分组功能。</p>
        
        <div class="demo-block">
          <ds_tab 
            v-model="activeTab1" 
            :tabs="tabs"
          >
            <div v-if="activeTab1 === 'tab1'" class="tab-content-demo">标签一的内容</div>
            <div v-if="activeTab1 === 'tab2'" class="tab-content-demo">标签二的内容</div>
            <div v-if="activeTab1 === 'tab3'" class="tab-content-demo">标签三的内容</div>
          </ds_tab>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tab 
  v-model="activeTab" 
  :tabs="tabs"
&gt;
  &lt;div v-if="activeTab === 'tab1'"&gt;标签一的内容&lt;/div&gt;
  &lt;div v-if="activeTab === 'tab2'"&gt;标签二的内容&lt;/div&gt;
  &lt;div v-if="activeTab === 'tab3'"&gt;标签三的内容&lt;/div&gt;
&lt;/ds_tab&gt;

// tabs 数据结构
[
  { name: 'tab1', label: '标签一' },
  { name: 'tab2', label: '标签二' },
  { name: 'tab3', label: '标签三' }
]</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>卡片式标签页</h3>
        <p class="component-desc">卡片式的标签页，具有卡片外观。</p>
        
        <div class="demo-block">
          <ds_tab 
            v-model="activeTab2" 
            :tabs="tabs"
            type="card"
          >
            <div v-if="activeTab2 === 'tab1'" class="tab-content-demo">标签一的内容</div>
            <div v-if="activeTab2 === 'tab2'" class="tab-content-demo">标签二的内容</div>
            <div v-if="activeTab2 === 'tab3'" class="tab-content-demo">标签三的内容</div>
          </ds_tab>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tab 
  v-model="activeTab" 
  :tabs="tabs"
  type="card"
&gt;
  &lt;div v-if="activeTab === 'tab1'"&gt;标签一的内容&lt;/div&gt;
  &lt;div v-if="activeTab === 'tab2'"&gt;标签二的内容&lt;/div&gt;
  &lt;div v-if="activeTab === 'tab3'"&gt;标签三的内容&lt;/div&gt;
&lt;/ds_tab&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>标签页位置</h2>
      <p class="section-description">标签页可以出现在内容区域的不同位置。</p>
      
      <div class="category-card">
        <h3>不同位置</h3>
        <p class="component-desc">顶部、右侧、底部、左侧</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-position-group">
              <h4>顶部（默认）</h4>
              <ds_tab 
                v-model="activeTab3" 
                :tabs="shortTabs"
                position="top"
              >
                <div v-if="activeTab3 === 'tab1'" class="tab-content-demo">内容区域</div>
                <div v-if="activeTab3 === 'tab2'" class="tab-content-demo">内容区域</div>
              </ds_tab>
            </div>
            
            <div class="demo-position-group">
              <h4>右侧</h4>
              <ds_tab 
                v-model="activeTab4" 
                :tabs="shortTabs"
                position="right"
              >
                <div v-if="activeTab4 === 'tab1'" class="tab-content-demo">内容区域</div>
                <div v-if="activeTab4 === 'tab2'" class="tab-content-demo">内容区域</div>
              </ds_tab>
            </div>
          </div>
          
          <div class="demo-row">
            <div class="demo-position-group">
              <h4>底部</h4>
              <ds_tab 
                v-model="activeTab5" 
                :tabs="shortTabs"
                position="bottom"
              >
                <div v-if="activeTab5 === 'tab1'" class="tab-content-demo">内容区域</div>
                <div v-if="activeTab5 === 'tab2'" class="tab-content-demo">内容区域</div>
              </ds_tab>
            </div>
            
            <div class="demo-position-group">
              <h4>左侧</h4>
              <ds_tab 
                v-model="activeTab6" 
                :tabs="shortTabs"
                position="left"
              >
                <div v-if="activeTab6 === 'tab1'" class="tab-content-demo">内容区域</div>
                <div v-if="activeTab6 === 'tab2'" class="tab-content-demo">内容区域</div>
              </ds_tab>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tab 
  v-model="activeTab" 
  :tabs="tabs"
  position="top"
&gt;
  ...
&lt;/ds_tab&gt;

&lt;ds_tab 
  v-model="activeTab" 
  :tabs="tabs"
  position="right"
&gt;
  ...
&lt;/ds_tab&gt;

&lt;ds_tab 
  v-model="activeTab" 
  :tabs="tabs"
  position="bottom"
&gt;
  ...
&lt;/ds_tab&gt;

&lt;ds_tab 
  v-model="activeTab" 
  :tabs="tabs"
  position="left"
&gt;
  ...
&lt;/ds_tab&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>带图标的标签页</h2>
      <p class="section-description">标签页可以包含图标。</p>
      
      <div class="category-card">
        <h3>图标标签页</h3>
        <p class="component-desc">带有图标的标签页。</p>
        
        <div class="demo-block">
          <ds_tab 
            v-model="activeTab7" 
            :tabs="iconTabs"
          >
            <div v-if="activeTab7 === 'tab1'" class="tab-content-demo">消息内容</div>
            <div v-if="activeTab7 === 'tab2'" class="tab-content-demo">设置内容</div>
            <div v-if="activeTab7 === 'tab3'" class="tab-content-demo">用户资料</div>
          </ds_tab>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tab 
  v-model="activeTab" 
  :tabs="iconTabs"
&gt;
  ...
&lt;/ds_tab&gt;

// iconTabs 数据结构
[
  { name: 'tab1', label: '消息', icon: 'message' },
  { name: 'tab2', label: '设置', icon: 'settings' },
  { name: 'tab3', label: '用户', icon: 'user' }
]</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>禁用标签</h2>
      <p class="section-description">标签可以被禁用。</p>
      
      <div class="category-card">
        <h3>禁用状态</h3>
        <p class="component-desc">禁用的标签不可点击。</p>
        
        <div class="demo-block">
          <ds_tab 
            v-model="activeTab8" 
            :tabs="disabledTabs"
          >
            <div v-if="activeTab8 === 'tab1'" class="tab-content-demo">标签一的内容</div>
            <div v-if="activeTab8 === 'tab2'" class="tab-content-demo">标签二的内容</div>
            <div v-if="activeTab8 === 'tab3'" class="tab-content-demo">标签三的内容</div>
          </ds_tab>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_tab 
  v-model="activeTab" 
  :tabs="disabledTabs"
&gt;
  ...
&lt;/ds_tab&gt;

// disabledTabs 数据结构
[
  { name: 'tab1', label: '标签一' },
  { name: 'tab2', label: '标签二', disabled: true },
  { name: 'tab3', label: '标签三' }
]</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">标签页组件的属性、事件和插槽。</p>
      
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
              <td>绑定值，当前激活的标签页</td>
              <td>String, Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>tabs</td>
              <td>标签页配置数组，每项需包含 name 和 label 属性</td>
              <td>Array</td>
              <td>[]</td>
            </tr>
            <tr>
              <td>type</td>
              <td>标签页类型，可选值：line / card</td>
              <td>String</td>
              <td>line</td>
            </tr>
            <tr>
              <td>position</td>
              <td>标签页位置，可选值：top / right / bottom / left</td>
              <td>String</td>
              <td>top</td>
            </tr>
            <tr>
              <td>iconSize</td>
              <td>图标尺寸</td>
              <td>String</td>
              <td>small</td>
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
              <td>标签页切换时触发</td>
              <td>(name: string | number)</td>
            </tr>
            <tr>
              <td>tab-click</td>
              <td>标签页被点击时触发</td>
              <td>(tab: object)</td>
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
              <td>标签页内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsTab from '../../components/ds_Tab.vue';

export default {
  name: 'TabDemo',
  components: {
    ds_tab: DsTab
  },
  data() {
    return {
      activeTab1: 'tab1',
      activeTab2: 'tab1',
      activeTab3: 'tab1',
      activeTab4: 'tab1',
      activeTab5: 'tab1',
      activeTab6: 'tab1',
      activeTab7: 'tab1',
      activeTab8: 'tab1',
      tabs: [
        { name: 'tab1', label: '标签一' },
        { name: 'tab2', label: '标签二' },
        { name: 'tab3', label: '标签三' }
      ],
      shortTabs: [
        { name: 'tab1', label: '标签一' },
        { name: 'tab2', label: '标签二' }
      ],
      iconTabs: [
        { name: 'tab1', label: '消息', icon: 'message' },
        { name: 'tab2', label: '设置', icon: 'settings' },
        { name: 'tab3', label: '用户', icon: 'user' }
      ],
      disabledTabs: [
        { name: 'tab1', label: '标签一' },
        { name: 'tab2', label: '标签二', disabled: true },
        { name: 'tab3', label: '标签三' }
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
  margin-bottom: var(--space-300);
}

.demo-position-group {
  flex: 1;
  min-width: 300px;
}

.demo-position-group h4 {
  margin-top: 0;
  margin-bottom: var(--space-100);
  font: var(--font-14-medium);
  color: var(--color-text-secondary);
}

.tab-content-demo {
  padding: var(--space-200);
  background-color: var(--color-bg-subtlest);
  border-radius: var(--radius-small);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
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