<template>
  <div class="section-page">
    <h1>Checkbox 复选框</h1>
    <p class="description">复选框组件用于在多个选项中选择多个选项。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">复选框有不同的状态和样式。</p>
      
      <div class="category-card">
        <h3>基础复选框</h3>
        <p class="component-desc">基础复选框用于在多个选项中进行多选。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_checkbox v-model="checkbox1">未选中</ds_checkbox>
              <div class="demo-name">未选中状态</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox v-model="checkbox2">已选中</ds_checkbox>
              <div class="demo-name">选中状态</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox 
                v-model="checkbox4"
                :indeterminate="true"
              >半选中</ds_checkbox>
              <div class="demo-name">半选中状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_checkbox v-model="value"&gt;复选框文本&lt;/ds_checkbox&gt;
&lt;ds_checkbox v-model="value" :indeterminate="true"&gt;半选中状态&lt;/ds_checkbox&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>禁用状态</h3>
        <p class="component-desc">复选框在禁用状态下不可交互。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_checkbox disabled>禁用未选中</ds_checkbox>
              <div class="demo-name">禁用未选中</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox v-model="checkbox3" disabled>禁用已选中</ds_checkbox>
              <div class="demo-name">禁用已选中</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox 
                v-model="checkbox5"
                :indeterminate="true"
                disabled
              >禁用半选中</ds_checkbox>
              <div class="demo-name">禁用半选中</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_checkbox disabled&gt;禁用未选中&lt;/ds_checkbox&gt;
&lt;ds_checkbox v-model="checked" disabled&gt;禁用已选中&lt;/ds_checkbox&gt;
&lt;ds_checkbox v-model="checked" :indeterminate="true" disabled&gt;禁用半选中&lt;/ds_checkbox&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>复选框组</h3>
        <p class="component-desc">当复选框下有子复选框时，可以使用半选中状态表示部分选中。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group" style="width: 100%;">
              <ds_checkbox 
                v-model="parentCheckbox"
                :indeterminate="indeterminate"
                @change="handleParentChange"
              >全选</ds_checkbox>
              <div style="margin-left: 24px; margin-top: 8px;">
                <div v-for="(item, index) in childCheckboxes" :key="index" style="margin-top: 8px;">
                  <ds_checkbox 
                    v-model="item.checked"
                    @change="handleChildChange"
                  >{{ item.label || `选项 ${index + 1}` }}</ds_checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_checkbox 
  v-model="parentCheckbox"
  :indeterminate="indeterminate"
  @change="handleParentChange"
&gt;全选&lt;/ds_checkbox&gt;

&lt;div v-for="(item, index) in childCheckboxes" :key="index"&gt;
  &lt;ds_checkbox 
    v-model="item.checked"
    @change="handleChildChange"
  &gt;选项{{ index + 1 }}&lt;/ds_checkbox&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>

      <div class="category-card">
        <h3>颜色变体</h3>
        <p class="component-desc">复选框可以使用不同颜色，如品牌蓝色。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_checkbox v-model="checkbox6">默认颜色</ds_checkbox>
              <div class="demo-name">默认颜色</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox v-model="checkbox7" is-primary>品牌蓝色</ds_checkbox>
              <div class="demo-name">品牌蓝色</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox 
                v-model="checkbox8"
                :indeterminate="true"
                is-primary
              >品牌蓝色半选</ds_checkbox>
              <div class="demo-name">品牌蓝色半选</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_checkbox v-model="value"&gt;默认颜色&lt;/ds_checkbox&gt;
&lt;ds_checkbox v-model="value" is-primary&gt;品牌蓝色&lt;/ds_checkbox&gt;
&lt;ds_checkbox v-model="value" :indeterminate="true" is-primary&gt;品牌蓝色半选&lt;/ds_checkbox&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>尺寸</h2>
      <p class="section-description">复选框提供不同的尺寸以适应不同场景。</p>
      
      <div class="category-card">
        <h3>不同尺寸</h3>
        <p class="component-desc">小型、中型复选框</p>
        
        <div class="demo-block">
          <div class="demo-row align-items-center">
            <div class="demo-group">
              <ds_checkbox size="small">小型复选框</ds_checkbox>
              <div class="demo-name">小型 (Small)</div>
            </div>
            
            <div class="demo-group">
              <ds_checkbox>默认复选框</ds_checkbox>
              <div class="demo-name">中型 (Medium) - 默认</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_checkbox size="small"&gt;小型复选框&lt;/ds_checkbox&gt;
&lt;ds_checkbox&gt;默认复选框&lt;/ds_checkbox&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">复选框组件的属性、事件和插槽。</p>
      
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
              <td>indeterminate</td>
              <td>是否为半选状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>size</td>
              <td>复选框尺寸，可选值：small / medium</td>
              <td>String</td>
              <td>medium</td>
            </tr>
            <tr>
              <td>isPrimary</td>
              <td>是否使用品牌蓝色样式</td>
              <td>Boolean</td>
              <td>false</td>
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
              <td>复选框标签内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsCheckbox from '../../components/ds_Checkbox.vue';

export default {
  name: 'CheckboxDemo',
  components: {
    ds_checkbox: DsCheckbox
  },
  data() {
    return {
      checkbox1: false,
      checkbox2: true,
      checkbox3: true,
      checkbox4: true,
      checkbox5: true,
      checkbox6: true,
      checkbox7: true,
      checkbox8: true,
      parentCheckbox: false,
      indeterminate: false,
      childCheckboxes: [
        { label: '选项 1', checked: false },
        { label: '选项 2', checked: false },
        { label: '选项 3', checked: false }
      ]
    };
  },
  created() {
    // 确保所有复选框都有label属性
    this.childCheckboxes = this.childCheckboxes.map((item, index) => {
      if (!item.label) {
        return { ...item, label: `选项 ${index + 1}` };
      }
      return item;
    });
  },
  methods: {
    // 处理全选复选框变化
    handleParentChange(val) {
      this.childCheckboxes.forEach(item => {
        item.checked = val;
      });
      this.indeterminate = false;
    },
    // 处理子复选框变化
    handleChildChange() {
      const checkedCount = this.childCheckboxes.filter(item => item.checked).length;
      this.parentCheckbox = checkedCount === this.childCheckboxes.length;
      this.indeterminate = checkedCount > 0 && checkedCount < this.childCheckboxes.length;
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

</style>
