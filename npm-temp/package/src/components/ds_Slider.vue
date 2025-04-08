<template>
  <div 
    class="slider-container"
    :class="{ 
      'slider-disabled': disabled,
      'slider-vertical': vertical,
      'slider-with-input': showInput
    }"
  >
    <!-- 滑块主体 -->
    <div 
      ref="slider"
      class="slider"
      @click="handleSliderClick"
    >
      <!-- 滑块轨道 -->
      <div class="slider-runway"></div>
      
      <!-- 已选择的轨道 -->
      <div 
        class="slider-bar"
        :style="barStyle"
      ></div>
      
      <!-- 滑块按钮 -->
      <div 
        ref="button"
        class="slider-button-wrapper"
        :style="buttonStyle"
        @mousedown="handleMouseDown"
        @touchstart="handleTouchStart"
      >
        <div class="slider-button"></div>
        
        <!-- 提示气泡 -->
        <div 
          v-if="showTooltip && isDragging"
          class="slider-tooltip"
        >
          <span class="slider-tooltip-text">{{ formattedValue }}</span>
        </div>
      </div>
      
      <!-- 刻度标记 -->
      <div 
        v-if="showStops"
        v-for="(stop, index) in stops"
        :key="index"
        class="slider-stop"
        :style="getStopStyle(stop)"
      ></div>
    </div>
    
    <!-- 输入框 -->
    <div v-if="showInput" class="slider-input-wrapper">
      <input
        type="number"
        class="slider-input"
        :value="modelValue"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        @input="handleInputChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ds_Slider',
  props: {
    // v-model 绑定值
    modelValue: {
      type: Number,
      default: 0
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 步长
    step: {
      type: Number,
      default: 1
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示输入框
    showInput: {
      type: Boolean,
      default: false
    },
    // 是否显示提示气泡
    showTooltip: {
      type: Boolean,
      default: true
    },
    // 是否显示间断点
    showStops: {
      type: Boolean,
      default: false
    },
    // 是否竖向模式
    vertical: {
      type: Boolean,
      default: false
    },
    // 高度（竖向模式）
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      isDragging: false,
      startX: 0,
      startY: 0,
      startPosition: 0,
      currentValue: this.modelValue,
      sliderSize: 0
    };
  },
  computed: {
    // 格式化后的值
    formattedValue() {
      return this.currentValue.toFixed(0);
    },
    
    // 计算滑块位置（百分比）
    valuePercent() {
      if (this.max - this.min === 0) return 0;
      return ((this.currentValue - this.min) / (this.max - this.min)) * 100;
    },
    
    // 滑块按钮样式
    buttonStyle() {
      return this.vertical
        ? { bottom: `${this.valuePercent}%` }
        : { left: `${this.valuePercent}%` };
    },
    
    // 已选择的轨道样式
    barStyle() {
      return this.vertical
        ? { height: `${this.valuePercent}%` }
        : { width: `${this.valuePercent}%` };
    },
    
    // 计算间断点的位置
    stops() {
      if (!this.showStops || this.min > this.max) return [];
      
      const stops = [];
      const stepCount = (this.max - this.min) / this.step;
      
      for (let i = 1; i < stepCount; i++) {
        const value = this.min + i * this.step;
        const percent = ((value - this.min) / (this.max - this.min)) * 100;
        stops.push(percent);
      }
      
      return stops;
    }
  },
  watch: {
    // 监听 modelValue 变化
    modelValue: {
      handler(val) {
        this.currentValue = val;
      },
      immediate: true
    }
  },
  mounted() {
    this.sliderSize = this.vertical
      ? this.$refs.slider.clientHeight
      : this.$refs.slider.clientWidth;
    
    window.addEventListener('resize', this.updateSliderSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSliderSize);
    this.removeDocumentEvents();
  },
  methods: {
    // 处理滑块点击事件
    handleSliderClick(event) {
      if (this.disabled) return;
      
      // 阻止冒泡，防止当按钮放在滑块上时触发两次事件
      if (this.$refs.button && this.$refs.button.contains(event.target)) {
        return;
      }
      
      const sliderRect = this.$refs.slider.getBoundingClientRect();
      let position;
      
      if (this.vertical) {
        position = (sliderRect.bottom - event.clientY) / this.sliderSize;
      } else {
        position = (event.clientX - sliderRect.left) / this.sliderSize;
      }
      
      this.setPosition(position);
    },
    
    // 处理鼠标按下事件
    handleMouseDown(event) {
      if (this.disabled) return;
      
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;
      this.startPosition = this.valuePercent / 100;
      
      document.addEventListener('mousemove', this.handleMouseMove);
      document.addEventListener('mouseup', this.handleMouseUp);
      
      // 阻止默认事件，防止拖动时选中其他元素
      event.preventDefault();
    },
    
    // 处理鼠标移动事件
    handleMouseMove(event) {
      if (!this.isDragging) return;
      
      const sliderRect = this.$refs.slider.getBoundingClientRect();
      
      let diff;
      if (this.vertical) {
        const clientY = event.clientY;
        diff = (this.startY - clientY) / this.sliderSize;
      } else {
        const clientX = event.clientX;
        diff = (clientX - this.startX) / this.sliderSize;
      }
      
      const newPosition = Math.min(Math.max(this.startPosition + diff, 0), 1);
      this.setPosition(newPosition);
    },
    
    // 处理鼠标释放事件
    handleMouseUp() {
      if (!this.isDragging) return;
      
      this.isDragging = false;
      this.removeDocumentEvents();
    },
    
    // 处理触摸开始事件
    handleTouchStart(event) {
      if (this.disabled) return;
      
      this.isDragging = true;
      const touch = event.touches[0];
      this.startX = touch.clientX;
      this.startY = touch.clientY;
      this.startPosition = this.valuePercent / 100;
      
      document.addEventListener('touchmove', this.handleTouchMove);
      document.addEventListener('touchend', this.handleTouchEnd);
      document.addEventListener('touchcancel', this.handleTouchEnd);
      
      // 阻止默认事件，防止滚动
      event.preventDefault();
    },
    
    // 处理触摸移动事件
    handleTouchMove(event) {
      if (!this.isDragging) return;
      
      const touch = event.touches[0];
      
      let diff;
      if (this.vertical) {
        const clientY = touch.clientY;
        diff = (this.startY - clientY) / this.sliderSize;
      } else {
        const clientX = touch.clientX;
        diff = (clientX - this.startX) / this.sliderSize;
      }
      
      const newPosition = Math.min(Math.max(this.startPosition + diff, 0), 1);
      this.setPosition(newPosition);
      
      // 阻止默认事件，防止滚动
      event.preventDefault();
    },
    
    // 处理触摸结束事件
    handleTouchEnd() {
      if (!this.isDragging) return;
      
      this.isDragging = false;
      document.removeEventListener('touchmove', this.handleTouchMove);
      document.removeEventListener('touchend', this.handleTouchEnd);
      document.removeEventListener('touchcancel', this.handleTouchEnd);
    },
    
    // 处理输入框变更事件
    handleInputChange(event) {
      const value = parseFloat(event.target.value);
      if (isNaN(value)) return;
      
      const newValue = this.setValueByPosition(Math.max(Math.min(value, this.max), this.min) / (this.max - this.min));
      this.updateValue(newValue);
    },
    
    // 移除文档事件监听
    removeDocumentEvents() {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseup', this.handleMouseUp);
    },
    
    // 更新滑块尺寸
    updateSliderSize() {
      this.sliderSize = this.vertical
        ? this.$refs.slider.clientHeight
        : this.$refs.slider.clientWidth;
    },
    
    // 设置滑块位置
    setPosition(position) {
      const newValue = this.setValueByPosition(position);
      this.updateValue(newValue);
    },
    
    // 根据位置计算值
    setValueByPosition(position) {
      const range = this.max - this.min;
      let value = this.min + range * position;
      
      // 应用步长
      if (this.step > 0) {
        value = Math.round(value / this.step) * this.step;
      }
      
      return parseFloat(value.toFixed(5));
    },
    
    // 更新值并触发事件
    updateValue(value) {
      if (value === this.currentValue) return;
      
      this.currentValue = value;
      this.$emit('update:modelValue', value);
      this.$emit('change', value);
    },
    
    // 获取刻度标记的样式
    getStopStyle(percent) {
      return this.vertical
        ? { bottom: `${percent}%` }
        : { left: `${percent}%` };
    }
  }
}
</script>

<style>
/* 滑块容器 */
.slider-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
}

/* 滑块 */
.slider {
  position: relative;
  flex: 1;
  height: 6px;
  border-radius: var(--radius-xxxlarge);
  background-color: var(--color-bg-subtlest);
  cursor: pointer;
}

/* 滑块轨道 */
.slider-runway {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-bg-subtlest);
  border-radius: var(--radius-xxxlarge);
}

/* 已选择的轨道 */
.slider-bar {
  position: absolute;
  height: 100%;
  background-color: var(--color-brand-default);
  border-radius: var(--radius-xxxlarge);
  transition: all 0.2s;
}

/* 滑块按钮包装器 */
.slider-button-wrapper {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s;
}

.slider-button-wrapper:hover {
  transform: translateY(-50%) scale(1.1);
}

/* 滑块按钮 */
.slider-button {
  width: 16px;
  height: 16px;
  border-radius: var(--radius-circle);
  background-color: var(--color-bg-default);
  border: 2px solid var(--color-brand-default);
  box-shadow: var(--elevation-shadow-light-100);
  transition: transform 0.2s;
}

/* 滑块提示气泡 */
.slider-tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-brand-default);
  color: var(--color-text-inverse);
  padding: var(--space-50) var(--space-100);
  border-radius: var(--radius-small);
  font: var(--font-12-medium);
  white-space: nowrap;
}

.slider-tooltip::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid var(--color-brand-default);
}

/* 刻度标记 */
.slider-stop {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: var(--color-bg-subtlest);
  border-radius: var(--radius-circle);
  transform: translateX(-50%);
  top: 1px;
}

/* 输入框 */
.slider-input-wrapper {
  margin-left: var(--space-300);
  width: 70px;
}

.slider-input {
  width: 100%;
  height: 32px;
  padding: var(--space-50) var(--space-100);
  border: 1px solid var(--color-stroke-default);
  border-radius: var(--radius-medium);
  font: var(--font-14-regular);
  color: var(--color-text-primary);
  background-color: var(--color-bg-default);
  outline: none;
  transition: all 0.2s;
}

.slider-input:focus {
  border-color: var(--color-brand-default);
  box-shadow: 0 0 0 2px var(--color-brand-subtlest);
}

/* 禁用状态 */
.slider-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-disabled .slider,
.slider-disabled .slider-button {
  cursor: not-allowed;
}

.slider-disabled .slider-bar {
  background-color: var(--color-text-disabled);
}

.slider-disabled .slider-button {
  border-color: var(--color-text-disabled);
}

/* 竖向模式 */
.slider-vertical {
  flex-direction: column;
  height: auto;
  width: 40px;
}

.slider-vertical .slider {
  width: 6px;
  height: 200px;
}

.slider-vertical .slider-bar {
  width: 100%;
  height: auto;
  bottom: 0;
}

.slider-vertical .slider-button-wrapper {
  top: auto;
  left: 50%;
  transform: translateX(-50%);
}

.slider-vertical .slider-button-wrapper:hover {
  transform: translateX(-50%) scale(1.1);
}

.slider-vertical .slider-stop {
  transform: translateY(50%);
  bottom: 0;
  left: 1px;
}

.slider-vertical .slider-tooltip {
  top: 50%;
  left: -8px;
  transform: translate(-100%, -50%);
}

.slider-vertical .slider-tooltip::after {
  top: 50%;
  left: auto;
  right: -4px;
  bottom: auto;
  transform: translateY(-50%);
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid var(--color-brand-default);
}

.slider-vertical.slider-with-input {
  height: 250px;
}

.slider-vertical .slider-input-wrapper {
  margin-left: 0;
  margin-top: var(--space-300);
}
</style> 