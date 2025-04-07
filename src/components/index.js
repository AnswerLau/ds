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

// 组件列表
const components = [
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
];

// 安装方法
const install = function(app) {
  // 判断是否已安装
  if (install.installed) return;
  
  console.log('Installing Design System components...');
  
  // 注册所有组件
  components.forEach(component => {
    const name = component.name;
    if (name) {
      // 以kebab-case方式注册组件 (ds_Button -> ds-button)
      const kebabName = name.replace(/_/g, '-').toLowerCase();
      console.log(`注册组件: ${kebabName}`);
      app.component(kebabName, component);
    }
  });
  
  // 添加实例方法
  if (app.config && app.config.globalProperties) {
    // Vue 3方式
    app.config.globalProperties.$message = message;
  } else if (app.prototype) {
    // Vue 2方式
    app.prototype.$message = message;
  }
  
  install.installed = true;
  console.log('Design System installation complete');
};

// 自动安装
if (typeof window !== 'undefined' && window.Vue) {
  const Vue = window.Vue;
  
  // 检测Vue版本
  if (Vue.version && Vue.version.startsWith('2.')) {
    // Vue 2
    if (typeof Vue.use === 'function') {
      Vue.use({ install });
    }
  } else {
    // Vue 3
    if (typeof Vue.createApp === 'function') {
      const app = Vue.createApp({});
      app.use({ install });
    }
  }
}

// 创建组件库对象
const DesignSystem = {
  version: '1.0.0',
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
  Message
};

// 添加组件实例方法
DesignSystem.message = message;

// 关键修改: 为浏览器环境提供全局对象
if (typeof window !== 'undefined') {
  window.DesignSystem = DesignSystem;
}

// 导出
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
  install
};

export default DesignSystem; 