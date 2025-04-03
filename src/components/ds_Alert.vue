<template>
  <transition name="alert-fade">
    <div 
      v-if="visible"
      class="alert"
      :class="[
        `alert-${type}`,
        { 'alert-with-icon': showIcon }
      ]"
      role="alert"
    >
      <!-- 图标 -->
      <span v-if="showIcon" class="alert-icon">
        <ds_icon :name="iconName" :size="iconSize" />
      </span>
      
      <!-- 内容区域 -->
      <div class="alert-content">
        <!-- 标题 -->
        <div v-if="title" class="alert-title">{{ title }}</div>
        
        <!-- 描述 -->
        <div class="alert-description">
          <slot></slot>
        </div>
      </div>
      
      <!-- 关闭按钮 -->
      <span 
        v-if="closable" 
        class="alert-close"
        @click="handleClose"
      >
        <ds_icon name="close" size="small" />
      </span>
    </div>
  </transition>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Alert',
  components: {
    ds_icon: DsIcon
  },
  props: {
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 类型
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error'].includes(value)
    },
    // 是否显示图标
    showIcon: {
      type: Boolean,
      default: false
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: false
    },
    // 图标尺寸
    iconSize: {
      type: String,
      default: 'medium'
    }
  },
  data() {
    return {
      visible: true
    };
  },
  computed: {
    // 根据类型计算图标名称
    iconName() {
      const iconMap = {
        info: 'info-circle',
        success: 'check-circle',
        warning: 'warning',
        error: 'close-circle'
      };
      return iconMap[this.type] || 'info-circle';
    }
  },
  methods: {
    // 处理关闭事件
    handleClose() {
      this.visible = false;
      this.$emit('close');
    }
  }
}
</script>

<style>
/* Alert 基础样式 */
.alert {
  display: flex;
  position: relative;
  padding: var(--space-200);
  border-radius: var(--radius-medium);
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s;
  margin-bottom: var(--space-200);
}

/* Alert 内容区域 */
.alert-content {
  flex: 1;
}

/* Alert 标题 */
.alert-title {
  font: var(--font-16-medium);
  color: inherit;
  margin-bottom: var(--space-50);
}

/* Alert 描述 */
.alert-description {
  font: var(--font-14-regular);
  color: inherit;
}

/* 带图标的 Alert */
.alert-with-icon {
  padding-left: var(--space-400);
}

/* Alert 图标 */
.alert-icon {
  position: absolute;
  left: var(--space-200);
  top: var(--space-200);
  color: inherit;
}

/* Alert 关闭按钮 */
.alert-close {
  position: absolute;
  top: var(--space-150);
  right: var(--space-150);
  cursor: pointer;
  color: inherit;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.alert-close:hover {
  opacity: 1;
}

/* Alert 类型样式 */
.alert-info {
  background-color: var(--color-blue-subtlest);
  border: 1px solid var(--color-blue-default);
  color: var(--color-blue-default);
}

.alert-success {
  background-color: var(--color-green-subtlest);
  border: 1px solid var(--color-green-default);
  color: var(--color-green-default);
}

.alert-warning {
  background-color: var(--color-warning-subtlest);
  border: 1px solid var(--color-warning-default);
  color: var(--color-warning-default);
}

.alert-error {
  background-color: var(--color-red-subtlest);
  border: 1px solid var(--color-red-default);
  color: var(--color-red-default);
}

/* Alert 淡入淡出动画 */
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.alert-fade-enter-from,
.alert-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 