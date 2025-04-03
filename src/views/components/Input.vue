<template>
  <div class="section-page">
    <h1>Input</h1>
    <p class="description">输入框组件用于接收用户的文本输入，支持多种类型和状态。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">输入框有不同的尺寸和状态。</p>
      
      <div class="category-card">
        <h3>默认输入框</h3>
        <p class="component-desc">基础输入框用于收集用户输入的文本信息。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_input placeholder="请输入内容" v-model="inputValue1" />
              <div class="demo-name">默认状态</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="请输入内容" class="input-hover" />
              <div class="demo-name">悬停状态</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="请输入内容" class="input-focus" />
              <div class="demo-name">聚焦状态</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="请输入内容" disabled />
              <div class="demo-name">禁用状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_input placeholder="请输入内容" v-model="value" /&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>带有图标的输入框</h3>
        <p class="component-desc">可以在输入框内添加图标以提示用户输入的内容类型。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_input placeholder="搜索内容" prefix="search" />
              <div class="demo-name">搜索图标（前缀）</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="选择日期" suffix="calendar" />
              <div class="demo-name">日历图标（后缀）</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="可清除内容" v-model="inputValue2" clearable />
              <div class="demo-name">可清除</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_input placeholder="搜索内容" prefix="search" /&gt;
&lt;ds_input placeholder="选择日期" suffix="calendar" /&gt;
&lt;ds_input placeholder="可清除内容" v-model="value" clearable /&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>输入框尺寸</h2>
      <p class="section-description">输入框提供小、中、大三种尺寸，以适应不同的界面空间。</p>
      
      <div class="category-card">
        <h3>尺寸展示</h3>
        <p class="component-desc">小型(24px高)、中型(32px高)、大型(40px高)</p>
        
        <div class="demo-block">
          <div class="demo-row align-items-center">
            <div class="demo-group">
              <ds_input placeholder="小型输入框" size="small" />
              <div class="demo-name">小型 (Small)</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="中型输入框" />
              <div class="demo-name">中型 (Medium) - 默认</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="大型输入框" size="large" />
              <div class="demo-name">大型 (Large)</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_input placeholder="小型输入框" size="small" /&gt;
&lt;ds_input placeholder="中型输入框" /&gt;
&lt;ds_input placeholder="大型输入框" size="large" /&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>输入框状态</h2>
      <p class="section-description">输入框具有不同的状态，包括错误、只读等。</p>
      
      <div class="category-card">
        <h3>不同状态</h3>
        <p class="component-desc">错误提示、只读模式等特殊状态</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group">
              <ds_input placeholder="错误状态" value="错误内容" error />
              <div class="demo-name">错误状态</div>
            </div>
            
            <div class="demo-group">
              <ds_input placeholder="只读状态" value="只读内容" readonly />
              <div class="demo-name">只读状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_input placeholder="错误状态" value="错误内容" error /&gt;
&lt;ds_input placeholder="只读状态" value="只读内容" readonly /&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>字数限制</h2>
      <p class="section-description">可以设置最大输入字符数并显示字数统计。</p>
      
      <div class="category-card">
        <h3>字数限制</h3>
        <p class="component-desc">限制最大输入长度并显示当前字数</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <div class="demo-group" style="width: 300px">
              <ds_input 
                placeholder="最多输入50个字符" 
                v-model="inputValue3" 
                maxlength="50" 
                show-word-limit 
              />
              <div class="demo-name">字数限制</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_input
  placeholder="最多输入50个字符"
  v-model="value"
  maxlength="50"
  show-word-limit
/&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">输入框组件的属性、事件和插槽。</p>
      
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
              <td>String, Number</td>
              <td>''</td>
            </tr>
            <tr>
              <td>type</td>
              <td>输入框类型</td>
              <td>String</td>
              <td>text</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>占位文本</td>
              <td>String</td>
              <td>请输入内容</td>
            </tr>
            <tr>
              <td>size</td>
              <td>输入框尺寸</td>
              <td>String</td>
              <td>medium</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>是否只读</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>是否可清除</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>error</td>
              <td>是否为错误状态</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>最大输入长度</td>
              <td>Number</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showWordLimit</td>
              <td>是否显示字数限制</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>prefix</td>
              <td>前缀图标</td>
              <td>String</td>
              <td>-</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>后缀图标</td>
              <td>String</td>
              <td>-</td>
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
              <td>当输入值变化时触发</td>
              <td>(value: string | number)</td>
            </tr>
            <tr>
              <td>input</td>
              <td>输入值变化时触发</td>
              <td>(event: Event)</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>获得焦点时触发</td>
              <td>(event: FocusEvent)</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>失去焦点时触发</td>
              <td>(event: FocusEvent)</td>
            </tr>
            <tr>
              <td>change</td>
              <td>值变化时触发</td>
              <td>(event: Event)</td>
            </tr>
            <tr>
              <td>clear</td>
              <td>点击清除按钮时触发</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="category-card">
        <h3>方法 (Methods)</h3>
        
        <table class="api-table">
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
              <th>参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>focus</td>
              <td>使输入框获得焦点</td>
              <td>-</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>使输入框失去焦点</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsInput from '../../components/ds_Input.vue';

export default {
  name: 'InputDemo',
  components: {
    ds_input: DsInput
  },
  data() {
    return {
      inputValue1: '',
      inputValue2: '',
      inputValue3: ''
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
  min-width: 200px;
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

/* 模拟悬停和聚焦状态 */
.input-hover .input-wrapper {
  border-color: var(--color-stroke-active);
}

.input-focus .input-wrapper {
  border-color: var(--color-brand-default);
  box-shadow: 0 0 0 2px var(--blue-alpha-100);
}
</style> 