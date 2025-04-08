<template>
  <div 
    class="input-wrapper"
    :class="[
      `input-size-${size}`,
      { 
        'input-disabled': disabled,
        'input-error': error,
        'input-prefix': prefix,
        'input-suffix': suffix,
        'input-focus': isFocused
      }
    ]"
  >
    <!-- 前缀图标 -->
    <div v-if="prefix" class="input-icon input-prefix-icon">
      <!-- 搜索图标 -->
      <svg v-if="prefix === 'search'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <!-- 日历图标 -->
      <svg v-else-if="prefix === 'calendar'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <!-- 其他图标继续使用组件 -->
      <ds_icon v-else :name="prefix" :size="iconSize" />
    </div>
    
    <!-- 输入框 -->
    <input
      ref="input"
      class="ds-input"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    />
    
    <!-- 清除图标 -->
    <div v-if="clearable && modelValue && !disabled && !readonly" 
      class="input-icon input-clear-icon"
      @click="onClear">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
    </div>
    
    <!-- 后缀图标 -->
    <div v-else-if="suffix" class="input-icon input-suffix-icon">
      <!-- 搜索图标 -->
      <svg v-if="suffix === 'search'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <!-- 日历图标 -->
      <svg v-else-if="suffix === 'calendar'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
      <!-- 其他图标继续使用组件 -->
      <ds_icon v-else :name="suffix" :size="iconSize" />
    </div>
    
    <!-- 字数限制提示 -->
    <div v-if="showWordLimit && maxlength" class="input-count">
      <span>{{ valueLength }}/{{ maxlength }}</span>
    </div>
  </div>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Input',
  components: {
    ds_icon: DsIcon
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number],
      default: ''
    },
    // 输入框类型
    type: {
      type: String,
      default: 'text'
    },
    // 占位文本
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    // 尺寸：small, medium, large
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否只读
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否显示清除按钮
    clearable: {
      type: Boolean,
      default: false
    },
    // 是否有错误
    error: {
      type: Boolean,
      default: false
    },
    // 最大输入长度
    maxlength: {
      type: Number,
      default: null
    },
    // 是否显示字数限制
    showWordLimit: {
      type: Boolean,
      default: false
    },
    // 前缀图标
    prefix: {
      type: String,
      default: ''
    },
    // 后缀图标
    suffix: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isFocused: false
    };
  },
  computed: {
    // 计算当前输入值的长度
    valueLength() {
      return String(this.modelValue).length;
    },
    // 根据输入框尺寸决定图标尺寸
    iconSize() {
      if (this.size === 'small') return 'small';
      if (this.size === 'large') return 'large';
      return 'medium';
    }
  },
  methods: {
    // 输入事件
    onInput(event) {
      this.$emit('update:modelValue', event.target.value);
      this.$emit('input', event);
    },
    // 聚焦事件
    onFocus(event) {
      this.isFocused = true;
      this.$emit('focus', event);
    },
    // 失焦事件
    onBlur(event) {
      this.isFocused = false;
      this.$emit('blur', event);
    },
    // 变更事件
    onChange(event) {
      this.$emit('change', event);
    },
    // 清除输入内容
    onClear() {
      this.$emit('update:modelValue', '');
      this.$emit('clear');
      // 清除后自动聚焦
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    // 手动聚焦方法
    focus() {
      this.$refs.input.focus();
    },
    // 手动失焦方法
    blur() {
      this.$refs.input.blur();
    }
  }
}
</script>

<style>
/* 输入框容器 */
.input-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  border: 1px solid transparent;
  background-color: var(--color-bg-surface);
  transition: all 0.2s;
}

.input-wrapper:hover:not(.input-disabled) {
  background-color: var(--color-bg-hover);
  border: 1px solid var(--color-stroke-default);
}

.input-wrapper.input-focus:not(.input-disabled) {
  border-color: var(--color-brand-default);
  box-shadow: 0 0 0 2px var(--blue-alpha-100);
}

.input-wrapper.input-error {
  border-color: var(--color-red-default);
}

.input-wrapper.input-error.input-focus {
  box-shadow: 0 0 0 2px var(--red-alpha-100);
}

.input-wrapper.input-disabled {
  background-color: var(--color-bg-subtlest);
  border-color: var(--color-stroke-default);
  cursor: not-allowed;
}

/* 输入框基础样式 */
.ds-input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: var(--color-text-primary);
  font: var(--font-14-regular);
}

.ds-input::placeholder {
  color: var(--color-text-disabled);
}

.ds-input:disabled {
  cursor: not-allowed;
  color: var(--color-text-disabled);
}

.ds-input[readonly] {
  color: var(--color-text-secondary);
}

/* 输入框尺寸 */
.input-size-small {
  height: 24px;
  padding: 0 var(--space-50);
  border-radius: var(--radius-small);
}

.input-size-small .ds-input {
  font: var(--font-12-regular);
}

.input-size-medium {
  height: 32px;
  padding: 0 var(--space-100);
  border-radius: var(--radius-medium);
}

.input-size-medium .ds-input {
  font: var(--font-14-regular);
}

.input-size-large {
  height: 40px;
  padding: 0 var(--space-150);
  border-radius: var(--radius-large);
}

.input-size-large .ds-input {
  font: var(--font-16-regular);
}

/* 图标样式 */
.input-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-icon {
  stroke: currentColor;
  transition: stroke 0.2s;
}

.input-prefix-icon {
  margin-right: var(--space-75);
}

.input-suffix-icon {
  margin-left: var(--space-75);
}

.input-clear-icon {
  margin-left: var(--space-75);
  cursor: pointer;
  color: var(--color-text-disabled);
  transition: color 0.2s;
}

.input-clear-icon:hover {
  color: var(--color-text-tertiary);
}

/* 字数限制显示 */
.input-count {
  margin-left: var(--space-75);
  color: var(--color-text-tertiary);
  font: var(--font-12-regular);
  line-height: 1;
  white-space: nowrap;
}

.input-error .input-count {
  color: var(--color-red-default);
}
</style> 