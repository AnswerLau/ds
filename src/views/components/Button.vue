<template>
  <div class="section-page">
    <h1>Button</h1>
    <p class="description">按钮组件用于触发操作或事件，提供多种样式和状态以适应不同场景。</p>
    
    <div class="section">
      <h2>按钮类型</h2>
      <p class="section-description">根据重要程度和使用场景，按钮分为主要按钮、强调按钮、次要按钮、文本按钮和链接按钮。</p>
      
      <div class="category-card">
        <h3>主要按钮 Primary</h3>
        <p class="component-desc">用于页面的主要操作，一个页面通常只有一个主要按钮。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="primary">主要按钮</ds_button>
              <div class="button-name">默认状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" class="btn-hover">主要按钮</ds_button>
              <div class="button-name">悬停状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" class="btn-active">主要按钮</ds_button>
              <div class="button-name">激活状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" disabled>主要按钮</ds_button>
              <div class="button-name">禁用状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="primary"&gt;主要按钮&lt;/ds_button&gt;</code></pre>
        </div>
      </div>

      <div class="category-card">
        <h3>强调按钮 Emphasize</h3>
        <p class="component-desc">用于需要特别强调的操作，吸引用户注意力。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="emphasize">强调按钮</ds_button>
              <div class="button-name">默认状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="emphasize" class="btn-hover">强调按钮</ds_button>
              <div class="button-name">悬停状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="emphasize" class="btn-active">强调按钮</ds_button>
              <div class="button-name">激活状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="emphasize" disabled>强调按钮</ds_button>
              <div class="button-name">禁用状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="emphasize"&gt;强调按钮&lt;/ds_button&gt;</code></pre>
        </div>
      </div>

      <div class="category-card">
        <h3>次要按钮 Secondary</h3>
        <p class="component-desc">用于次要操作，常与主要按钮搭配使用。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="secondary">次要按钮</ds_button>
              <div class="button-name">默认状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="secondary" class="btn-hover">次要按钮</ds_button>
              <div class="button-name">悬停状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="secondary" class="btn-active">次要按钮</ds_button>
              <div class="button-name">激活状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="secondary" disabled>次要按钮</ds_button>
              <div class="button-name">禁用状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="secondary"&gt;次要按钮&lt;/ds_button&gt;</code></pre>
        </div>
      </div>

      <div class="category-card">
        <h3>文本按钮 Text</h3>
        <p class="component-desc">用于不太重要的操作，或空间受限的情况。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="text">文本按钮</ds_button>
              <div class="button-name">默认状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="text" class="btn-hover">文本按钮</ds_button>
              <div class="button-name">悬停状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="text" class="btn-active">文本按钮</ds_button>
              <div class="button-name">激活状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="text" disabled>文本按钮</ds_button>
              <div class="button-name">禁用状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="text"&gt;文本按钮&lt;/ds_button&gt;</code></pre>
        </div>
      </div>

      <div class="category-card">
        <h3>链接按钮 Link</h3>
        <p class="component-desc">外观类似链接，使用蓝色(--color-blue-default)，常用于引导性操作。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="link">链接按钮</ds_button>
              <div class="button-name">默认状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="link" class="btn-hover">链接按钮</ds_button>
              <div class="button-name">悬停状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="link" class="btn-active">链接按钮</ds_button>
              <div class="button-name">激活状态</div>
            </div>
            
            <div class="button-group">
              <ds_button type="link" disabled>链接按钮</ds_button>
              <div class="button-name">禁用状态</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="link"&gt;链接按钮&lt;/ds_button&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>按钮尺寸</h2>
      <p class="section-description">按钮提供小、中、大、特大四种尺寸，以适应不同的界面空间。</p>
      
      <div class="category-card">
        <h3>尺寸展示</h3>
        <p class="component-desc">小型(24px高，4px圆角)、中型(32px高，6px圆角)、大型(40px高，8px圆角)、特大型(48px高，8px圆角)</p>
        
        <div class="button-demo">
          <div class="button-row align-items-center">
            <div class="button-group">
              <ds_button type="primary" size="small">小按钮</ds_button>
              <div class="button-name">小型 (Small)</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary">默认按钮</ds_button>
              <div class="button-name">中型 (Medium)</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" size="large">大按钮</ds_button>
              <div class="button-name">大型 (Large)</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" size="xlarge">特大按钮</ds_button>
              <div class="button-name">特大型 (XLarge)</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="primary" size="small"&gt;小按钮&lt;/ds_button&gt;
&lt;ds_button type="primary"&gt;默认按钮&lt;/ds_button&gt;
&lt;ds_button type="primary" size="large"&gt;大按钮&lt;/ds_button&gt;
&lt;ds_button type="primary" size="xlarge"&gt;特大按钮&lt;/ds_button&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>图标按钮</h2>
      <p class="section-description">按钮可以包含SVG图标，增强视觉提示和识别度。所有图标使用SVG文件统一管理，位于 assets/icons/ 目录。</p>
      
      <div class="category-card">
        <h3>带图标的按钮</h3>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="primary" icon-left="plus">新建</ds_button>
              <div class="button-name">主要按钮</div>
            </div>
            
            <div class="button-group">
              <ds_button type="secondary" icon-left="plus">新建</ds_button>
              <div class="button-name">次要按钮</div>
            </div>
            
            <div class="button-group">
              <ds_button type="text" icon-left="plus">新建</ds_button>
              <div class="button-name">文本按钮</div>
            </div>
            
            <div class="button-group">
              <ds_button type="link" icon-left="plus">新建</ds_button>
              <div class="button-name">链接按钮</div>
            </div>
          </div>
          
          <div class="button-row" style="margin-top: var(--space-200);">
            <div class="button-group">
              <ds_button type="primary" icon-right="arrow-right">下一步</ds_button>
              <div class="button-name">右侧图标</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" icon-left="plus" icon-only></ds_button>
              <div class="button-name">仅图标</div>
            </div>
            
            <div class="button-group">
              <ds_button type="emphasize" icon-left="star" icon-only></ds_button>
              <div class="button-name">强调图标按钮</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="primary" icon-left="plus"&gt;新建&lt;/ds_button&gt;
&lt;ds_button type="secondary" icon-left="plus"&gt;新建&lt;/ds_button&gt;
&lt;ds_button type="text" icon-left="plus"&gt;新建&lt;/ds_button&gt;
&lt;ds_button type="link" icon-left="plus"&gt;新建&lt;/ds_button&gt;

&lt;ds_button type="primary" icon-right="arrow-right"&gt;下一步&lt;/ds_button&gt;
&lt;ds_button type="primary" icon-left="plus" icon-only&gt;&lt;/ds_button&gt;
&lt;ds_button type="emphasize" icon-left="star" icon-only&gt;&lt;/ds_button&gt;</code></pre>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>按钮状态</h2>
      <p class="section-description">按钮可以有多种状态，以适应不同的交互场景。</p>
      
      <div class="category-card">
        <h3>加载状态</h3>
        <p class="component-desc">加载状态使用统一的SVG加载图标，并通过CSS动画实现旋转效果。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="primary" loading>加载中</ds_button>
              <div class="button-name">主要按钮加载</div>
            </div>
            
            <div class="button-group">
              <ds_button type="emphasize" loading>加载中</ds_button>
              <div class="button-name">强调按钮加载</div>
            </div>
            
            <div class="button-group">
              <ds_button type="secondary" loading>加载中</ds_button>
              <div class="button-name">次要按钮加载</div>
            </div>
            
            <div class="button-group">
              <ds_button type="primary" icon-left="plus" loading icon-only></ds_button>
              <div class="button-name">图标按钮加载</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="primary" loading&gt;加载中&lt;/ds_button&gt;
&lt;ds_button type="emphasize" loading&gt;加载中&lt;/ds_button&gt;
&lt;ds_button type="secondary" loading&gt;加载中&lt;/ds_button&gt;
&lt;ds_button type="primary" icon-left="plus" loading icon-only&gt;&lt;/ds_button&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API 参考</h2>
      <p class="section-description">Button 组件的属性、插槽和事件。</p>
      
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
              <td>type</td>
              <td>按钮类型</td>
              <td>string</td>
              <td>'primary'</td>
            </tr>
            <tr>
              <td></td>
              <td>可选值：primary, emphasize, secondary, text, link</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮尺寸</td>
              <td>string</td>
              <td>'medium'</td>
            </tr>
            <tr>
              <td></td>
              <td>可选值：small, medium, large, xlarge</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否加载中状态</td>
              <td>boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>iconLeft</td>
              <td>左侧图标名称（SVG图标）</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>iconRight</td>
              <td>右侧图标名称（SVG图标）</td>
              <td>string</td>
              <td>''</td>
            </tr>
            <tr>
              <td>iconOnly</td>
              <td>是否仅显示图标</td>
              <td>boolean</td>
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
              <td>click</td>
              <td>点击按钮时触发</td>
              <td>(event: MouseEvent)</td>
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
              <td>按钮内容</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>当iconOnly为true时使用的图标插槽</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="section">
      <h2>禁用状态</h2>
      <p class="section-description">包含图标的按钮在禁用状态下的样式。</p>
      
      <div class="category-card">
        <h3>禁用图标按钮</h3>
        <p class="component-desc">图标在禁用状态下的颜色也会相应变化。</p>
        
        <div class="button-demo">
          <div class="button-row">
            <div class="button-group">
              <ds_button type="primary" icon-left="plus" disabled>新建</ds_button>
              <div class="button-name">主要按钮</div>
            </div>
            
            <div class="button-group">
              <ds_button type="secondary" icon-left="plus" disabled>新建</ds_button>
              <div class="button-name">次要按钮</div>
            </div>
            
            <div class="button-group">
              <ds_button type="text" icon-left="plus" disabled>新建</ds_button>
              <div class="button-name">文本按钮</div>
            </div>
            
            <div class="button-group">
              <ds_button type="link" icon-left="plus" disabled>新建</ds_button>
              <div class="button-name">链接按钮</div>
            </div>
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_button type="primary" icon-left="plus" disabled&gt;新建&lt;/ds_button&gt;
&lt;ds_button type="secondary" icon-left="plus" disabled&gt;新建&lt;/ds_button&gt;
&lt;ds_button type="text" icon-left="plus" disabled&gt;新建&lt;/ds_button&gt;
&lt;ds_button type="link" icon-left="plus" disabled&gt;新建&lt;/ds_button&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DsButton from '../../components/ds_Button.vue';

export default {
  name: 'ButtonDemo',
  components: {
    ds_button: DsButton
  }
}
</script>

<style scoped>
.component-desc {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-200);
}

.button-demo {
  padding: var(--space-300);
  background-color: var(--color-bg-subtlest);
  border-radius: var(--radius-medium);
  margin-bottom: var(--space-200);
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-400);
}

.align-items-center {
  align-items: center;
}

.button-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-100);
}

.button-name {
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
</style> 