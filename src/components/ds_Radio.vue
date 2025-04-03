<template>
  <div 
    class="radio-wrapper"
    :class="{ 
      'radio-checked': modelValue === label,
      'radio-disabled': disabled
    }"
    @click="onChange"
  >
    <div class="radio">
      <div v-if="modelValue === label" class="radio-inner"></div>
    </div>
    
    <!-- 单选框标签 -->
    <span v-if="$slots.default" class="radio-label">
      <slot></slot>
    </span>
    
    <!-- 隐藏的原生单选框，用于可访问性 -->
    <input 
      type="radio"
      class="radio-input"
      :value="label"
      :checked="modelValue === label"
      :disabled="disabled"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'ds_Radio',
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number, Boolean],
      default: ''
    },
    // 单选框值
    label: {
      type: [String, Number, Boolean],
      required: true
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 单选框尺寸
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  methods: {
    // 单选框变更事件
    onChange() {
      if (!this.disabled) {
        this.$emit('update:modelValue', this.label);
        this.$emit('change', this.label);
      }
    }
  }
}
</script>

<style>
/* 单选框容器 */
.radio-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: all 0.2s;
}

.radio-wrapper.radio-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* 单选框外观 */
.radio {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-stroke-default);
  border-radius: var(--radius-circle);
  background-color: var(--color-bg-default);
  transition: all 0.2s;
  flex-shrink: 0;
}

.radio-wrapper:hover:not(.radio-disabled) .radio {
  border-color: var(--color-brand-default);
}

.radio-checked .radio {
  border-color: var(--color-brand-default);
}

.radio-checked:hover:not(.radio-disabled) .radio {
  border-color: var(--color-brand-hover);
}

/* 单选框内部选中圆点 */
.radio-inner {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-circle);
  background-color: var(--color-brand-default);
  transition: transform 0.2s;
}

.radio-checked:hover:not(.radio-disabled) .radio-inner {
  background-color: var(--color-brand-hover);
}

/* 标签文本 */
.radio-label {
  margin-left: var(--space-100);
  font: var(--font-14-regular);
  color: var(--color-text-primary);
}

.radio-disabled .radio-label {
  color: var(--color-text-disabled);
}

/* 隐藏原生单选框 */
.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  pointer-events: none;
}

/* 尺寸变体 */
.radio-wrapper[class*="size-small"] .radio {
  width: 14px;
  height: 14px;
}

.radio-wrapper[class*="size-small"] .radio-inner {
  width: 6px;
  height: 6px;
}

.radio-wrapper[class*="size-small"] .radio-label {
  font: var(--font-12-regular);
}

.radio-wrapper[class*="size-large"] .radio {
  width: 18px;
  height: 18px;
}

.radio-wrapper[class*="size-large"] .radio-inner {
  width: 10px;
  height: 10px;
}

.radio-wrapper[class*="size-large"] .radio-label {
  font: var(--font-16-regular);
}
</style> 