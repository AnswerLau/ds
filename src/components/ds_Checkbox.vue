<template>
  <div 
    class="ds-checkbox" 
    :class="[
      `ds-checkbox--${size}`, 
      { 
        'is-checked': modelValue,
        'is-disabled': disabled,
        'is-indeterminate': indeterminate,
        'is-primary': isPrimary
      }
    ]"
  >
    <label class="ds-checkbox-label">
      <span class="ds-checkbox-input">
        <input
          type="checkbox"
          :checked="modelValue"
          :disabled="disabled"
          @change="handleChange"
          v-bind="$attrs"
        />
        <span class="ds-checkbox-inner">
          <ds_icon v-if="modelValue && !indeterminate" name="check" size="small" class="ds-checkbox-icon" />
          <span v-if="indeterminate" class="ds-checkbox-indeterminate"></span>
        </span>
      </span>
      <span class="ds-checkbox-text" v-if="$slots.default">
        <slot></slot>
      </span>
    </label>
  </div>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Checkbox',
  components: {
    ds_icon: DsIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium'].includes(value)
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  methods: {
    handleChange(event) {
      if (this.disabled) return;
      
      const checked = event.target.checked;
      this.$emit('update:modelValue', checked);
      this.$emit('change', checked);
    }
  }
};
</script>

<style>
.ds-checkbox {
  display: inline-flex;
  align-items: center;
  position: relative;
  font: var(--font-14-regular);
  color: var(--color-text-primary);
  cursor: pointer;
  user-select: none;
  border-radius: var(--radius-small);
}

.ds-checkbox--small {
  font: var(--font-12-regular);
}

.ds-checkbox.is-disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.ds-checkbox-label {
  display: inline-flex;
  align-items: center;
  cursor: inherit;
}

.ds-checkbox-input {
  display: inline-flex;
  position: relative;
}

.ds-checkbox-input input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  margin: 0;
  cursor: inherit;
}

.ds-checkbox-inner {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-stroke-divider);
  border-radius: var(--radius-small);
  background-color: var(--color-bg-surface);
  transition: all 0.2s;
  flex-shrink: 0;
}

.ds-checkbox--small .ds-checkbox-inner {
  width: 14px;
  height: 14px;
}

.ds-checkbox-text {
  margin-left: 8px;
  line-height: 1.4;
}

/* 选中状态 */
.ds-checkbox.is-checked .ds-checkbox-inner {
  background-color: var(--color-brand-default);
  border-color: var(--color-brand-default);
}

/* 图标样式 */
.ds-checkbox-icon {
  color: white !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: absolute !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  height: 100% !important;
  width: 100% !important;
}

.ds-checkbox-icon img {
  filter: brightness(0) invert(1) !important; /* 确保SVG图标显示为白色 */
  width: 100% !important;
  height: 100% !important;
  object-fit: contain !important;
}

/* 半选中状态 */
.ds-checkbox.is-indeterminate .ds-checkbox-inner {
  background-color: var(--color-brand-default);
  border-color: var(--color-brand-default);
}

.ds-checkbox-indeterminate {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 1px;
}

.ds-checkbox--small .ds-checkbox-indeterminate {
  width: 6px;
  height: 6px;
}

/* 悬停效果 */
.ds-checkbox:not(.is-disabled):hover .ds-checkbox-inner {
  border-color: var(--color-text-primary);
}

/* 聚焦效果 */
.ds-checkbox:not(.is-disabled) input:focus + .ds-checkbox-inner {
  border-color: var(--color-brand-default);
  box-shadow: 0 0 0 2px var(--blue-alpha-100);
}

/* 禁用状态不同组合 */
.ds-checkbox.is-disabled .ds-checkbox-inner {
  background-color: var(--neutral-300);
  border-color: var(--color-stroke-divider);
}

.ds-checkbox.is-disabled.is-checked .ds-checkbox-inner {
  background-color: var(--neutral-600);
  border-color: var(--neutral-600);
}

.ds-checkbox.is-disabled .ds-checkbox-text {
  color: var(--color-text-disabled);
}

/* 添加品牌色变体 */
.ds-checkbox.is-primary.is-checked .ds-checkbox-inner {
  background-color: var(--color-blue-default);
  border-color: var(--color-blue-default);
}

.ds-checkbox.is-primary.is-indeterminate .ds-checkbox-inner {
  background-color: var(--color-blue-default);
  border-color: var(--color-blue-default);
}

.ds-checkbox:not(.is-disabled).is-primary:hover .ds-checkbox-inner {
  border-color: var(--color-blue-default);
}
</style> 