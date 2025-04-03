import { createVNode, render } from 'vue';
import DsMessage from './ds_Message.vue';

// 消息实例队列
const instances = [];
let seed = 1;

// 创建唯一id
const getId = () => {
  return `message_${seed++}`;
};

// 获取垂直偏移量
const getVerticalOffset = (offset = 20) => {
  let verticalOffset = offset;
  
  // 遍历所有实例，计算新消息的垂直位置
  instances.forEach(({ vm }) => {
    if (vm && vm.el) {
      const height = vm.el.offsetHeight || 0;
      verticalOffset += height + 16; // 消息间距离16px
    }
  });
  
  return verticalOffset;
};

// 关闭单个消息
const close = (id) => {
  const idx = instances.findIndex(instance => instance.id === id);
  if (idx === -1) return;
  
  const { vm } = instances[idx];
  if (!vm || !vm.component) return;
  
  const removedHeight = vm.el.offsetHeight || 0;
  
  // 先从实例队列中移除
  instances.splice(idx, 1);
  
  // 更新剩余消息的位置
  const len = instances.length;
  if (len < 1) return;
  
  // 为所有位置更新添加一个队列，以确保动画效果平滑
  requestAnimationFrame(() => {
    // 从被移除的消息之后的所有消息，都需要往上移动
    for (let i = idx; i < len; i++) {
      if (instances[i].vm && instances[i].vm.el) {
        const el = instances[i].vm.el;
        const currentTop = parseInt(el.style.top || '0');
        const pos = currentTop - removedHeight - 16; // 减去消息高度和间距
        
        // 添加平滑过渡效果
        el.style.transition = 'top 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
        el.style.top = `${pos}px`;
        
        // 同时更新组件的offset属性
        if (instances[i].vm.component && instances[i].vm.component.props) {
          instances[i].vm.component.props.offset = pos;
        }
      }
    }
  });
};

// 创建消息实例
const createMessage = (options) => {
  console.log('Creating message with options:', options);
  
  // 参数处理
  if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options,
      type: 'info'
    };
  }
  
  // 确保message属性存在
  if (!options.message && options.message !== 0) {
    console.error('Message content is required');
    return { close: () => {} };
  }
  
  // 处理重复的消息
  if (options.preventDuplicates !== false) {
    // 检查是否有相同内容和类型的消息已经显示
    const hasDuplicate = instances.some(({ vm }) => {
      if (vm && vm.component && vm.component.props) {
        const props = vm.component.props;
        return props.message === options.message && props.type === (options.type || 'info');
      }
      return false;
    });
    
    if (hasDuplicate) {
      console.log('Prevented duplicate message:', options.message);
      return { close: () => {} };
    }
  }
  
  // 生成唯一id
  const id = getId();
  
  // 计算偏移量
  const verticalOffset = getVerticalOffset(options.offset);
  
  // 创建容器
  const container = document.createElement('div');
  container.className = 'ds-message-container';
  
  // 关闭回调
  const userOnClose = options.onClose;
  const onClose = () => {
    close(id);
    if (userOnClose) userOnClose();
  };
  
  // 合并配置
  const props = {
    ...options,
    offset: verticalOffset,
    id,
    onClose
  };
  
  console.log('Creating VNode with props:', props);
  
  try {
    // 创建虚拟节点
    const vnode = createVNode(DsMessage, props, {
      default: () => props.message
    });
    
    // 挂载实例
    render(vnode, container);
    
    // 将容器添加到DOM
    document.body.appendChild(container);
    
    // 设置容器的样式，确保它能正确显示
    container.style.position = 'fixed';
    container.style.top = `${verticalOffset}px`;
    container.style.left = '50%';
    container.style.transform = 'translateX(-50%)';
    container.style.width = 'auto';
    container.style.zIndex = props.zIndex || 9999;
    
    // 确保组件实例存在
    if (!vnode.component) {
      console.error('Failed to create component instance');
      return { close: () => {} };
    }
    
    // 保存实例信息
    const instance = {
      id,
      vm: {
        id,
        el: container,
        component: vnode.component
      }
    };
    
    instances.push(instance);
    
    console.log('Message instance created successfully:', instance);
    
    return {
      close: () => {
        if (vnode.component && vnode.component.proxy) {
          vnode.component.proxy.close();
        }
      }
    };
  } catch (error) {
    console.error('Error creating message:', error);
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    return { close: () => {} };
  }
};

// 定义各类型的消息方法
const message = {
  info(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      return createMessage({
        message: options,
        type: 'info'
      });
    }
    return createMessage({
      ...options,
      type: 'info'
    });
  },
  success(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      return createMessage({
        message: options,
        type: 'success'
      });
    }
    return createMessage({
      ...options,
      type: 'success'
    });
  },
  warning(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      return createMessage({
        message: options,
        type: 'warning'
      });
    }
    return createMessage({
      ...options,
      type: 'warning'
    });
  },
  error(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      return createMessage({
        message: options,
        type: 'error'
      });
    }
    return createMessage({
      ...options,
      type: 'error'
    });
  },
  loading(options) {
    if (typeof options === 'string' || typeof options === 'number') {
      return createMessage({
        message: options,
        type: 'loading',
        duration: 0
      });
    }
    return createMessage({
      ...options,
      type: 'loading',
      duration: 0
    });
  }
};

// 支持函数调用方式
const messageAPI = function(options) {
  return createMessage(options);
};

// 挂载各类型方法
messageAPI.info = message.info;
messageAPI.success = message.success;
messageAPI.warning = message.warning;
messageAPI.error = message.error;
messageAPI.loading = message.loading;

// 关闭所有消息
messageAPI.closeAll = () => {
  const instancesCopy = [...instances];
  instancesCopy.forEach(({ vm }) => {
    if (vm && vm.component && vm.component.proxy) {
      vm.component.proxy.close();
    }
  });
  
  // 清空实例队列
  instances.length = 0;
  console.log('All messages have been closed');
};

export default messageAPI; 