<template>
  <div class="section-page">
    <h1>Slider</h1>
    <p class="description">滑块组件用于在一个固定区间内选择特定值。</p>
    
    <div class="section">
      <h2>基础用法</h2>
      <p class="section-description">滑块有不同的状态和样式。</p>
      
      <div class="category-card">
        <h3>基础滑块</h3>
        <p class="component-desc">基础的滑块用于选择一个数值。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_slider v-model="sliderValue1" />
          </div>
          <div class="demo-name">当前值: {{ sliderValue1 }}</div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider v-model="sliderValue" /&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>禁用状态</h3>
        <p class="component-desc">禁用状态的滑块不可操作。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_slider v-model="sliderValue2" disabled />
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider v-model="sliderValue" disabled /&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>设置步长</h3>
        <p class="component-desc">设置步长可以控制滑块的移动粒度。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_slider v-model="sliderValue3" :step="10" />
          </div>
          <div class="demo-name">当前值: {{ sliderValue3 }}（步长: 10）</div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider v-model="sliderValue" :step="10" /&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>附加功能</h2>
      <p class="section-description">滑块可以提供更多的功能和信息。</p>
      
      <div class="category-card">
        <h3>显示输入框</h3>
        <p class="component-desc">可以同时显示输入框，直接输入数值。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_slider v-model="sliderValue4" show-input />
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider v-model="sliderValue" show-input /&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>显示间断点</h3>
        <p class="component-desc">可以显示间断点标记。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_slider v-model="sliderValue5" :step="10" show-stops />
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider v-model="sliderValue" :step="10" show-stops /&gt;</code></pre>
        </div>
      </div>
      
      <div class="category-card">
        <h3>自定义范围</h3>
        <p class="component-desc">可以自定义滑块的最小值和最大值。</p>
        
        <div class="demo-block">
          <div class="demo-row">
            <ds_slider v-model="sliderValue6" :min="-20" :max="20" />
          </div>
          <div class="demo-name">当前值: {{ sliderValue6 }}（范围: -20 ~ 20）</div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider v-model="sliderValue" :min="-20" :max="20" /&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>垂直模式</h2>
      <p class="section-description">滑块支持垂直方向的显示。</p>
      
      <div class="category-card">
        <h3>垂直滑块</h3>
        <p class="component-desc">垂直方向的滑块。</p>
        
        <div class="demo-block">
          <div class="demo-row align-items-center">
            <ds_slider 
              v-model="sliderValue7" 
              vertical 
              height="200px"
              style="margin-right: 50px;"
            />
            
            <ds_slider 
              v-model="sliderValue8" 
              vertical 
              height="200px"
              show-input
            />
          </div>
        </div>
        
        <div class="code-block">
          <pre><code>&lt;ds_slider 
  v-model="sliderValue" 
  vertical 
  height="200px"
/&gt;

&lt;ds_slider 
  v-model="sliderValue" 
  vertical 
  height="200px"
  show-input
/&gt;</code></pre>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>API参考</h2>
      <p class="section-description">滑块组件的属性、事件和插槽。</p>
      
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
              <td>Number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>min</td>
              <td>最小值</td>
              <td>Number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>max</td>
              <td>最大值</td>
              <td>Number</td>
              <td>100</td>
            </tr>
            <tr>
              <td>step</td>
              <td>步长</td>
              <td>Number</td>
              <td>1</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>showInput</td>
              <td>是否显示输入框</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>showTooltip</td>
              <td>是否显示提示气泡</td>
              <td>Boolean</td>
              <td>true</td>
            </tr>
            <tr>
              <td>showStops</td>
              <td>是否显示间断点</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>vertical</td>
              <td>是否竖向模式</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>height</td>
              <td>高度（竖向模式）</td>
              <td>String</td>
              <td>'200px'</td>
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
              <td>值改变时触发</td>
              <td>(value: number)</td>
            </tr>
            <tr>
              <td>change</td>
              <td>值改变时触发</td>
              <td>(value: number)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import DsSlider from '../../components/ds_Slider.vue';

export default {
  name: 'SliderDemo',
  components: {
    ds_slider: DsSlider
  },
  data() {
    return {
      sliderValue1: 30,
      sliderValue2: 40,
      sliderValue3: 50,
      sliderValue4: 25,
      sliderValue5: 30,
      sliderValue6: 0,
      sliderValue7: 60,
      sliderValue8: 70
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