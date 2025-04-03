<template>
  <div 
    class="select-wrapper"
    :class="[
      `select-${size}`,
      { 
        'select-disabled': disabled,
        'select-focused': isFocused,
        'select-open': isOpen
      }
    ]"
    @click="toggleDropdown"
    @keydown.esc="closeDropdown"
    @keydown.down.prevent="focusNextItem"
    @keydown.up.prevent="focusPrevItem"
    @keydown.enter.prevent="selectFocusedItem"
    tabindex="0"
    @blur="handleBlur"
    @focus="handleFocus"
  >
    <!-- 选择框 -->
    <div class="select-inner">
      <!-- 选中的值 -->
      <div class="select-value">
        <span v-if="selectedLabel">
          <ds_icon v-if="selectedOption && selectedOption.icon" :name="selectedOption.icon" :size="iconSize" class="select-icon" />
          {{ selectedLabel }}
        </span>
        <span v-else class="select-placeholder">{{ placeholder }}</span>
      </div>
      
      <!-- 箭头图标 -->
      <div class="select-arrow" :class="{ 'rotate': isOpen }">
        <ds_icon name="chevron-down" :size="arrowSize" />
      </div>
    </div>
    
    <!-- 下拉选项列表 -->
    <transition name="select-dropdown-fade">
      <div 
        v-show="isOpen"
        class="select-dropdown"
        :style="dropdownStyle"
      >
        <ul class="select-options">
          <li 
            v-for="(option, index) in options" 
            :key="option.value"
            class="select-option"
            :class="{ 
              'select-option-selected': modelValue === option.value,
              'select-option-focused': focusedIndex === index
            }"
            @click.stop="selectOption(option)"
            @mouseenter="focusedIndex = index"
          >
            <ds_icon v-if="option.icon" :name="option.icon" :size="iconSize" class="select-option-icon" />
            {{ option.label }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import DsIcon from './ds_Icon.vue';

export default {
  name: 'ds_Select',
  components: {
    ds_icon: DsIcon
  },
  props: {
    // v-model 绑定值
    modelValue: {
      type: [String, Number, Boolean, Object],
      default: ''
    },
    // 选项数组
    options: {
      type: Array,
      default: () => [],
      validator: (options) => {
        return options.every(option => 
          option.hasOwnProperty('value') && 
          option.hasOwnProperty('label')
        );
      }
    },
    // 占位文本
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 选择框尺寸
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  },
  data() {
    return {
      isOpen: false,
      isFocused: false,
      focusedIndex: -1,
      dropdownStyle: {
        width: 'auto'
      }
    };
  },
  computed: {
    // 选中项的标签
    selectedLabel() {
      const selectedOption = this.options.find(option => option.value === this.modelValue);
      return selectedOption ? selectedOption.label : '';
    },
    // 选中的选项
    selectedOption() {
      return this.options.find(option => option.value === this.modelValue);
    },
    // 箭头图标尺寸
    arrowSize() {
      return this.size === 'small' ? 'small' : this.size === 'large' ? 'large' : 'medium';
    },
    // 选项图标尺寸
    iconSize() {
      return this.size === 'small' ? 'small' : this.size === 'large' ? 'medium' : 'small';
    }
  },
  mounted() {
    // 添加点击外部关闭下拉菜单的事件监听
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    // 移除事件监听
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    // 切换下拉菜单显示状态
    toggleDropdown() {
      if (this.disabled) return;
      
      this.isOpen = !this.isOpen;
      
      if (this.isOpen) {
        this.updateDropdownWidth();
        this.focusedIndex = this.getSelectedIndex();
      }
    },
    
    // 关闭下拉菜单
    closeDropdown() {
      this.isOpen = false;
    },
    
    // 处理失焦事件
    handleBlur() {
      this.isFocused = false;
      // 延迟关闭，防止点击选项时立即关闭导致选项无法选中
      setTimeout(() => {
        if (!this.isOpen) return;
        this.closeDropdown();
      }, 100);
    },
    
    // 处理聚焦事件
    handleFocus() {
      if (this.disabled) return;
      this.isFocused = true;
    },
    
    // 处理点击外部关闭下拉菜单
    handleClickOutside(event) {
      if (this.$el && !this.$el.contains(event.target)) {
        this.closeDropdown();
      }
    },
    
    // 选择选项
    selectOption(option) {
      if (this.modelValue === option.value) {
        this.closeDropdown();
        return;
      }
      
      this.$emit('update:modelValue', option.value);
      this.$emit('change', option.value);
      this.closeDropdown();
    },
    
    // 获取当前选中项的索引
    getSelectedIndex() {
      return this.options.findIndex(option => option.value === this.modelValue);
    },
    
    // 聚焦下一个选项
    focusNextItem() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.updateDropdownWidth();
        this.focusedIndex = this.getSelectedIndex();
        return;
      }
      
      if (this.focusedIndex < this.options.length - 1) {
        this.focusedIndex++;
      } else {
        this.focusedIndex = 0;
      }
    },
    
    // 聚焦上一个选项
    focusPrevItem() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.updateDropdownWidth();
        this.focusedIndex = this.getSelectedIndex();
        return;
      }
      
      if (this.focusedIndex > 0) {
        this.focusedIndex--;
      } else {
        this.focusedIndex = this.options.length - 1;
      }
    },
    
    // 选择当前聚焦的选项
    selectFocusedItem() {
      if (!this.isOpen) {
        this.isOpen = true;
        this.updateDropdownWidth();
        return;
      }
      
      if (this.focusedIndex >= 0 && this.focusedIndex < this.options.length) {
        this.selectOption(this.options[this.focusedIndex]);
      }
    },
    
    // 更新下拉菜单宽度，使其与选择框相同
    updateDropdownWidth() {
      this.$nextTick(() => {
        if (this.$el) {
          const width = this.$el.offsetWidth;
          this.dropdownStyle = {
            width: `${width}px`
          };
        }
      });
    }
  }
}
</script>

<style>
/* 选择框容器 */
.select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: all 0.2s;
}

/* 选择框外观 */
.select-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-bg-surface);
  border: 1px solid transparent;
  min-height: 36px;
  box-sizing: border-box;
  transition: all 0.2s;
}

.select-inner:hover {
  background-color: var(--color-bg-hover);
  border: 1px solid var(--color-stroke-default);
}

/* 选择框值 */
.select-value {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font: var(--font-14-regular);
  color: var(--color-text-primary);
}

/* 选择框占位符 */
.select-placeholder {
  color: var(--color-text-tertiary);
}

/* 选择框箭头 */
.select-arrow {
  color: var(--color-text-tertiary);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.select-arrow.rotate {
  transform: rotate(180deg);
}

/* 下拉菜单 */
.select-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  max-height: 200px;
  overflow-y: auto;
  background-color: var(--color-bg-default);
  border: 1px solid var(--color-stroke-default);
  box-shadow: var(--elevation-shadow-light-100);
}

.select-small .select-dropdown {
  border-radius: var(--radius-small);
}

.select-medium .select-dropdown {
  border-radius: var(--radius-medium);
}

.select-large .select-dropdown {
  border-radius: var(--radius-large);
}

/* 选项列表 */
.select-options {
  list-style: none;
  margin: 0;
  padding: var(--space-50) 0;
}

/* 选项图标 */
.select-icon,
.select-option-icon {
  margin-right: var(--space-100);
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

/* 选项 */
.select-option {
  padding: var(--space-100) var(--space-200);
  font: var(--font-14-regular);
  color: var(--color-text-primary);
  transition: all 0.2s;
  display: flex;
  align-items: center;
}

.select-option:hover,
.select-option-focused {
  background-color: var(--color-bg-subtlest);
}

.select-option-selected {
  background-color: var(--color-brand-subtlest);
  color: var(--color-brand-default);
  font-weight: 500;
}

/* 聚焦状态 */
.select-focused .select-inner {
  border-color: var(--color-brand-default);
  color: var(--color-bg-default);
  box-shadow: 0 0 0 2px var(--color-brand-subtlest);
}

/* 禁用状态 */
.select-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.select-disabled .select-inner {
  background-color: var(--color-bg-subtlest);
  border-color: var(--color-stroke-disabled);
}

/* 尺寸变体 */
.select-small .select-inner {
  min-height: 24px;
  padding: var(--space-50) var(--space-50);
  border-radius: var(--radius-small);
}

.select-small .select-value {
  font: var(--font-12-regular);
}

.select-medium .select-inner {
  min-height: 32px;
  padding: var(--space-50) var(--space-100);
  border-radius: var(--radius-medium);
}

.select-medium .select-value {
  font: var(--font-14-regular);
}

.select-large .select-inner {
  min-height: 40px;
  padding: var(--space-50) var(--space-150);
  border-radius: var(--radius-large);
}

.select-large .select-value {
  font: var(--font-16-regular);
}

/* 下拉菜单动画 */
.select-dropdown-fade-enter-active,
.select-dropdown-fade-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}

.select-dropdown-fade-enter-from,
.select-dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style> 