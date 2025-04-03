<template>
  <div 
    class="tooltip-container"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
  >
    <!-- 触发元素 -->
    <div ref="trigger" class="tooltip-trigger">
      <slot></slot>
    </div>
    
    <!-- 提示内容 -->
    <transition name="tooltip-fade">
      <div 
        v-show="visible" 
        ref="tooltip"
        class="tooltip" 
        :class="[
          `tooltip-${placement}`,
          `tooltip-${theme}`
        ]"
        :style="tooltipStyle"
      >
        <div class="tooltip-arrow" :class="`tooltip-arrow-${placement}`"></div>
        <div class="tooltip-content">
          <slot name="content">{{ content }}</slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ds_Tooltip',
  props: {
    // 提示内容
    content: {
      type: String,
      default: ''
    },
    // 位置
    placement: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value)
    },
    // 主题
    theme: {
      type: String,
      default: 'dark',
      validator: (value) => ['dark', 'light'].includes(value)
    },
    // 显示延迟
    showDelay: {
      type: Number,
      default: 200
    },
    // 隐藏延迟
    hideDelay: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      visible: false,
      tooltipStyle: {
        top: '0px',
        left: '0px'
      },
      showTimer: null,
      hideTimer: null
    };
  },
  methods: {
    // 显示提示
    showTooltip() {
      // 清除隐藏定时器
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
      
      // 设置显示定时器
      this.showTimer = setTimeout(() => {
        this.visible = true;
        this.$nextTick(() => {
          this.updatePosition();
        });
      }, this.showDelay);
    },
    
    // 隐藏提示
    hideTooltip() {
      // 清除显示定时器
      if (this.showTimer) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }
      
      // 设置隐藏定时器
      this.hideTimer = setTimeout(() => {
        this.visible = false;
      }, this.hideDelay);
    },
    
    // 更新提示位置
    updatePosition() {
      if (!this.visible) return;
      
      const triggerEl = this.$refs.trigger;
      const tooltipEl = this.$refs.tooltip;
      
      if (!triggerEl || !tooltipEl) return;
      
      // 获取触发元素的位置和尺寸
      const triggerRect = triggerEl.getBoundingClientRect();
      const tooltipRect = tooltipEl.getBoundingClientRect();
      
      // 计算提示的位置
      const positions = {
        top: {
          top: `${-tooltipRect.height - 10}px`,
          left: `${(triggerRect.width - tooltipRect.width) / 2}px`
        },
        right: {
          top: `${(triggerRect.height - tooltipRect.height) / 2}px`,
          left: `${triggerRect.width + 10}px`
        },
        bottom: {
          top: `${triggerRect.height + 10}px`,
          left: `${(triggerRect.width - tooltipRect.width) / 2}px`
        },
        left: {
          top: `${(triggerRect.height - tooltipRect.height) / 2}px`,
          left: `${-tooltipRect.width - 10}px`
        }
      };
      
      // 设置提示的位置
      const position = positions[this.placement];
      this.tooltipStyle = {
        top: position.top,
        left: position.left
      };
    }
  },
  beforeUnmount() {
    // 清除定时器
    if (this.showTimer) {
      clearTimeout(this.showTimer);
      this.showTimer = null;
    }
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }
  }
}
</script>

<style>
/* 提示容器 */
.tooltip-container {
  position: relative;
  display: inline-block;
}

/* 触发元素 */
.tooltip-trigger {
  display: inline-block;
}

/* 提示框 */
.tooltip {
  position: absolute;
  z-index: 1000;
  padding: var(--space-100) var(--space-150);
  border-radius: var(--radius-small);
  font: var(--font-12-regular);
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
}

/* 提示内容 */
.tooltip-content {
  position: relative;
  z-index: 2;
}

/* 提示箭头 */
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px;
  border-color: transparent;
  z-index: 1;
}

/* 提示箭头位置 */
.tooltip-arrow-top {
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-width: 0;
}

.tooltip-arrow-right {
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  border-left-width: 0;
}

.tooltip-arrow-bottom {
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-top-width: 0;
}

.tooltip-arrow-left {
  right: -5px;
  top: 50%;
  transform: translateY(-50%);
  border-right-width: 0;
}

/* 深色主题 */
.tooltip-dark {
  background-color: var(--color-brand-default);
  color: var(--color-text-inverse);
  box-shadow: var(--elevation-shadow-light-100);
}

.tooltip-dark .tooltip-arrow-top {
  border-top-color: var(--color-brand-default);
}

.tooltip-dark .tooltip-arrow-right {
  border-right-color: var(--color-brand-default);
}

.tooltip-dark .tooltip-arrow-bottom {
  border-bottom-color: var(--color-brand-default);
}

.tooltip-dark .tooltip-arrow-left {
  border-left-color: var(--color-brand-default);
}

/* 浅色主题 */
.tooltip-light {
  background-color: var(--color-bg-default);
  color: var(--color-text-primary);
  border: 1px solid var(--color-stroke-default);
  box-shadow: var(--elevation-shadow-light-100);
}

.tooltip-light .tooltip-arrow-top {
  border-top-color: var(--color-bg-default);
}

.tooltip-light .tooltip-arrow-right {
  border-right-color: var(--color-bg-default);
}

.tooltip-light .tooltip-arrow-bottom {
  border-bottom-color: var(--color-bg-default);
}

.tooltip-light .tooltip-arrow-left {
  border-left-color: var(--color-bg-default);
}

/* 提示动画 */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style> 