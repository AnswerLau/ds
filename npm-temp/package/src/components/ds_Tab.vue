<template>
  <div class="tab-container" :class="[`tab-${type}`]">
    <!-- 标签页头部 -->
    <div class="tab-header" :class="[`tab-header-${position}`]">
      <div 
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-item"
        :class="{
          'tab-item-active': modelValue === tab.name,
          'tab-item-disabled': tab.disabled
        }"
        @click="handleTabClick(tab)"
      >
        <!-- 图标 -->
        <ds_icon 
          v-if="tab.icon" 
          :name="tab.icon" 
          :size="iconSize"
          class="tab-item-icon"
        />
        
        <!-- 文本 -->
        <span class="tab-item-label">{{ tab.label }}</span>
      </div>
      
      <!-- 激活标记 -->
      <div 
        v-if="type === 'line'"
        class="tab-active-bar"
        :style="activeBarStyle"
      ></div>
    </div>
    
    <!-- 标签页内容 -->
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Tab',
  components: {
    ds_icon: DsIcon
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number],
      required: true
    },
    // 标签页类型
    type: {
      type: String,
      default: 'line',
      validator: (value) => ['line', 'card'].includes(value)
    },
    // 标签页位置
    position: {
      type: String,
      default: 'top',
      validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value)
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: 'small'
    },
    // 标签页数据
    tabs: {
      type: Array,
      required: true,
      validator: (tabs) => {
        return tabs.every(tab => 
          tab.hasOwnProperty('name') && 
          tab.hasOwnProperty('label')
        );
      }
    }
  },
  data() {
    return {
      activeBarStyle: {
        transform: 'translateX(0px)',
        width: '0px'
      }
    };
  },
  watch: {
    // 监听激活标签变化，更新激活标记位置
    modelValue: {
      handler() {
        this.$nextTick(() => {
          this.updateActiveBar();
        });
      },
      immediate: true
    }
  },
  mounted() {
    this.updateActiveBar();
    // 窗口大小变化时更新激活标记位置
    window.addEventListener('resize', this.updateActiveBar);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateActiveBar);
  },
  methods: {
    // 处理标签点击事件
    handleTabClick(tab) {
      if (tab.disabled) return;
      
      this.$emit('update:modelValue', tab.name);
      this.$emit('tab-click', tab);
    },
    
    // 更新激活标记位置
    updateActiveBar() {
      if (this.type !== 'line') return;
      
      const activeIndex = this.tabs.findIndex(tab => tab.name === this.modelValue);
      if (activeIndex === -1) return;
      
      const tabItems = this.$el.querySelectorAll('.tab-item');
      if (!tabItems.length) return;
      
      const activeTabEl = tabItems[activeIndex];
      if (!activeTabEl) return;
      
      // 获取激活标签的位置信息
      const rect = activeTabEl.getBoundingClientRect();
      const parentRect = this.$el.querySelector('.tab-header').getBoundingClientRect();
      
      // 根据标签页位置更新激活标记样式
      if (this.position === 'top' || this.position === 'bottom') {
        this.activeBarStyle = {
          transform: `translateX(${activeTabEl.offsetLeft}px)`,
          width: `${rect.width}px`
        };
      } else {
        this.activeBarStyle = {
          transform: `translateY(${activeTabEl.offsetTop}px)`,
          height: `${rect.height}px`,
          width: '2px'
        };
      }
    }
  }
}
</script>

<style>
/* 标签页容器 */
.tab-container {
  display: flex;
  flex-direction: column;
}

/* 横向布局 */
.tab-container.tab-header-top {
  flex-direction: column;
}

.tab-container.tab-header-bottom {
  flex-direction: column-reverse;
}

/* 纵向布局 */
.tab-container.tab-header-left {
  flex-direction: row;
}

.tab-container.tab-header-right {
  flex-direction: row-reverse;
}

/* 标签页头部 */
.tab-header {
  position: relative;
  display: flex;
  border-bottom: 1px solid var(--color-stroke-divider);
}

/* 横向布局的标签页头部 */
.tab-header-top,
.tab-header-bottom {
  flex-direction: row;
}

/* 纵向布局的标签页头部 */
.tab-header-left,
.tab-header-right {
  flex-direction: column;
  border-bottom: none;
}

.tab-header-left {
  border-right: 1px solid var(--color-stroke-divider);
}

.tab-header-right {
  border-left: 1px solid var(--color-stroke-divider);
}

/* 标签项 */
.tab-item {
  display: flex;
  align-items: center;
  padding: var(--space-200) var(--space-300);
  cursor: pointer;
  transition: all 0.2s;
  font: var(--font-14-medium);
  color: var(--color-text-secondary);
}

.tab-item:hover {
  color: var(--color-brand-default);
}

.tab-item-active {
  color: var(--color-brand-default);
}

.tab-item-disabled {
  color: var(--color-text-disabled);
  cursor: not-allowed;
}

/* 卡片式标签 */
.tab-card .tab-item {
  border: 1px solid var(--color-stroke-divider);
  border-radius: var(--radius-medium) var(--radius-medium) 0 0;
  margin-right: var(--space-100);
  background-color: var(--color-bg-subtlest);
}

.tab-card .tab-item-active {
  background-color: var(--color-bg-default);
  border-bottom-color: transparent;
}

/* 标签图标 */
.tab-item-icon {
  margin-right: var(--space-100);
}

/* 激活标记 */
.tab-active-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: var(--color-brand-default);
  transition: transform 0.3s ease, width 0.3s ease, height 0.3s ease;
  z-index: 1;
}

/* 纵向布局的激活标记 */
.tab-header-left .tab-active-bar {
  left: auto;
  right: 0;
  bottom: auto;
  top: 0;
}

.tab-header-right .tab-active-bar {
  right: auto;
  left: 0;
  bottom: auto;
  top: 0;
}

/* 标签内容 */
.tab-content {
  padding: var(--space-300);
}
</style> 