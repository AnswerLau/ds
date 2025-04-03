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

// 组件映射表
const componentMap = {
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

// 所有组件列表
const components = Object.values(componentMap);

// 转换组件名称为kebab-case
const toCamelCase = str => str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
const toKebabCase = str => str.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');

// 定义安装方法
const install = (app) => {
  // 记录安装开始
  console.log('Installing Design System components...');
  
  // 遍历注册全局组件
  components.forEach(component => {
    const name = component.name; // 直接使用组件的name属性
    if (name) {
      try {
        // 以原始名称注册
        app.component(name, component);
        console.log(`Registered component with original name: ${name}`);
        
        // 以kebab-case名称注册 (ds_Button -> ds-button)
        const kebabName = name.replace(/_/g, '-').toLowerCase();
        if (kebabName !== name) {
          app.component(kebabName, component);
          console.log(`Registered component with kebab-case name: ${kebabName}`);
        }
        
        // 以camelCase名称注册 (ds_Button -> dsButton)
        const camelName = name.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
        if (camelName !== name) {
          app.component(camelName, component);
          console.log(`Registered component with camelCase name: ${camelName}`);
        }
      } catch (error) {
        console.error(`Failed to register component ${name}:`, error);
      }
    } else {
      console.warn('Component without name property:', component);
    }
  });
  
  // 添加实例方法 (Vue 3 方式)
  if (app.config && app.config.globalProperties) {
    app.config.globalProperties.$message = message;
    console.log('Added $message to globalProperties');
  } else {
    console.warn('Unable to add $message - globalProperties not available');
  }

  // 记录安装完成
  console.log('Design System installation complete');
  
  return app;
};

// 支持CDN的自动安装 (兼容Vue 2和Vue 3)
if (typeof window !== 'undefined' && window.Vue) {
  console.log('Auto-installing for global Vue:', window.Vue.version);
  
  const Vue = window.Vue;
  // 判断是Vue 2还是Vue 3
  if (Vue.version && Vue.version.startsWith('2.')) {
    // Vue 2
    if (typeof window.Vue.use === 'function') {
      window.Vue.use({ install });
      console.log('Installed for Vue 2 via window.Vue.use');
    } else {
      console.warn('window.Vue.use is not a function, cannot auto-install');
    }
  } else {
    // Vue 3
    if (typeof window.Vue.createApp === 'function') {
      const app = window.Vue.createApp({});
      install(app);
      console.log('Applied to Vue 3 app via install function');
    } else {
      console.warn('window.Vue.createApp is not a function, cannot auto-install');
    }
  }
}

// 创建包含所有组件的默认导出对象
const DesignSystem = {
  install,
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
  message
};

// 导出各个组件
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
  message
};

// 导出默认对象
export default DesignSystem; 