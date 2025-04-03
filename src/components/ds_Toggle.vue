<template>
  <div 
    class="toggle-wrapper"
    :class="[
      `toggle-${size}`,
      { 
        'toggle-checked': modelValue,
        'toggle-disabled': disabled
      }
    ]"
    @click="onChange"
  >
    <div class="toggle-track">
      <div class="toggle-thumb"></div>
    </div>
    
    <!-- 开关标签 -->
    <span v-if="$slots.default" class="toggle-label">
      <slot></slot>
    </span>
    
    <!-- 隐藏的原生复选框，用于可访问性 -->
    <input 
      type="checkbox"
      class="toggle-input"
      :checked="modelValue"
      :disabled="disabled"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  name: 'ds_Toggle',
  props: {
    // v-model 绑定值
    modelValue: {
      type: Boolean,
      default: false
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 开关尺寸
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  methods: {
    // 开关变更事件
    onChange() {
      if (!this.disabled) {
        this.$emit('update:modelValue', !this.modelValue);
        this.$emit('change', !this.modelValue);
      }
    }
  }
}
</script>

<style>
/* 开关容器 */
.toggle-wrapper {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: all 0.2s;
}

.toggle-wrapper.toggle-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* 开关轨道 */
.toggle-track {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 36px;
  height: 20px;
  border-radius: var(--radius-xxxlarge);
  background-color: var(--color-stroke-default);
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.toggle-checked .toggle-track {
  background-color: var(--color-brand-default);
}

.toggle-wrapper:hover:not(.toggle-disabled) .toggle-track {
  opacity: 0.8;
}

/* 开关滑块 */
.toggle-thumb {
  position: absolute;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-circle);
  background-color: var(--color-bg-default);
  transition: all 0.2s ease;
  box-shadow: var(--elevation-shadow-light-100);
}

.toggle-checked .toggle-thumb {
  left: calc(100% - 18px);
}

/* 开关标签 */
.toggle-label {
  margin-left: var(--space-100);
  font: var(--font-14-regular);
  color: var(--color-text-primary);
}

.toggle-disabled .toggle-label {
  color: var(--color-text-disabled);
}

/* 隐藏原生复选框 */
.toggle-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;
  pointer-events: none;
}

/* 尺寸变体 */
.toggle-small .toggle-track {
  width: 28px;
  height: 16px;
}

.toggle-small .toggle-thumb {
  width: 12px;
  height: 12px;
}

.toggle-small.toggle-checked .toggle-thumb {
  left: calc(100% - 14px);
}

.toggle-small .toggle-label {
  font: var(--font-12-regular);
}

.toggle-large .toggle-track {
  width: 44px;
  height: 24px;
}

.toggle-large .toggle-thumb {
  width: 20px;
  height: 20px;
}

.toggle-large.toggle-checked .toggle-thumb {
  left: calc(100% - 22px);
}

.toggle-large .toggle-label {
  font: var(--font-16-regular);
}
</style> 