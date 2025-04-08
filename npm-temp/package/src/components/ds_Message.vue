<template>
  <transition name="message-fade">
    <div v-if="visible" :class="['ds-message', `ds-message--${type}`]" :style="customStyle">
      <div class="ds-message-content">
        <div v-if="showIcon && iconName" class="ds-message-icon">
          <ds_icon :name="iconName" :size="iconSize" :class="{ 'rotate-icon': type === 'loading' }" />
        </div>
        <span class="ds-message-text"><slot></slot></span>
        <div v-if="closable" class="ds-message-close" @click="close">
          <ds_icon name="close" :size="iconSize || 'small'" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Message',
  components: {
    ds_icon: DsIcon
  },
  props: {
    message: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: (value) => ['info', 'success', 'warning', 'error', 'loading'].includes(value)
    },
    duration: {
      type: Number,
      default: 3000
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
    },
    iconSize: {
      type: String,
      default: 'medium'
    },
    customClass: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    offset: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      visible: true,
      timer: null,
      height: 0
    };
  },
  computed: {
    iconName() {
      switch (this.type) {
        case 'success':
          return 'msg-success';
        case 'warning':
          return 'msg-warning';
        case 'error':
          return 'msg-error';
        case 'loading':
          return 'loading'; // 使用loading图标
        default:
          return 'msg-info';
      }
    },
    customStyle() {
      return {
        top: `${this.offset}px`,
        zIndex: this.zIndex
      };
    }
  },
  mounted() {
    this.startTimer();
  },
  beforeUnmount() {
    this.clearTimer();
  },
  methods: {
    startTimer() {
      if (this.duration > 0 && this.type !== 'loading') {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    clearTimer() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
    },
    close() {
      this.visible = false;
      this.$emit('close');
      
      // 使用宏任务确保过渡动画完成后再移除元素
      setTimeout(() => {
        // 确保组件元素存在且有父节点
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      }, 300);
    }
  }
};
</script>

<style>
.ds-message {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: var(--radius-medium);
  box-shadow: var(--elevation-shadow-light-200);
  min-width: 240px;
  max-width: 80%;
  pointer-events: all;
  z-index: 9999;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid transparent;
  margin-bottom: 16px;
  will-change: opacity, transform, top;
  backdrop-filter: blur(4px);
}

.ds-message-content {
  display: flex;
  align-items: center;
  padding: 8px 0;
  width: 100%;
}

.ds-message-icon {
  margin-right: 8px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ds-message-text {
  font: var(--font-14-regular);
  padding: 0;
  flex: 1;
}

.ds-message-close {
  margin-left: 8px;
  padding: 4px;
  cursor: pointer;
  color: var(--color-text-secondary);
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ds-message-close:hover {
  color: var(--color-text-primary);
}

.ds-message--info {
  background-color: #F0F3FF;
  border-color: var(--color-blue-default);
  color: var(--color-text-primary);
}

.ds-message--info .ds-message-icon {
  color: var(--color-blue-default);
}

.ds-message--success {
  background-color: #ECFFF2;
  border-color: var(--color-green-default);
  color: var(--color-text-primary);
}

.ds-message--success .ds-message-icon {
  color: var(--color-green-default);
}

.ds-message--warning {
  background-color: #FCF3ED;
  border-color: var(--color-warning-default);
  color: var(--color-text-primary);
}

.ds-message--warning .ds-message-icon {
  color: var(--color-warning-default);
}

.ds-message--error {
  background-color: #FFF2F3;
  border-color: var(--color-red-default);
  color: var(--color-text-primary);
}

.ds-message--error .ds-message-icon {
  color: var(--color-red-default);
}

.ds-message--loading {
  background-color: #F0F3FF;
  border-color: var(--color-blue-default);
  color: var(--color-text-primary);
}

.ds-message--loading .ds-message-icon {
  color: var(--color-blue-default);
}

.with-rotate {
  animation: ds-rotate 1.2s linear infinite;
}

@keyframes ds-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.message-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.message-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.message-fade-enter-from {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}

.ds-message-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
}

.rotate-icon {
  animation: ds-rotate 1.2s linear infinite;
}

@keyframes ds-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> 