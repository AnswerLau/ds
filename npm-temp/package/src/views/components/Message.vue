<template>
  <div class="section-page">
    <h1>Message 消息提示</h1>
    <p class="description">用于页面顶部展示全局提示消息。</p>

    <section class="section">
      <h2>基础用法</h2>
      <div class="category-card">
        <h3>基础消息提示</h3>
        <p class="component-desc">基础消息提示，从顶部出现，默认3秒后自动消失。</p>
        <div class="demo-block">
          <div class="demo-block-content">
            <div class="buttons-container">
              <ds_button @click="showBasicInfo">信息提示</ds_button>
              <ds_button @click="showBasicSuccess" type="secondary">成功提示</ds_button>
              <ds_button @click="showBasicWarning" type="secondary">警告提示</ds_button>
              <ds_button @click="showBasicError" type="secondary">错误提示</ds_button>
            </div>
          </div>
          <div class="code-block">
            <pre><code>// 在组件中使用
import { getCurrentInstance } from 'vue';

// 获取全局方法
const { proxy } = getCurrentInstance();

// 调用不同类型的消息
proxy.$message.info('这是一条信息提示');
proxy.$message.success('这是一条成功提示');
proxy.$message.warning('这是一条警告提示');
proxy.$message.error('这是一条错误提示');</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>可关闭的消息</h2>
      <div class="category-card">
        <h3>可手动关闭</h3>
        <p class="component-desc">添加关闭按钮，可让用户手动关闭消息。</p>
        <div class="demo-block">
          <div class="demo-block-content">
            <ds_button @click="showClosableMessage">显示可关闭消息</ds_button>
          </div>
          <div class="code-block">
            <pre><code>proxy.$message({
  message: '这是一条可关闭的消息',
  duration: 0, // 设置为0表示不会自动关闭
  closable: true, // 显示关闭按钮
  type: 'info'
});</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>不同时长的消息</h2>
      <div class="category-card">
        <h3>自定义显示时长</h3>
        <p class="component-desc">可以自定义消息显示的时长，单位为毫秒。</p>
        <div class="demo-block">
          <div class="demo-block-content">
            <ds_button @click="showShortMessage">短暂消息 (1s)</ds_button>
            <ds_button @click="showLongMessage">持久消息 (10s)</ds_button>
          </div>
          <div class="code-block">
            <pre><code>// 显示1秒的消息
proxy.$message({
  message: '这条消息将在1秒后消失',
  duration: 1000,
  type: 'info'
});

// 显示10秒的消息
proxy.$message({
  message: '这条消息将在10秒后消失',
  duration: 10000,
  type: 'info'
});</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>加载中状态</h2>
      <div class="category-card">
        <h3>加载状态消息</h3>
        <p class="component-desc">用于显示加载中的状态，不会自动关闭，需要手动关闭。</p>
        <div class="demo-block">
          <div class="demo-block-content">
            <ds_button @click="showLoadingMessage">显示加载状态</ds_button>
          </div>
          <div class="code-block">
            <pre><code>// 显示加载中的消息，不会自动关闭
const loadingMessage = proxy.$message.loading('正在加载中...');

// 在适当的时候手动关闭
setTimeout(() => {
  loadingMessage.close();
  proxy.$message.success('加载完成！');
}, 3000);</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>同时显示多个消息</h2>
      <div class="category-card">
        <h3>消息堆叠展示</h3>
        <p class="component-desc">可以同时显示多个消息，它们会按顺序从上到下堆叠。</p>
        <div class="demo-block">
          <div class="demo-block-content">
            <ds_button @click="showMultipleMessages">显示多条消息</ds_button>
            <ds_button @click="showDifferentIconMessages" type="primary">展示不同图标</ds_button>
            <ds_button @click="closeAllMessages" type="secondary">关闭所有消息</ds_button>
          </div>
          <div class="code-block">
            <pre><code>// 同时显示多条消息
const showMultipleMessages = () => {
  // 设置preventDuplicates为false，允许显示多个相同内容的消息
  proxy.$message({
    message: '第一条消息 - ' + new Date().getTime(),
    type: 'info',
    preventDuplicates: false
  });
  
  setTimeout(() => {
    proxy.$message({
      message: '第二条消息 - ' + new Date().getTime(),
      type: 'success',
      preventDuplicates: false
    });
  }, 300);
  
  setTimeout(() => {
    proxy.$message({
      message: '第三条消息 - ' + new Date().getTime(),
      type: 'warning',
      preventDuplicates: false
    });
  }, 600);
  
  setTimeout(() => {
    proxy.$message({
      message: '第四条消息 - ' + new Date().getTime(),
      type: 'error',
      preventDuplicates: false
    });
  }, 900);
};

// 显示使用不同图标的消息
const showDifferentIconMessages = () => {
  proxy.$message.info('信息提示 - info-circle图标');
  
  setTimeout(() => {
    proxy.$message.success('成功提示 - check-circle图标');
  }, 300);
  
  setTimeout(() => {
    proxy.$message.warning('警告提示 - exclamation-circle图标');
  }, 600);
  
  setTimeout(() => {
    proxy.$message.error('错误提示 - close-circle图标');
  }, 900);
  
  setTimeout(() => {
    proxy.$message.loading('加载中 - loading图标（旋转效果）');
  }, 1200);
};

// 关闭所有消息
const closeAllMessages = () => {
  proxy.$message.closeAll();
};</code></pre>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <h2>API参考</h2>
      <div class="category-card">
        <h3>全局方法</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>方法名</th>
                <th>说明</th>
                <th>参数</th>
                <th>返回值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$message(options)</td>
                <td>显示消息提示</td>
                <td>options 对象或字符串</td>
                <td>消息实例，包含 close 方法</td>
              </tr>
              <tr>
                <td>$message.info(options)</td>
                <td>显示信息类型的消息提示</td>
                <td>options 对象或字符串</td>
                <td>消息实例，包含 close 方法</td>
              </tr>
              <tr>
                <td>$message.success(options)</td>
                <td>显示成功类型的消息提示</td>
                <td>options 对象或字符串</td>
                <td>消息实例，包含 close 方法</td>
              </tr>
              <tr>
                <td>$message.warning(options)</td>
                <td>显示警告类型的消息提示</td>
                <td>options 对象或字符串</td>
                <td>消息实例，包含 close 方法</td>
              </tr>
              <tr>
                <td>$message.error(options)</td>
                <td>显示错误类型的消息提示</td>
                <td>options 对象或字符串</td>
                <td>消息实例，包含 close 方法</td>
              </tr>
              <tr>
                <td>$message.loading(options)</td>
                <td>显示加载中类型的消息提示</td>
                <td>options 对象或字符串</td>
                <td>消息实例，包含 close 方法</td>
              </tr>
              <tr>
                <td>$message.closeAll()</td>
                <td>关闭所有当前显示的消息</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Options 选项</h3>
        <div class="api-table">
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>message</td>
                <td>消息文本内容</td>
                <td>string</td>
                <td>-</td>
              </tr>
              <tr>
                <td>type</td>
                <td>消息类型，可选值：info, success, warning, error, loading</td>
                <td>string</td>
                <td>info</td>
              </tr>
              <tr>
                <td>duration</td>
                <td>显示时间，单位为毫秒，设为 0 则不自动关闭</td>
                <td>number</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>showIcon</td>
                <td>是否显示类型图标</td>
                <td>boolean</td>
                <td>true</td>
              </tr>
              <tr>
                <td>closable</td>
                <td>是否显示关闭按钮</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>iconSize</td>
                <td>图标大小</td>
                <td>number</td>
                <td>16</td>
              </tr>
              <tr>
                <td>zIndex</td>
                <td>消息层级</td>
                <td>number</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>offset</td>
                <td>消息距离顶部的偏移量</td>
                <td>number</td>
                <td>20</td>
              </tr>
              <tr>
                <td>onClose</td>
                <td>关闭时的回调函数</td>
                <td>function</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import DsButton from '../../components/ds_Button.vue';

export default {
  name: 'MessageDemo',
  components: {
    ds_button: DsButton
  },
  setup() {
    const { proxy } = getCurrentInstance();

    // 验证$message是否可用
    console.log('Message component setup, proxy.$message:', proxy.$message);
    
    // 显示基础消息
    const showBasicInfo = () => {
      try {
        console.log('Calling info message');
        proxy.$message.info('这是一条信息提示');
      } catch (error) {
        console.error('Error showing info message:', error);
      }
    };

    const showBasicSuccess = () => {
      try {
        console.log('Calling success message');
        proxy.$message.success('这是一条成功提示');
      } catch (error) {
        console.error('Error showing success message:', error);
      }
    };

    const showBasicWarning = () => {
      try {
        console.log('Calling warning message');
        proxy.$message.warning('这是一条警告提示');
      } catch (error) {
        console.error('Error showing warning message:', error);
      }
    };

    const showBasicError = () => {
      try {
        console.log('Calling error message');
        proxy.$message.error('这是一条错误提示');
      } catch (error) {
        console.error('Error showing error message:', error);
      }
    };

    // 显示可关闭消息
    const showClosableMessage = () => {
      proxy.$message({
        message: '这是一条可关闭的消息',
        duration: 0,
        closable: true,
        type: 'info'
      });
    };

    // 显示不同时长的消息
    const showShortMessage = () => {
      proxy.$message({
        message: '这条消息将在1秒后消失',
        duration: 1000,
        type: 'info'
      });
    };

    const showLongMessage = () => {
      proxy.$message({
        message: '这条消息将在10秒后消失',
        duration: 10000,
        type: 'info'
      });
    };

    // 显示加载中消息
    const showLoadingMessage = () => {
      const loadingMessage = proxy.$message.loading('正在加载中...');
      setTimeout(() => {
        loadingMessage.close();
        proxy.$message.success('加载完成！');
      }, 3000);
    };

    // 显示多个消息
    const showMultipleMessages = () => {
      // 设置preventDuplicates为false，允许显示多个相同内容的消息
      proxy.$message({
        message: '第一条消息 - ' + new Date().getTime(),
        type: 'info',
        preventDuplicates: false
      });
      
      setTimeout(() => {
        proxy.$message({
          message: '第二条消息 - ' + new Date().getTime(),
          type: 'success',
          preventDuplicates: false
        });
      }, 300);
      
      setTimeout(() => {
        proxy.$message({
          message: '第三条消息 - ' + new Date().getTime(),
          type: 'warning',
          preventDuplicates: false
        });
      }, 600);
      
      setTimeout(() => {
        proxy.$message({
          message: '第四条消息 - ' + new Date().getTime(),
          type: 'error',
          preventDuplicates: false
        });
      }, 900);
    };

    // 显示使用不同图标的消息
    const showDifferentIconMessages = () => {
      proxy.$message.info('信息提示 - info-circle图标');
      
      setTimeout(() => {
        proxy.$message.success('成功提示 - check-circle图标');
      }, 300);
      
      setTimeout(() => {
        proxy.$message.warning('警告提示 - exclamation-circle图标');
      }, 600);
      
      setTimeout(() => {
        proxy.$message.error('错误提示 - close-circle图标');
      }, 900);
      
      setTimeout(() => {
        proxy.$message.loading('加载中 - loading图标（旋转效果）');
      }, 1200);
    };

    // 关闭所有消息
    const closeAllMessages = () => {
      proxy.$message.closeAll();
    };

    return {
      showBasicInfo,
      showBasicSuccess,
      showBasicWarning,
      showBasicError,
      showClosableMessage,
      showShortMessage,
      showLongMessage,
      showLoadingMessage,
      showMultipleMessages,
      closeAllMessages,
      showDifferentIconMessages
    };
  }
};
</script>

<style scoped>
.component-desc {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
  margin-bottom: var(--space-200);
}

.demo-block {
  padding: var(--space-300);
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-medium);
  margin-bottom: var(--space-200);
}

.demo-block-content {
  padding: var(--space-300);
  border-bottom: 1px solid var(--color-border-default);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-200);
}

.code-block {
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-small);
  padding: var(--space-200);
  margin-top: var(--space-200);
  overflow-x: auto;
}

.code-block pre {
  margin: 0;
}

.code-block code {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  font-size: 14px;
  color: var(--color-text-primary);
  white-space: pre;
}

.buttons-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-200);
}

.api-table {
  margin-bottom: var(--space-400);
}

table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--color-border-default);
  font: var(--font-14-regular);
}

th {
  background-color: var(--color-bg-subtlest);
  padding: var(--space-100) var(--space-200);
  text-align: left;
  font: var(--font-14-semibold);
  border-bottom: 1px solid var(--color-stroke-divider);
}

td {
  padding: var(--space-100) var(--space-200);
  border-bottom: 1px solid var(--color-stroke-divider);
  color: var(--color-text-secondary);
}

tr:last-child td {
  border-bottom: none;
}
</style> 