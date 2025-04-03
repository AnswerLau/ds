<template>
  <div class="dropdown-container">
    <!-- 触发器 -->
    <div 
      ref="trigger"
      class="dropdown-trigger"
      @click="toggleDropdown"
      @mouseenter="trigger === 'hover' && showDropdown()"
      @mouseleave="trigger === 'hover' && hideDropdown()"
    >
      <slot name="trigger"></slot>
    </div>
    
    <!-- 下拉菜单 -->
    <transition name="dropdown-fade">
      <div 
        v-show="visible"
        ref="dropdown"
        class="dropdown"
        :class="[`dropdown-${placement}`]"
        :style="dropdownStyle"
        @mouseenter="trigger === 'hover' && clearHideTimer()"
        @mouseleave="trigger === 'hover' && hideDropdown()"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ds_Dropdown',
  props: {
    // 触发方式
    trigger: {
      type: String,
      default: 'click',
      validator: (value) => ['click', 'hover'].includes(value)
    },
    // 下拉菜单位置
    placement: {
      type: String,
      default: 'bottom',
      validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value)
    },
    // 显示延迟（毫秒）
    showDelay: {
      type: Number,
      default: 100
    },
    // 隐藏延迟（毫秒）
    hideDelay: {
      type: Number,
      default: 150
    },
    // 下拉菜单偏移量
    offset: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      visible: false,
      showTimer: null,
      hideTimer: null,
      dropdownStyle: {
        minWidth: 'auto'
      }
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
    this.clearTimers();
  },
  methods: {
    // 切换下拉菜单显示状态
    toggleDropdown() {
      if (this.trigger !== 'click') return;
      
      if (this.visible) {
        this.hideDropdown(0);
      } else {
        this.showDropdown(0);
      }
    },
    
    // 显示下拉菜单
    showDropdown(delay = this.showDelay) {
      this.clearTimers();
      
      if (delay) {
        this.showTimer = setTimeout(() => {
          this.visible = true;
          this.$nextTick(() => {
            this.updatePosition();
          });
          this.$emit('show');
        }, delay);
      } else {
        this.visible = true;
        this.$nextTick(() => {
          this.updatePosition();
        });
        this.$emit('show');
      }
    },
    
    // 隐藏下拉菜单
    hideDropdown(delay = this.hideDelay) {
      this.clearShowTimer();
      
      if (delay) {
        this.hideTimer = setTimeout(() => {
          this.visible = false;
          this.$emit('hide');
        }, delay);
      } else {
        this.visible = false;
        this.$emit('hide');
      }
    },
    
    // 清除显示定时器
    clearShowTimer() {
      if (this.showTimer) {
        clearTimeout(this.showTimer);
        this.showTimer = null;
      }
    },
    
    // 清除隐藏定时器
    clearHideTimer() {
      if (this.hideTimer) {
        clearTimeout(this.hideTimer);
        this.hideTimer = null;
      }
    },
    
    // 清除所有定时器
    clearTimers() {
      this.clearShowTimer();
      this.clearHideTimer();
    },
    
    // 处理点击外部关闭下拉菜单
    handleClickOutside(event) {
      if (this.visible && this.$el && !this.$el.contains(event.target)) {
        this.hideDropdown(0);
      }
    },
    
    // 更新下拉菜单位置
    updatePosition() {
      if (!this.visible) return;
      
      const triggerEl = this.$refs.trigger;
      const dropdownEl = this.$refs.dropdown;
      
      if (!triggerEl || !dropdownEl) return;
      
      // 获取触发元素的位置和尺寸
      const triggerRect = triggerEl.getBoundingClientRect();
      
      // 设置下拉菜单的最小宽度
      this.dropdownStyle = {
        ...this.dropdownStyle,
        minWidth: `${triggerRect.width}px`
      };
      
      // 根据位置调整下拉菜单的定位
      switch (this.placement) {
        case 'top':
          dropdownEl.style.bottom = '100%';
          dropdownEl.style.left = '0';
          dropdownEl.style.marginBottom = `${this.offset}px`;
          break;
        case 'right':
          dropdownEl.style.left = '100%';
          dropdownEl.style.top = '0';
          dropdownEl.style.marginLeft = `${this.offset}px`;
          break;
        case 'bottom':
          dropdownEl.style.top = '100%';
          dropdownEl.style.left = '0';
          dropdownEl.style.marginTop = `${this.offset}px`;
          break;
        case 'left':
          dropdownEl.style.right = '100%';
          dropdownEl.style.top = '0';
          dropdownEl.style.marginRight = `${this.offset}px`;
          break;
      }
    }
  }
}
</script>

<style>
/* 下拉菜单容器 */
.dropdown-container {
  position: relative;
  display: inline-block;
}

/* 触发器 */
.dropdown-trigger {
  display: inline-block;
  cursor: pointer;
}

/* 下拉菜单 */
.dropdown {
  position: absolute;
  z-index: 1000;
  background-color: var(--color-bg-default);
  border: 1px solid var(--color-stroke-default);
  border-radius: var(--radius-medium);
  padding: var(--space-100);
  box-shadow: var(--elevation-shadow-light-100);
  overflow-y: auto;
  max-height: 250px;
}

/* 下拉菜单项 */
.dropdown-item {
  display: block;
  padding: var(--space-100) var(--space-200);
  border-radius: var(--radius-small);
  font: var(--font-14-regular);
  color: var(--color-text-primary);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.dropdown-item:hover {
  background-color: var(--color-bg-hover);
}

.dropdown-item-active {
  background-color: var(--color-brand-subtlest);
  color: var(--color-brand-default);
}

.dropdown-item-disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
  pointer-events: none;
}

/* 分割线 */
.dropdown-divider {
  height: 1px;
  margin: var(--space-100) 0;
  background-color: var(--color-stroke-divider);
}

/* 动画效果 */
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style> 