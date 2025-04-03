<template>
  <span 
    class="icon" 
    :class="{ [`icon-${size}`]: size }" 
  >
    <img v-if="svgUrl" :src="svgUrl" class="icon-svg" :class="{ 'rotating': name === 'loading' }" alt="" @error="handleError" />
    <span v-else>{{ name }}</span>
  </span>
</template>

<script>
export default {
  name: 'ds_Icon',
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    color: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      hasError: false
    };
  },
  computed: {
    svgUrl() {
      if (this.hasError) return null;
      
      try {
        // 尝试加载SVG文件
        return new URL(`../assets/icons/${this.name}.svg`, import.meta.url).href;
      } catch (error) {
        console.error(`Icon ${this.name} not found:`, error);
        this.hasError = true;
        return null;
      }
    }
  },
  methods: {
    handleError(e) {
      console.error(`Failed to load icon ${this.name}:`, e);
      this.hasError = true;
    }
  }
}
</script>

<style>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  line-height: 1;
  vertical-align: middle;
}

.icon-svg {
  width: 16px;
  height: 16px;
  color: inherit;
  display: block;
}

.icon-small .icon-svg {
  width: 12px;
  height: 12px;
}

.icon-medium .icon-svg {
  width: 16px;
  height: 16px;
}

.icon-large .icon-svg {
  width: 20px;
  height: 20px;
}

.icon-xlarge .icon-svg {
  width: 24px;
  height: 24px;
}

.rotating {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style> 