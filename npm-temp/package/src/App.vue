<template>
  <div class="app">
    <aside class="sidebar" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <div class="logo-container" v-show="!isSidebarCollapsed">
        <img src="./assets/logo.svg" alt="Atomm Design System" class="logo-image" />
      </div>
      
      <div class="nav-section" v-show="!isSidebarCollapsed">
        <h2>基础规范</h2>
        <nav>
          <router-link to="/foundation/color">Color</router-link>
          <router-link to="/foundation/typography">Typography</router-link>
          <router-link to="/foundation/layout">Layout</router-link>
          <router-link to="/foundation/corner-radius">Corner Radius</router-link>
          <router-link to="/foundation/elevation">Elevation</router-link>
        </nav>
      </div>

      <div class="nav-section" v-show="!isSidebarCollapsed">
        <h2>组件库</h2>
        <nav>
          <router-link to="/components/button">Button</router-link>
          <router-link to="/components/input">Input</router-link>
          <router-link to="/components/select">Select</router-link>
          <router-link to="/components/dropdown">Dropdown</router-link>
          <router-link to="/components/input-number">InputNumber</router-link>
          <router-link to="/components/slider">Slider</router-link>
          <router-link to="/components/radio">Radio</router-link>
          <router-link to="/components/checkbox">Checkbox</router-link>
          <router-link to="/components/toggle">Toggle</router-link>
          <router-link to="/components/tooltip">Tooltip</router-link>
          <router-link to="/components/popover">Popover</router-link>
          <router-link to="/components/message">Message</router-link>
          <router-link to="/components/alert">Alert</router-link>
          <router-link to="/components/tab">Tab</router-link>
        </nav>
      </div>

      <div class="nav-section" v-show="!isSidebarCollapsed">
        <h2>测试页面</h2>
        <nav>
          <router-link to="/components/demo">Demo</router-link>
          <router-link to="/tools/website-audit">网页规范检测</router-link>
        </nav>
      </div>
    </aside>

    <div class="sidebar-toggle-float" @click="toggleSidebar">
      <ds_icon :name="isSidebarCollapsed ? 'arrow-right' : 'arrow-left'" size="small" />
    </div>

    <main class="content" :class="{ 'content-expanded': isSidebarCollapsed }">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import DsIcon from './components/ds_Icon.vue';

export default {
  name: 'App',
  components: {
    ds_icon: DsIcon
  },
  data() {
    return {
      isSidebarCollapsed: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
}
</script>

<style>
.app {
  display: flex;
  min-height: 100vh;
  position: relative;
}

.sidebar {
  width: 250px;
  background: var(--color-bg-subtlest);
  padding: var(--space-200);
  border-right: 1px solid var(--color-stroke-divider);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  transition: all 0.3s ease;
  z-index: 100;
}

.sidebar-collapsed {
  width: 0;
  padding: 0;
  border-right: none;
}

.logo-container {
  margin-bottom: var(--space-400);
  padding: var(--space-100);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-image {
  max-width: 100%;
  height: auto;
}

.sidebar-toggle-float {
  position: fixed;
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: var(--radius-small);
  cursor: pointer;
  background-color: var(--color-bg-subtlest);
  color: var(--color-text-secondary);
  z-index: 101;
  transition: left 0.3s ease;
}

.sidebar-toggle-float:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

.nav-section {
  margin-bottom: var(--space-300);
}

.nav-section h2 {
  font: var(--font-16-semibold);
  color: var(--color-text-tertiary);
  margin-bottom: var(--space-150);
}

nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
}

nav a {
  color: var(--color-text-secondary);
  text-decoration: none;
  padding: var(--space-100) var(--space-150);
  border-radius: 4px;
  transition: background-color 0.2s;
  font: var(--font-14-regular);
}

nav a:hover {
  background-color: var(--color-bg-hover);
  color: var(--color-text-primary);
}

nav a.router-link-active {
  background-color: var(--color-bg-active);
  color: var(--color-text-primary);
  font: var(--font-14-medium);
}

.content {
  flex: 1;
  padding: var(--space-400);
  background: var(--color-bg-default);
  margin-left: 250px;
  transition: margin-left 0.3s ease;
}

.content-expanded {
  margin-left: 0;
}
</style> 