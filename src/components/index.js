import Button from './ds_Button.vue';
import Icon from './ds_Icon.vue';
import Input from './ds_Input.vue';
import Checkbox from './ds_Checkbox.vue';
import Radio from './ds_Radio.vue';
import Toggle from './ds_Toggle.vue';
import Alert from './ds_Alert.vue';
import Tooltip from './ds_Tooltip.vue';
import Select from './ds_Select.vue';
import Dropdown from './ds_Dropdown.vue';
import Tab from './ds_Tab.vue';
import Slider from './ds_Slider.vue';
import Message from './ds_Message.vue';
import message from './message';

// 导入全局样式
import '../styles/main.css';

// 组件列表
const components = {
  Button,
  Icon,
  Input,
  Checkbox,
  Radio, 
  Toggle,
  Alert,
  Tooltip,
  Select,
  Dropdown,
  Tab,
  Slider,
  Message
};

// 检测运行环境并动态加载样式
const loadStyles = () => {
  if (typeof document !== 'undefined') {
    // 检测是否已经加载了样式
    const styleLoaded = document.querySelector('link[href*="design-system.css"]');
    
    if (!styleLoaded) {
      // 尝试确定样式文件的路径
      let stylePath = './dist/styles/design-system.css'; // 默认路径
      
      // 尝试基于当前脚本路径推断样式路径
      const scriptEls = document.querySelectorAll('script');
      for (let i = 0; i < scriptEls.length; i++) {
        const src = scriptEls[i].src || '';
        if (src.includes('design-system.min.js') || src.includes('design-system.js')) {
          // 从脚本路径推断样式路径
          stylePath = src.replace(/\/design-system(\.min)?\.js/, '/styles/design-system.css');
          break;
        }
      }
      
      // 创建并附加样式链接
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = stylePath;
      link.onload = () => console.log('设计系统样式已加载:', stylePath);
      link.onerror = (err) => console.error('设计系统样式加载失败:', stylePath, err);
      
      // 添加到头部
      document.head.appendChild(link);
    }
  }
};

// 安装方法 - 改进以支持Vue 3
const install = function(app) {
  if (!app || !app.component) {
    console.error('DesignSystem安装失败：app实例无效或不存在component方法');
    return;
  }
  
  console.log('Installing Design System components...');
  
  // 尝试加载样式
  loadStyles();
  
  // 注册所有组件
  Object.keys(components).forEach(key => {
    const component = components[key];
    if (component.name) {
      // 以kebab-case方式注册组件 (ds_Button -> ds-button)
      const kebabName = component.name.replace(/_/g, '-').toLowerCase();
      console.log(`注册组件: ${kebabName}`);
      app.component(kebabName, component);
    }
  });
  
  // 添加实例方法
  if (app.config && app.config.globalProperties) {
    app.config.globalProperties.$message = message;
  }
  
  console.log('Design System installation complete');
  return app;
};

// 兼容Vue 2的全局安装
if (typeof window !== 'undefined' && window.Vue) {
  if (window.Vue.createApp) {
    // Vue 3 - do nothing, wait for app.use()
    console.log('检测到Vue 3环境，请使用app.use(DesignSystem)安装');
  } else if (window.Vue.component) {
    // Vue 2 - register components globally
    console.log('检测到Vue 2环境，正在进行全局安装');
    install({ component: window.Vue.component, config: { globalProperties: window.Vue.prototype } });
  }
}

// 确保每个组件都有正确的install方法
Object.keys(components).forEach(key => {
  const component = components[key];
  if (component && typeof component === 'object') {
    component.install = function(app) {
      // 尝试加载样式
      loadStyles();
      
      if (component.name) {
        const name = component.name.replace(/_/g, '-').toLowerCase();
        app.component(name, component);
      }
      return app;
    };
  }
});

// 创建组件库对象
const DesignSystem = {
  version: '1.0.2',
  install,
  loadStyles, // 导出样式加载方法
  ...components
};

// 添加组件实例方法
DesignSystem.message = message;

// 添加支持Vue 3的install方法
DesignSystem.install = install;

// 暴露到全局
if (typeof window !== 'undefined') {
  window.DesignSystem = DesignSystem;
  // 自动加载样式（CDN环境）
  setTimeout(loadStyles, 0);
}

export default DesignSystem;

// 导出单个组件
export {
  Button,
  Icon,
  Input,
  Checkbox,
  Radio,
  Toggle,
  Alert,
  Tooltip,
  Select,
  Dropdown,
  Tab,
  Slider,
  Message,
  message,
  install,
  loadStyles
}; 