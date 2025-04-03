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

// 所有组件列表
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

// 定义安装方法
const install = (app) => {
  // 遍历注册全局组件
  components.forEach(component => {
    const name = component.name; // 直接使用组件的name属性
    if (name) {
      app.component(name, component);
    }
  });
  
  // 添加实例方法 (Vue 3 方式)
  app.config.globalProperties.$message = message;

  // 记录安装完成
  console.log('Design System installed, $message available:', message);
};

// 支持CDN的自动安装 (兼容Vue 2和Vue 3)
if (typeof window !== 'undefined' && window.Vue) {
  const Vue = window.Vue;
  // 判断是Vue 2还是Vue 3
  if (Vue.version.startsWith('2.')) {
    // Vue 2
    if (typeof window.Vue.use === 'function') {
      window.Vue.use({ install });
    }
  } else {
    // Vue 3
    if (typeof window.Vue.createApp === 'function') {
      const app = window.Vue.createApp({});
      install(app);
    }
  }
}

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

export default {
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