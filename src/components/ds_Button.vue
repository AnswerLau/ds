<template>
  <button 
    class="btn"
    :class="[
      `btn-${type}`,
      `btn-${size}`,
      { 
        'btn-icon-left': iconLeft && !iconOnly,
        'btn-icon-right': iconRight && !iconOnly,
        'btn-icon-only': iconOnly,
        'btn-loading': loading
      }
    ]"
    :disabled="disabled || loading"
    @click="onClick"
  >
    <!-- 左侧图标 -->
    <ds_icon v-if="iconLeft && !iconOnly && !loading" :name="iconLeft" :size="iconSize" class="btn-icon" />
    
    <!-- 加载图标 -->
    <ds_icon v-if="loading" name="loading" :size="iconSize" class="btn-icon" />
    
    <!-- 按钮文本 -->
    <span v-if="!iconOnly" class="button-content">
      <slot></slot>
    </span>
    
    <!-- 单图标 -->
    <ds_icon v-if="iconOnly && !loading" :name="iconLeft || iconRight" :size="iconSize" class="btn-icon" />
    
    <!-- 右侧图标 -->
    <ds_icon v-if="iconRight && !iconOnly && !loading" :name="iconRight" :size="iconSize" class="btn-icon" />
  </button>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Button',
  components: {
    ds_icon: DsIcon
  },
  props: {
    // 按钮类型：primary, secondary, text, link, emphasize
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'text', 'link', 'emphasize'].includes(value)
    },
    // 按钮尺寸：small, medium, large, xlarge
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large', 'xlarge'].includes(value)
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 加载状态
    loading: {
      type: Boolean,
      default: false
    },
    // 左侧图标
    iconLeft: {
      type: String,
      default: ''
    },
    // 右侧图标
    iconRight: {
      type: String,
      default: ''
    },
    // 仅图标模式
    iconOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 根据按钮尺寸决定图标尺寸
    iconSize() {
      if (this.size === 'small') return 'small';
      if (this.size === 'large' || this.size === 'xlarge') return 'large';
      return 'medium';
    }
  },
  methods: {
    onClick(event) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event);
      }
    }
  }
}
</script>

<style>
/*
 * 按钮类型和颜色对应关系：
 * 主要按钮(primary): 白色文字(--color-text-inverse)，背景色为(--color-brand-default)
 * 强调按钮(emphasize): 白色文字(--color-text-inverse)，背景色为(--color-emphasize-default)
 * 次要按钮(secondary): 品牌色文字(--color-brand-default)，透明背景+品牌色边框
 * 文本按钮(text): 品牌色文字(--color-brand-default)，透明背景
 * 链接按钮(link): 蓝色文字(--color-blue-default)，透明背景+下划线
 * 
 * 图标颜色跟随文字颜色，禁用状态下透明度降低
 */

/* 基础按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  font: var(--font-14-medium);
  cursor: pointer;
  transition: all 0.2s;
  outline: none;
  gap: var(--space-75); /* 添加图标与文本之间的间距 */
}

.button-content {
  font: inherit; /* 确保文本内容继承按钮字体 */
  color: inherit; /* 确保文本内容继承按钮颜色 */
  display: inline-flex;
  align-items: center;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* 主要按钮 */
.btn-primary {
  background-color: var(--color-brand-default);
  color: var(--color-text-inverse);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--color-brand-hover);
}

.btn-primary:active:not(:disabled) {
  background-color: var(--color-brand-active);
}

/* 强调按钮 */
.btn-emphasize {
  background-color: var(--color-emphasize-default);
  color: var(--color-text-inverse);
}

.btn-emphasize:hover:not(:disabled) {
  background-color: var(--color-emphasize-hover);
}

.btn-emphasize:active:not(:disabled) {
  background-color: var(--color-emphasize-active);
}

/* 次要按钮 */
.btn-secondary {
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-stroke-default);
}

.btn-secondary:hover:not(:disabled) {
  color: var(--color-text-secondary);
  border-color: var(--color-stroke-default);
  background-color: var(--color-bg-hover);
}

.btn-secondary:active:not(:disabled) {
  color: var(--color-brand-default);
  border-color: var(--color-brand-default);
  background-color: var(--color-bg-active);
}

/* 文本按钮 */
.btn-text {
  background-color: transparent;
  color: var(--color-text-secondary);
}

.btn-text:hover:not(:disabled) {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.btn-text:active:not(:disabled) {
  background-color: var(--color-bg-active);
  color: var(--color-brand-primary);
}

/* 链接按钮 */
.btn-link {
  background-color: transparent;
  color: var(--color-blue-default);
  padding: 0;
  height: auto;
  min-width: auto;
  
}

.btn-link:hover:not(:disabled) {
  text-decoration: underline;
  color: var(--color-blue-hover);
}

.btn-link:active:not(:disabled) {
  color: var(--color-blue-active);
}

/* 按钮尺寸 */
.btn-small {
  height: 24px;
  padding: 0 var(--space-100);
  font: var(--font-12-medium);
  min-width: 48px;
  border-radius: var(--radius-small);
}

.btn-medium {
  height: 32px;
  padding: 0 var(--space-150);
  font: var(--font-14-medium);
  min-width: 64px;
  border-radius: var(--radius-medium);
}

.btn-large {
  height: 40px;
  padding: 0 var(--space-200);
  font: var(--font-16-medium);
  min-width: 80px;
  border-radius: var(--radius-large);
}

.btn-xlarge {
  height: 48px;
  padding: 0 var(--space-300);
  font: var(--font-16-medium);
  min-width: 80px;
  border-radius: var(--radius-large);
}

/* 图标按钮 */
.icon-left, .icon-right {
  display: flex;
  align-items: center;
}

.btn-icon-only {
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  border-radius: var(--radius-medium);
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon-only.btn-small {
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: var(--radius-small);
}

.btn-icon-only.btn-large {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: var(--radius-large);
}

.btn-icon-only.btn-xlarge {
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: var(--radius-large);
}

/* 加载状态 */
.btn-loading {
  position: relative;
  cursor: default;
}

.btn-icon-only .loading-icon {
  margin-right: 0;
}

/* 确保svg图标在各类型按钮中颜色正确 */
/* 图标颜色通过按钮类型的color属性继承，无需单独设置 */
/* 以下代码确保在特殊状态下图标颜色与文本保持一致 */

.btn:disabled .icon {
  /* 禁用状态下的图标颜色继承按钮禁用状态的透明度 */
  opacity: 1; /* 已在 .btn:disabled 中设置了 opacity: 0.5 */
}

/* 设置图标的颜色继承 */
.btn-icon {
  color: inherit;
  fill: currentColor;
}

.btn-icon img {
  filter: var(--icon-filter, none);
}

/* 针对不同按钮类型设置不同的图标颜色 */
.btn-primary .btn-icon img,
.btn-emphasize .btn-icon img {
  filter: brightness(0) invert(1); /* 将图标转为白色 */
}

.btn-secondary .btn-icon img {
  filter: brightness(0.5); /* 保持与文本颜色一致的灰色 */
}

.btn-secondary:active:not(:disabled) .btn-icon img {
  filter: var(--brand-color-filter); /* 激活状态使用品牌色 */
}

.btn-text .btn-icon img {
  filter: brightness(0.5); /* 与文本颜色一致的灰色 */
}

.btn-text:hover:not(:disabled) .btn-icon img {
  filter: brightness(0.2); /* 悬停状态更深的颜色 */
}

.btn-text:active:not(:disabled) .btn-icon img {
  filter: var(--brand-color-filter); /* 激活状态使用品牌色 */
}

.btn-link .btn-icon img {
  filter: var(--blue-color-filter); /* 蓝色滤镜 */
}

.btn:disabled .btn-icon img {
  /* 禁用状态应用原始滤镜，因为按钮本身已有透明度 */
  opacity: 1;
}
</style> 