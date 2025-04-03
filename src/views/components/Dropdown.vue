<template>
  <div class="section-page">
    <h1>Dropdown</h1>
    <p class="description">下拉菜单组件用于显示链接列表等临时内容。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">下拉菜单有不同的触发方式和位置。</p>
      
      <div class="category-card">
        <h3>基础下拉菜单</h3>
        <p class="component-desc">基础的下拉菜单，点击触发。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_dropdown>
              <template #trigger>
                <button class="demo-button">点击触发</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">菜单项 1</div>
                <div class="dropdown-item">菜单项 2</div>
                <div class="dropdown-item">菜单项 3</div>
              </div>
            </ds_dropdown>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_dropdown&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;点击触发&lt;/button&gt;
  &lt;/template&gt;
  &lt;div class="dropdown-menu"&gt;
    &lt;div class="dropdown-item"&gt;菜单项 1&lt;/div&gt;
    &lt;div class="dropdown-item"&gt;菜单项 2&lt;/div&gt;
    &lt;div class="dropdown-item"&gt;菜单项 3&lt;/div&gt;
  &lt;/div&gt;
&lt;/ds_dropdown&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>悬停触发</h3>
        <p class="component-desc">鼠标悬停时触发下拉菜单。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_dropdown trigger="hover">
              <template #trigger>
                <button class="demo-button">悬停触发</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">菜单项 1</div>
                <div class="dropdown-item">菜单项 2</div>
                <div class="dropdown-item">菜单项 3</div>
              </div>
            </ds_dropdown>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_dropdown trigger="hover"&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;悬停触发&lt;/button&gt;
  &lt;/template&gt;
  &lt;div class="dropdown-menu"&gt;
    &lt;div class="dropdown-item"&gt;菜单项 1&lt;/div&gt;
    &lt;div class="dropdown-item"&gt;菜单项 2&lt;/div&gt;
    &lt;div class="dropdown-item"&gt;菜单项 3&lt;/div&gt;
  &lt;/div&gt;
&lt;/ds_dropdown&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>下拉菜单位置</h2>
      <p class="section-description">下拉菜单可以出现在触发元素的不同位置。</p>
      
      <div class="category-card">
        <h3>不同位置</h3>
        <p class="component-desc">顶部、右侧、底部、左侧</p>
        
        <div class="demo-block">
          <div class="demo-row justify-content-center">
            <ds_dropdown placement="top">
              <template #trigger>
                <button class="demo-button">上方</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">菜单项 1</div>
                <div class="dropdown-item">菜单项 2</div>
              </div>
            </ds_dropdown>
            
            <ds_dropdown placement="right">
              <template #trigger>
                <button class="demo-button">右侧</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">菜单项 1</div>
                <div class="dropdown-item">菜单项 2</div>
              </div>
            </ds_dropdown>
            
            <ds_dropdown placement="bottom">
              <template #trigger>
                <button class="demo-button">下方</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">菜单项 1</div>
                <div class="dropdown-item">菜单项 2</div>
              </div>
            </ds_dropdown>
            
            <ds_dropdown placement="left">
              <template #trigger>
                <button class="demo-button">左侧</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">菜单项 1</div>
                <div class="dropdown-item">菜单项 2</div>
              </div>
            </ds_dropdown>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_dropdown placement="top"&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;上方&lt;/button&gt;
  &lt;/template&gt;
  ...
&lt;/ds_dropdown&gt;

&lt;ds_dropdown placement="right"&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;右侧&lt;/button&gt;
  &lt;/template&gt;
  ...
&lt;/ds_dropdown&gt;

&lt;ds_dropdown placement="bottom"&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;下方&lt;/button&gt;
  &lt;/template&gt;
  ...
&lt;/ds_dropdown&gt;

&lt;ds_dropdown placement="left"&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;左侧&lt;/button&gt;
  &lt;/template&gt;
  ...
&lt;/ds_dropdown&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>自定义内容</h2>
      <p class="section-description">下拉菜单可以包含复杂的内容结构。</p>
      
      <div class="category-card">
        <h3>带分割线和禁用项</h3>
        <p class="component-desc">下拉菜单可以包含分割线和禁用项。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_dropdown>
              <template #trigger>
                <button class="demo-button">更多操作</button>
              </template>
              <div class="dropdown-menu">
                <div class="dropdown-item">编辑</div>
                <div class="dropdown-item">复制</div>
                <div class="dropdown-divider"></div>
                <div class="dropdown-item">分享</div>
                <div class="dropdown-item dropdown-item-disabled">删除</div>
              </div>
            </ds_dropdown>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_dropdown&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;更多操作&lt;/button&gt;
  &lt;/template&gt;
  &lt;div class="dropdown-menu"&gt;
    &lt;div class="dropdown-item"&gt;编辑&lt;/div&gt;
    &lt;div class="dropdown-item"&gt;复制&lt;/div&gt;
    &lt;div class="dropdown-divider"&gt;&lt;/div&gt;
    &lt;div class="dropdown-item"&gt;分享&lt;/div&gt;
    &lt;div class="dropdown-item dropdown-item-disabled"&gt;删除&lt;/div&gt;
  &lt;/div&gt;
&lt;/ds_dropdown&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">下拉菜单组件的属性、事件和插槽。</p>
      
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
              <td>trigger</td>
              <td>触发方式，可选值：click / hover</td>
              <td>String</td>
              <td>click</td>
            </tr>
            <tr>
              <td>placement</td>
              <td>下拉菜单位置，可选值：top / right / bottom / left</td>
              <td>String</td>
              <td>bottom</td>
            </tr>
            <tr>
              <td>showDelay</td>
              <td>显示延迟（毫秒）</td>
              <td>Number</td>
              <td>100</td>
            </tr>
            <tr>
              <td>hideDelay</td>
              <td>隐藏延迟（毫秒）</td>
              <td>Number</td>
              <td>150</td>
            </tr>
            <tr>
              <td>offset</td>
              <td>下拉菜单偏移量（像素）</td>
              <td>Number</td>
              <td>8</td>
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
              <td>show</td>
              <td>下拉菜单显示时触发</td>
              <td>-</td>
            </tr>
            <tr>
              <td>hide</td>
              <td>下拉菜单隐藏时触发</td>
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
              <td>trigger</td>
              <td>触发元素</td>
            </tr>
            <tr>
              <td>default</td>
              <td>下拉菜单内容</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsDropdown from '../../components/ds_Dropdown.vue';

export default {
  name: 'DropdownDemo',
  components: {
    ds_dropdown: DsDropdown
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

.dropdown-menu {
  min-width: 160px;
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