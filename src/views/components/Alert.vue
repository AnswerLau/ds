<template>
  <div class="section-page">
    <h1>Alert</h1>
    <p class="description">警告提示组件用于展示提示信息，有不同的类型和样式。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">警告提示有不同的类型。</p>
      
      <div class="category-card">
        <h3>基础警告提示</h3>
        <p class="component-desc">基础的警告提示，有四种不同的类型。</p>
        
        <div class="demo-block">
          <ds_alert type="info">这是一条信息提示</ds_alert>
          <ds_alert type="success">这是一条成功提示</ds_alert>
          <ds_alert type="warning">这是一条警告提示</ds_alert>
          <ds_alert type="error">这是一条错误提示</ds_alert>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_alert type="info"&gt;这是一条信息提示&lt;/ds_alert&gt;
&lt;ds_alert type="success"&gt;这是一条成功提示&lt;/ds_alert&gt;
&lt;ds_alert type="warning"&gt;这是一条警告提示&lt;/ds_alert&gt;
&lt;ds_alert type="error"&gt;这是一条错误提示&lt;/ds_alert&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>带标题的警告提示</h3>
        <p class="component-desc">可以设置标题，让信息更加明确。</p>
        
        <div class="demo-block">
          <ds_alert type="info" title="信息提示">这是一条带有标题的信息提示</ds_alert>
          <ds_alert type="success" title="成功提示">这是一条带有标题的成功提示</ds_alert>
          <ds_alert type="warning" title="警告提示">这是一条带有标题的警告提示</ds_alert>
          <ds_alert type="error" title="错误提示">这是一条带有标题的错误提示</ds_alert>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_alert type="info" title="信息提示"&gt;这是一条带有标题的信息提示&lt;/ds_alert&gt;
&lt;ds_alert type="success" title="成功提示"&gt;这是一条带有标题的成功提示&lt;/ds_alert&gt;
&lt;ds_alert type="warning" title="警告提示"&gt;这是一条带有标题的警告提示&lt;/ds_alert&gt;
&lt;ds_alert type="error" title="错误提示"&gt;这是一条带有标题的错误提示&lt;/ds_alert&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>带图标的警告提示</h3>
        <p class="component-desc">添加图标使得信息更加醒目。</p>
        
        <div class="demo-block">
          <ds_alert type="info" show-icon>这是一条带有图标的信息提示</ds_alert>
          <ds_alert type="success" show-icon>这是一条带有图标的成功提示</ds_alert>
          <ds_alert type="warning" show-icon>这是一条带有图标的警告提示</ds_alert>
          <ds_alert type="error" show-icon>这是一条带有图标的错误提示</ds_alert>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_alert type="info" show-icon&gt;这是一条带有图标的信息提示&lt;/ds_alert&gt;
&lt;ds_alert type="success" show-icon&gt;这是一条带有图标的成功提示&lt;/ds_alert&gt;
&lt;ds_alert type="warning" show-icon&gt;这是一条带有图标的警告提示&lt;/ds_alert&gt;
&lt;ds_alert type="error" show-icon&gt;这是一条带有图标的错误提示&lt;/ds_alert&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>可关闭的警告提示</h3>
        <p class="component-desc">可以通过关闭按钮关闭警告提示。</p>
        
        <div class="demo-block">
          <ds_alert 
            v-if="showAlert1" 
            type="info" 
            closable
            @close="showAlert1 = false"
          >这是一条可关闭的信息提示</ds_alert>
          
          <ds_alert 
            v-if="showAlert2" 
            type="success" 
            show-icon
            closable
            @close="showAlert2 = false"
          >这是一条带图标且可关闭的成功提示</ds_alert>
          
          <button 
            v-if="!showAlert1 || !showAlert2" 
            class="reset-button"
            @click="resetAlerts"
          >重置警告提示</button>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_alert 
  type="info" 
  closable
  @close="handleClose"
&gt;这是一条可关闭的信息提示&lt;/ds_alert&gt;

&lt;ds_alert 
  type="success" 
  show-icon
  closable
  @close="handleClose"
&gt;这是一条带图标且可关闭的成功提示&lt;/ds_alert&gt;</code></pre>
        </div>
      </div>
      
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">警告提示组件的属性、事件和插槽。</p>
      
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
              <td>title</td>
              <td>标题</td>
              <td>String</td>
              <td>''</td>
            </tr>
            <tr>
              <td>type</td>
              <td>类型，可选值：info / success / warning / error</td>
              <td>String</td>
              <td>info</td>
            </tr>
            <tr>
              <td>showIcon</td>
              <td>是否显示图标</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否可关闭</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>iconSize</td>
              <td>图标尺寸</td>
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
              <td>close</td>
              <td>关闭 Alert 时触发</td>
              <td>-</td>
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
              <td>警告提示的内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsAlert from '../../components/ds_Alert.vue';

export default {
  name: 'AlertDemo',
  components: {
    ds_alert: DsAlert
  },
  data() {
    return {
      showAlert1: true,
      showAlert2: true
    };
  },
  methods: {
    resetAlerts() {
      this.showAlert1 = true;
      this.showAlert2 = true;
    }
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

.reset-button {
  background-color: var(--color-brand-default);
  color: var(--color-text-inverse);
  border: none;
  padding: var(--space-100) var(--space-200);
  border-radius: var(--radius-medium);
  cursor: pointer;
  font: var(--font-14-medium);
  transition: background-color 0.2s;
}

.reset-button:hover {
  background-color: var(--color-brand-hover);
}
</style> 