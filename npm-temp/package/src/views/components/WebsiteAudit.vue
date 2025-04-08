<template>
  <div class="section-page">
    <h1>网页规范检测</h1>
    <p class="description">
      输入网页地址，检测网页是否符合当前设计系统的规范要求，并标记出不一致的地方。
    </p>

    
      <div class="url-input-container">
        <ds_input 
          v-model="websiteUrl" 
          placeholder="请输入网页地址 (例如: https://example.com)" 
          class="url-input"
          size="large"
        />
        <ds_button size="large" @click="analyzeWebsite" :loading="isAnalyzing" :disabled="!isValidUrlInput" class="analyze-button">
          开始检测
        </ds_button>
      </div>
      <p class="error-message" v-if="showUrlError">请输入有效的网址，必须以 http:// 或 https:// 开头</p>
    

    <section class="section" v-if="isAnalyzing">
      <h2>检测中</h2>
      <div class="analyzing-container">
        <div class="analyzing-animation"></div>
        <p>正在分析网页，请稍候...</p>
      </div>
    </section>

    <section class="section" v-if="analysisComplete && !analysisError">
      <h2>检测结果</h2>
      <div class="results-container">
        <div class="results-summary">
          <div class="results-score" :class="getScoreClass(overallScore)">
            {{ Math.round(overallScore) }}<span class="percent">%</span>
          </div>
          <div class="results-text">
            <h3>整体符合度</h3>
            <p>{{ getScoreDescription(overallScore) }}</p>
          </div>
        </div>

        <div class="results-details">
          <div v-for="(category, index) in analysisResults" :key="index" class="category-card">
            <div class="category-header">
              <h3>{{ category.name }}</h3>
              <div class="category-score" :class="getScoreClass(category.score)">
                {{ Math.round(category.score) }}%
              </div>
            </div>
            <ul class="issue-list">
              <li v-for="(issue, issueIndex) in category.issues" :key="issueIndex" :class="{ 'high': issue.severity === 'high', 'medium': issue.severity === 'medium', 'low': issue.severity === 'low' }">
                <span class="issue-severity">{{ getSeverityLabel(issue.severity) }}</span>
                <span class="issue-description">{{ issue.description }}</span>
                <div class="issue-details" v-if="issue.details">
                  <div class="issue-example">
                    <span class="found">发现值: <code>{{ issue.details.found }}</code></span>
                    <span class="expected">期望值: <code>{{ issue.details.expected }}</code></span>
                  </div>
                  <p v-if="issue.details.suggestion" class="issue-suggestion">建议: {{ issue.details.suggestion }}</p>
                  <div v-if="issue.details.screenshot" class="issue-screenshot">
                    <h4>问题截图对比:</h4>
                    <div class="screenshot-container">
                      <div class="screenshot current">
                        <img :src="issue.details.screenshot.current" alt="当前页面" />
                        <span class="screenshot-label">当前</span>
                      </div>
                      <div class="screenshot expected">
                        <img :src="issue.details.screenshot.expected" alt="符合规范" />
                        <span class="screenshot-label">符合规范</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section" v-if="analysisError">
      <h2>检测失败</h2>
      <div class="error-container">
        <p v-html="analysisError"></p>
        
        <div class="cors-solutions" v-if="analysisError && analysisError.includes('跨域')">
          <h3>跨域访问解决方案</h3>
          <div class="solution-cards">
            <div class="solution-card">
              <h4>方案一：服务器代理</h4>
              <p>在您的服务器端实现一个代理API，用于转发请求到目标站点并返回结果。这种方法可以绕过浏览器的同源策略限制。</p>
              <pre><code>// 服务器端代码示例 (Node.js)
app.get('/proxy', async (req, res) => {
  try {
    const response = await fetch(req.query.url);
    const html = await response.text();
    res.send(html);
  } catch (error) {
    res.status(500).send('代理请求失败');
  }
});</code></pre>
            </div>
            
            <div class="solution-card">
              <h4>方案二：使用公共CORS代理</h4>
              <p>临时测试可以使用公共CORS代理服务。注意：公共代理可能有使用限制，不适合生产环境。</p>
              <ul>
                <li>https://cors-anywhere.herokuapp.com/</li>
                <li>https://cors-proxy.htmldriven.com/</li>
                <li>https://api.allorigins.win/raw?url=YOUR_URL</li>
              </ul>
            </div>
            
            <div class="solution-card">
              <h4>方案三：目标站点配置</h4>
              <p>如果您有权限访问目标网站的服务器配置，可以通过设置正确的CORS头允许跨域访问：</p>
              <pre><code>// 目标服务器响应头设置
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type</code></pre>
            </div>
          </div>
        </div>
        
        <ds_button @click="resetAnalysis" type="primary">重新检测</ds_button>
      </div>
    </section>

    <!-- 代理服务器设置对话框 -->
    <el-dialog
      title="代理服务器设置"
      v-model="showProxySetupDialog"
      width="600px"
      append-to-body
      class="proxy-setup-dialog"
    >
      <div class="proxy-setup-content">
        <h3>设置CORS代理服务器</h3>
        <p>为了解决跨域访问限制，我们提供了一个简单的Node.js代理服务器。请按照以下步骤设置：</p>
        
        <div class="setup-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>进入服务器目录</h4>
              <div class="code-block">
                <code>cd server</code>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>安装依赖</h4>
              <div class="code-block">
                <code>npm install</code>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>启动代理服务器</h4>
              <div class="code-block">
                <code>npm start</code>
              </div>
              <p class="step-note">服务器将在 <a href="http://localhost:3001" target="_blank">http://localhost:3001</a> 上运行</p>
            </div>
          </div>
        </div>
        
        <div class="proxy-status">
          <h4>代理服务器状态检查</h4>
          <el-button type="primary" @click="checkProxyStatus" :loading="checkingProxy">
            检查代理服务器
          </el-button>
          <div v-if="proxyStatus" :class="['status-indicator', proxyStatus.online ? 'status-online' : 'status-offline']">
            {{ proxyStatus.online ? '在线' : '离线' }} - {{ proxyStatus.message }}
          </div>
        </div>
      </div>
      
      <template #footer>
        <el-button @click="showProxySetupDialog = false">关闭</el-button>
      </template>
    </el-dialog>

    <!-- 使用代理服务器提示 -->
    <div v-if="analysisError && analysisError.includes('无法连接到代理服务器')" class="proxy-error-card">
      <div class="error-icon">
        <i class="el-icon-warning"></i>
      </div>
      <div class="error-content">
        <h3>需要启动代理服务器</h3>
        <p>{{ analysisError }}</p>
        <el-button type="primary" @click="goToProxySetup">
          查看代理服务器设置
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import DsInput from '../../components/ds_Input.vue';
import DsButton from '../../components/ds_Button.vue';
import DsAlert from '../../components/ds_Alert.vue';

export default {
  name: 'WebsiteAudit',
  components: {
    ds_input: DsInput,
    ds_button: DsButton,
    ds_alert: DsAlert
  },
  data() {
    return {
      websiteUrl: '',
      isAnalyzing: false,
      analysisComplete: false,
      analysisError: null,
      showUrlError: false,
      errorMessage: '',
      overallScore: 0,
      analysisResults: [],
      showProxySetupDialog: false,
      checkingProxy: false,
      proxyStatus: null
    };
  },
  computed: {
    isValidUrlInput() {
      return this.websiteUrl.trim() !== '' && 
        (this.websiteUrl.startsWith('http://') || this.websiteUrl.startsWith('https://'));
    }
  },
  methods: {
    async analyzeWebsite() {
      this.errorMessage = '';
      this.analysisError = null;
      this.analysisResults = [];
      this.overallScore = 0;
      this.analysisComplete = false;
      
      // 验证URL格式
      if (!this.isValidUrlInput) {
        this.showUrlError = true;
        return;
      }
      
      this.showUrlError = false;
      this.isAnalyzing = true;
      
      try {
        // 首先检查代理服务器是否在线
        await this.checkProxyStatus();
        
        if (!this.proxyStatus || !this.proxyStatus.online) {
          throw new Error('无法连接到代理服务器。请确保在终端中运行了以下命令：\n1. cd server\n2. npm install\n3. npm start');
        }
        
        // 通过代理服务器分析网站
        await this.fetchAnalysisResults(this.websiteUrl);
        
        this.analysisComplete = true;
        
        // 分析完成后滚动到结果区域
        this.$nextTick(() => {
          const resultsSection = document.querySelector('.section-page .section:nth-child(3)');
          if (resultsSection) {
            resultsSection.scrollIntoView({ behavior: 'smooth' });
          }
        });
      } catch (error) {
        console.error('分析过程中出错:', error);
        this.analysisError = error.message;
        this.analysisComplete = false;
      } finally {
        this.isAnalyzing = false;
      }
    },
    
    // 验证URL格式
    isValidUrl(string) {
      try {
        new URL(string);
        return true;
      } catch (_) {
        return false;
      }
    },
    
    // 格式化URL，确保包含协议
    formatUrl(url) {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        return `https://${url}`;
      }
      return url;
    },
    
    async fetchAnalysisResults(url) {
      this.isAnalyzing = true;
      this.analysisError = null;
      
      try {
        // 使用我们的代理服务器
        console.log(`正在通过代理服务器分析网站: ${url}`);
        
        // 使用我们创建的代理服务器
        const proxyUrl = `http://localhost:3001/api/proxy?url=${encodeURIComponent(url)}`;
        
        try {
          // 发送请求到代理服务器
          const response = await fetch(proxyUrl);
          
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`代理服务器错误: ${errorData.error || response.statusText}`);
          }
          
          const data = await response.json();
          console.log('代理服务器返回数据:', data);
          
          // 使用代理获取的样式数据
          const targetStyles = data.styles || {};
          
          // 获取设计系统的token以进行比较
          const designSystemTokens = this.extractDesignSystemTokens();
          
          // 分析样式差异并生成结果
          const analysisResults = this.analyzeStyleDifferences(targetStyles, designSystemTokens);
          
          // 处理分析结果
          this.processAnalysisResults(analysisResults);
          
          this.analysisComplete = true;
          this.isAnalyzing = false;
          return analysisResults;
        } catch (error) {
          console.error('代理请求失败:', error);
          
          // 检查代理服务器是否运行
          if (error.message.includes('网络错误') || error.message.includes('Failed to fetch')) {
            throw new Error(`无法连接到代理服务器。请确保在终端中运行了以下命令：
            1. cd server
            2. npm install
            3. npm start`);
          }
          
          throw error;
        }
      } catch (error) {
        this.isAnalyzing = false;
        this.analysisError = error.message;
        console.error('分析失败:', error);
        throw error;
      }
    },
    
    // 分析样式差异
    analyzeStyleDifferences(targetStyles, designSystemTokens) {
      // 初始化分析结果结构
      const results = {
        overallScore: 0,
        categories: [
          {
            name: '颜色使用',
            score: 0,
            issues: []
          },
          {
            name: '排版',
            score: 0,
            issues: []
          },
          {
            name: '间距和布局',
            score: 0,
            issues: []
          },
          {
            name: '组件一致性',
            score: 0,
            issues: []
          }
        ]
      };

      // 分析颜色
      this.analyzeColors(targetStyles.colors || {}, designSystemTokens.colors, results.categories[0]);
      
      // 分析排版
      this.analyzeTypography(targetStyles.typography || {}, designSystemTokens.typography, results.categories[1]);
      
      // 分析间距和布局
      this.analyzeSpacing(targetStyles.spacing || {}, designSystemTokens.spacing, results.categories[2]);
      
      // 分析组件一致性
      this.analyzeComponents(targetStyles, designSystemTokens, results.categories[3]);
      
      // 计算总体评分 (所有类别的平均分)
      const scores = results.categories.map(cat => cat.score);
      results.overallScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      
      return results;
    },
    
    processAnalysisResults(data) {
      // 处理API返回的数据
      this.overallScore = data.overallScore || 0;
      
      // 转换API返回的分析结果为本地格式
      this.analysisResults = data.categories.map(category => ({
        name: category.name,
        score: category.score,
        issues: category.issues.map(issue => ({
          severity: issue.severity,
          description: issue.description,
          details: {
            found: issue.found,
            expected: issue.expected,
            suggestion: issue.suggestion,
            screenshot: issue.screenshot || null
          }
        }))
      }));
    },
    
    resetAnalysis() {
      this.websiteUrl = '';
      this.isAnalyzing = false;
      this.analysisComplete = false;
      this.analysisError = null;
      this.errorMessage = '';
      this.showUrlError = false;
      this.analysisResults = [];
      this.overallScore = 0;
    },
    
    getScoreClass(score) {
      if (score >= 90) return 'score-excellent';
      if (score >= 75) return 'score-good';
      if (score >= 60) return 'score-moderate';
      return 'score-poor';
    },
    
    getScoreDescription(score) {
      if (score >= 90) return '优秀！网页设计高度符合设计系统规范';
      if (score >= 75) return '良好！大部分设计元素符合规范';
      if (score >= 60) return '一般！存在多处需要改进的地方';
      return '较差！严重偏离设计系统规范';
    },
    
    getSeverityLabel(severity) {
      switch (severity) {
        case 'high':
          return '严重';
        case 'medium':
          return '中等';
        case 'low':
          return '轻微';
        default:
          return '未知';
      }
    },
    
    // 提取当前设计系统的token
    extractDesignSystemTokens() {
      // 获取根元素计算样式，包含CSS变量
      const rootStyle = window.getComputedStyle(document.documentElement);
      
      // 提取设计系统中的token
      const tokens = {
        colors: {},
        typography: {},
        spacing: {},
        radius: {},
        shadows: {}
      };
      
      // 提取颜色变量
      const colorVarNames = [
        '--color-blue-default', '--color-green-default', '--color-red-default', 
        '--color-warning-default', '--color-text-primary', '--color-text-secondary',
        '--color-bg-default', '--color-bg-subtle', '--color-border-default'
      ];
      
      colorVarNames.forEach(varName => {
        tokens.colors[varName] = rootStyle.getPropertyValue(varName).trim();
      });
      
      // 提取排版变量
      const typographyVarNames = [
        '--font-12-regular', '--font-14-regular', '--font-16-regular',
        '--font-12-medium', '--font-14-medium', '--font-16-medium',
        '--font-18-medium', '--font-20-medium', '--font-24-medium',
        '--font-12-semibold', '--font-14-semibold', '--font-16-semibold',
        '--font-18-semibold', '--font-24-bold', '--font-32-bold'
      ];
      
      typographyVarNames.forEach(varName => {
        tokens.typography[varName] = rootStyle.getPropertyValue(varName).trim();
      });
      
      // 提取间距变量
      const spacingVarNames = [
        '--space-50', '--space-100', '--space-150', '--space-200', 
        '--space-250', '--space-300', '--space-400', '--space-500', '--space-600'
      ];
      
      spacingVarNames.forEach(varName => {
        tokens.spacing[varName] = rootStyle.getPropertyValue(varName).trim();
      });
      
      // 提取圆角变量
      const radiusVarNames = [
        '--radius-small', '--radius-medium', '--radius-large', '--radius-circle'
      ];
      
      radiusVarNames.forEach(varName => {
        tokens.radius[varName] = rootStyle.getPropertyValue(varName).trim();
      });
      
      // 提取阴影变量
      const shadowVarNames = [
        '--elevation-shadow-light-100', '--elevation-shadow-light-200'
      ];
      
      shadowVarNames.forEach(varName => {
        tokens.shadows[varName] = rootStyle.getPropertyValue(varName).trim();
      });
      
      // 获取组件样式参考
      tokens.components = this.extractDesignSystemComponents();
      
      return tokens;
    },
    
    // 提取设计系统组件样式
    extractDesignSystemComponents() {
      const components = {
        buttons: {},
        inputs: {},
        selects: {},
        cards: {}
      };
      
      // 提取按钮样式
      const buttonElement = document.querySelector('.ds-button') || document.createElement('button');
      const buttonStyles = window.getComputedStyle(buttonElement);
      components.buttons = {
        backgroundColor: buttonStyles.backgroundColor,
        color: buttonStyles.color,
        borderRadius: buttonStyles.borderRadius,
        padding: buttonStyles.padding,
        fontSize: buttonStyles.fontSize,
        fontWeight: buttonStyles.fontWeight
      };
      
      // 提取输入框样式
      const inputElement = document.querySelector('.ds-input') || document.createElement('input');
      const inputStyles = window.getComputedStyle(inputElement);
      components.inputs = {
        backgroundColor: inputStyles.backgroundColor,
        color: inputStyles.color,
        borderRadius: inputStyles.borderRadius,
        border: inputStyles.border,
        padding: inputStyles.padding,
        fontSize: inputStyles.fontSize
      };
      
      return components;
    },
    
    // 分析颜色系统
    analyzeColors(targetColors, designSystemColors, categoryResults) {
      const issues = [];
      let compliancePercentage = 100;
      
      // 示例：检查目标站点的颜色是否与设计系统颜色接近
      const dsColorValues = Object.values(designSystemColors || {});
      
      if (!targetColors || Object.keys(targetColors).length === 0) {
        issues.push({
          severity: 'high',
          description: '无法提取颜色信息',
          details: {
            found: '无法从目标网站提取颜色信息',
            expected: '应能检测到网站的主要颜色',
            suggestion: '请确保目标网站可以正常加载且包含可见内容'
          }
        });
        compliancePercentage = 0;
      } else {
        // 分析提取到的颜色
        const targetColorValues = Object.values(targetColors);
        
        // 1. 检查颜色数量是否合理（过多表示不统一）
        if (targetColorValues.length > 20) {
          issues.push({
            severity: 'medium',
            description: '颜色过多',
            details: {
              found: `检测到${targetColorValues.length}种颜色`,
              expected: '设计系统通常使用有限的颜色集（约5-15种）',
              suggestion: '减少颜色数量，统一使用设计系统的基础颜色'
            }
          });
          compliancePercentage -= 15;
        }
        
        // 2. 尝试识别最常用的颜色是否与设计系统匹配
        let matchFound = false;
        const colorMatches = [];
        
        // 尝试找到与设计系统相似的颜色
        for (const dsColor of dsColorValues) {
          for (const targetColor of targetColorValues) {
            if (this.areColorsClose(targetColor, dsColor)) {
              colorMatches.push({ target: targetColor, design: dsColor });
              matchFound = true;
            }
          }
        }
        
        if (!matchFound) {
          issues.push({
            severity: 'high',
            description: '颜色系统不匹配',
            details: {
              found: '未检测到与设计系统匹配的颜色',
              expected: '网站应使用设计系统定义的颜色',
              suggestion: '考虑使用设计系统的标准颜色'
            }
          });
          compliancePercentage -= 40;
        } else if (colorMatches.length < 3) {
          issues.push({
            severity: 'medium',
            description: '颜色一致性较低',
            details: {
              found: `仅检测到${colorMatches.length}种匹配颜色`,
              expected: '网站应大量使用设计系统定义的颜色',
              suggestion: '增加设计系统标准颜色的使用'
            }
          });
          compliancePercentage -= 20;
        }
      }
      
      categoryResults.score = Math.max(0, compliancePercentage);
      categoryResults.issues = issues;
    },
    
    // 判断两个颜色是否近似
    areColorsClose(color1, color2) {
      try {
        // 简化处理：转换为RGB后比较
        const rgb1 = this.parseColor(color1);
        const rgb2 = this.parseColor(color2);
        
        if (!rgb1 || !rgb2) return false;
        
        // 计算欧氏距离
        const distance = Math.sqrt(
          Math.pow(rgb1.r - rgb2.r, 2) + 
          Math.pow(rgb1.g - rgb2.g, 2) + 
          Math.pow(rgb1.b - rgb2.b, 2)
        );
        
        // 距离小于30视为相似颜色（0-255范围内）
        return distance < 30;
      } catch (e) {
        console.error('颜色比较错误:', e);
        return false;
      }
    },
    
    // 解析颜色字符串为RGB对象
    parseColor(color) {
      try {
        // 处理rgb或rgba格式
        if (color.startsWith('rgb')) {
          const values = color.match(/\d+/g);
          if (values && values.length >= 3) {
            return {
              r: parseInt(values[0]),
              g: parseInt(values[1]),
              b: parseInt(values[2])
            };
          }
        }
        
        // 处理hex格式
        if (color.startsWith('#')) {
          let hex = color.substring(1);
          
          // 转换3位hex为6位
          if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }
          
          if (hex.length === 6) {
            return {
              r: parseInt(hex.substring(0, 2), 16),
              g: parseInt(hex.substring(2, 4), 16),
              b: parseInt(hex.substring(4, 6), 16)
            };
          }
        }
        
        return null;
      } catch (e) {
        console.error('颜色解析错误:', e);
        return null;
      }
    },
    
    // 分析排版系统
    analyzeTypography(targetTypography, designSystemTypography, categoryResults) {
      const issues = [];
      let compliancePercentage = 100;
      
      if (!targetTypography || Object.keys(targetTypography).length === 0) {
        issues.push({
          severity: 'high',
          description: '无法提取排版信息',
          details: {
            found: '无法从目标网站提取字体信息',
            expected: '应能检测到网站的字体设置',
            suggestion: '请确保目标网站可以正常加载且包含文本内容'
          }
        });
        compliancePercentage = 0;
      } else {
        // 分析字体大小
        const targetFontSizes = Object.keys(targetTypography)
          .filter(key => key.includes('font-size') || key.includes('-size'))
          .map(key => targetTypography[key]);
        
        // 检查字体大小是否与设计系统一致
        const dsFontSizes = Object.keys(designSystemTypography)
          .filter(key => key.includes('font') && key.includes('regular' || 'medium' || 'semibold' || 'bold'))
          .map(key => {
            const value = designSystemTypography[key];
            // 提取数字部分
            const match = value.match(/(\d+)px/);
            return match ? match[1] + 'px' : null;
          })
          .filter(size => size !== null);
        
        let fontSizeMatch = false;
        for (const dsSize of dsFontSizes) {
          if (targetFontSizes.some(size => this.areSizesClose(size, dsSize))) {
            fontSizeMatch = true;
            break;
          }
        }
        
        if (!fontSizeMatch) {
          issues.push({
            severity: 'medium',
            description: '字体大小不符合设计系统',
            details: {
              found: `检测到的字体大小: ${targetFontSizes.join(', ')}`,
              expected: `设计系统字体大小: ${dsFontSizes.join(', ')}`,
              suggestion: '使用设计系统定义的标准字体大小'
            }
          });
          compliancePercentage -= 30;
        }
        
        // 分析字体权重
        const targetFontWeights = Object.keys(targetTypography)
          .filter(key => key.includes('font-weight') || key.includes('-weight'))
          .map(key => targetTypography[key]);
        
        // 检查是否使用了过多的字体权重（不统一）
        if (targetFontWeights.length > 4) {
          issues.push({
            severity: 'low',
            description: '字体权重不统一',
            details: {
              found: `检测到${targetFontWeights.length}种字体权重`,
              expected: '设计系统通常使用2-4种字体权重（如regular, medium, semibold, bold）',
              suggestion: '减少字体权重变化，保持一致性'
            }
          });
          compliancePercentage -= 10;
        }
      }
      
      categoryResults.score = Math.max(0, compliancePercentage);
      categoryResults.issues = issues;
    },
    
    // 判断两个尺寸是否接近
    areSizesClose(size1, size2) {
      try {
        // 提取数字部分
        const num1 = parseFloat(size1);
        const num2 = parseFloat(size2);
        
        if (isNaN(num1) || isNaN(num2)) return false;
        
        // 允许1px的误差
        return Math.abs(num1 - num2) <= 1;
      } catch (e) {
        console.error('尺寸比较错误:', e);
        return false;
      }
    },
    
    // 分析间距系统
    analyzeSpacing(targetSpacing, designSystemSpacing, categoryResults) {
      const issues = [];
      let compliancePercentage = 100;
      
      if (!targetSpacing || Object.keys(targetSpacing).length === 0) {
        issues.push({
          severity: 'medium',
          description: '无法提取间距信息',
          details: {
            found: '无法从目标网站提取间距信息',
            expected: '应能检测到网站的间距规律',
            suggestion: '请确保目标网站可以正常加载且有合理的元素间距'
          }
        });
        compliancePercentage = 50; // 间距不如颜色和排版重要
      } else {
        // 获取间距值
        const targetSpacingValues = Object.values(targetSpacing).map(value => {
          // 提取数字部分
          const match = value.match(/(\d+)px/);
          return match ? parseInt(match[1]) : null;
        }).filter(value => value !== null);
        
        // 获取设计系统间距
        const dsSpacingValues = Object.values(designSystemSpacing).map(value => {
          const match = value.match(/(\d+)px/);
          return match ? parseInt(match[1]) : null;
        }).filter(value => value !== null);
        
        // 检查间距系统是否符合规律
        if (targetSpacingValues.length > 0) {
          let matchFound = false;
          
          // 检查是否有与设计系统匹配的间距
          for (const dsSpacing of dsSpacingValues) {
            if (targetSpacingValues.some(spacing => Math.abs(spacing - dsSpacing) <= 2)) {
              matchFound = true;
              break;
            }
          }
          
          if (!matchFound) {
            issues.push({
              severity: 'medium',
              description: '间距系统不匹配',
              details: {
                found: `检测到的间距: ${targetSpacingValues.join('px, ')}px`,
                expected: `设计系统间距: ${dsSpacingValues.join('px, ')}px`,
                suggestion: '使用设计系统定义的标准间距'
              }
            });
            compliancePercentage -= 30;
          }
        }
      }
      
      categoryResults.score = Math.max(0, compliancePercentage);
      categoryResults.issues = issues;
    },
    
    // 分析组件样式
    analyzeComponents(targetStyles, designSystemTokens, categoryResults) {
      const issues = [];
      let compliancePercentage = 100;
      
      // 检查是否有组件信息
      const targetComponents = targetStyles.components;
      const dsComponents = designSystemTokens.components;
      
      if (!targetComponents) {
        issues.push({
          severity: 'medium',
          description: '无法提取组件信息',
          details: {
            found: '无法从目标网站提取组件样式信息',
            expected: '应能检测到网站的主要组件样式',
            suggestion: '请确保目标网站可以正常加载且包含常见UI组件'
          }
        });
        compliancePercentage = 50;
      } else {
        // 分析按钮样式
        if (targetComponents.buttons && dsComponents && dsComponents.buttons) {
          const targetButton = targetComponents.buttons;
          const dsButton = dsComponents.buttons;
          
          let buttonMismatchCount = 0;
          
          // 检查背景色
          if (targetButton.backgroundColor && dsButton.backgroundColor) {
            if (!this.areColorsClose(targetButton.backgroundColor, dsButton.backgroundColor)) {
              buttonMismatchCount++;
            }
          }
          
          // 检查文字颜色
          if (targetButton.color && dsButton.color) {
            if (!this.areColorsClose(targetButton.color, dsButton.color)) {
              buttonMismatchCount++;
            }
          }
          
          // 检查圆角
          if (targetButton.borderRadius && dsButton.borderRadius) {
            if (!this.areSizesClose(targetButton.borderRadius, dsButton.borderRadius)) {
              buttonMismatchCount++;
            }
          }
          
          if (buttonMismatchCount > 1) {
            issues.push({
              severity: 'medium',
              description: '按钮样式不一致',
              details: {
                found: '目标网站的按钮样式与设计系统不符',
                expected: '按钮应遵循设计系统定义的样式',
                suggestion: '使用设计系统的标准按钮组件'
              }
            });
            compliancePercentage -= 20;
          }
        }
        
        // 分析输入框样式
        if (targetComponents.inputs && dsComponents && dsComponents.inputs) {
          const targetInput = targetComponents.inputs;
          const dsInput = dsComponents.inputs;
          
          let inputMismatchCount = 0;
          
          // 检查背景色
          if (targetInput.backgroundColor && dsInput.backgroundColor) {
            if (!this.areColorsClose(targetInput.backgroundColor, dsInput.backgroundColor)) {
              inputMismatchCount++;
            }
          }
          
          // 检查边框
          if (targetInput.border && dsInput.border) {
            if (targetInput.border !== dsInput.border) {
              inputMismatchCount++;
            }
          }
          
          if (inputMismatchCount > 1) {
            issues.push({
              severity: 'medium',
              description: '输入框样式不一致',
              details: {
                found: '目标网站的输入框样式与设计系统不符',
                expected: '输入框应遵循设计系统定义的样式',
                suggestion: '使用设计系统的标准输入框组件'
              }
            });
            compliancePercentage -= 20;
          }
        }
      }
      
      categoryResults.score = Math.max(0, compliancePercentage);
      categoryResults.issues = issues;
    },
    
    // 前往代理服务器设置说明
    goToProxySetup() {
      // 打开服务器目录或者显示设置说明
      this.showProxySetupDialog = true;
    },
    
    async checkProxyStatus() {
      this.checkingProxy = true;
      try {
        const response = await fetch('http://localhost:3001/api/health');
        if (!response.ok) {
          throw new Error('无法连接到代理服务器');
        }
        const data = await response.json();
        this.proxyStatus = {
          online: true,
          message: data.message || '代理服务器运行正常'
        };
      } catch (error) {
        this.proxyStatus = {
          online: false,
          message: '无法连接到代理服务器，请确保服务器已启动'
        };
      } finally {
        this.checkingProxy = false;
      }
    }
  }
}
</script>

<style scoped>
.section-page {
  padding: var(--space-400);
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  font: var(--font-32-bold);
  margin-bottom: var(--space-300);
  color: var(--color-text-primary);
}

.description {
  color: var(--color-text-secondary);
  font: var(--font-16-regular);
  margin-bottom: var(--space-500);
}

.section {
  margin-bottom: var(--space-600);
}

h2 {
  font: var(--font-24-medium);
  margin-bottom: var(--space-300);
  color: var(--color-text-primary);
}

h3 {
  font: var(--font-18-medium);
  color: var(--color-text-primary);
  margin: 0;
}

.section p {
  color: var(--color-text-secondary);
  font: var(--font-14-regular);
  margin-bottom: var(--space-200);
}

.url-input-container {
  display: flex;
  gap: var(--space-200);
  margin-bottom: var(--space-200);
}

.url-input {
  flex-grow: 1;
}

.error-message {
  color: var(--color-red-default);
  font: var(--font-14-regular);
  margin-top: var(--space-100);
}

.analyzing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-400);
  background-color: var(--color-bg-subtle);
  border-radius: var(--radius-medium);
}

.analyzing-animation {
  width: 40px;
  height: 40px;
  border: 4px solid var(--color-blue-light);
  border-top: 4px solid var(--color-blue-default);
  border-radius: 50%;
  margin-bottom: var(--space-300);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.results-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-400);
}

.results-summary {
  display: flex;
  align-items: center;
  gap: var(--space-300);
  padding: var(--space-300);
  background-color: var(--color-bg-subtle);
  border-radius: var(--radius-medium);
}

.results-score {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font: var(--font-32-bold);
  color: white;
}

.results-score .percent {
  font-size: 16px;
  margin-top: -8px;
}

.score-excellent {
  background-color: var(--color-green-default);
}

.score-good {
  background-color: var(--color-blue-default);
}

.score-moderate {
  background-color: var(--color-warning-default);
}

.score-poor {
  background-color: var(--color-red-default);
}

.results-text {
  flex-grow: 1;
}

.results-text p {
  margin-top: var(--space-100);
  margin-bottom: 0;
}

.results-details {
  display: flex;
  flex-direction: column;
  gap: var(--space-300);
}

.category-card {
  background-color: white;
  border-radius: var(--radius-medium);
  box-shadow: var(--elevation-shadow-light-100);
  overflow: hidden;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-subtle);
  padding: var(--space-200) var(--space-300);
  border-bottom: 1px solid var(--color-border-default);
}

.category-score {
  font: var(--font-16-semibold);
  padding: var(--space-50) var(--space-150);
  border-radius: var(--radius-small);
  color: white;
}

.issue-list {
  list-style-type: none;
  padding: var(--space-200);
  margin: 0;
}

.issue-list li {
  padding: var(--space-200);
  border-radius: var(--radius-small);
  margin-bottom: var(--space-200);
  border-left: 4px solid;
}

.issue-list li:last-child {
  margin-bottom: 0;
}

.issue-list li.high {
  background-color: var(--color-red-subtle);
  border-left-color: var(--color-red-default);
}

.issue-list li.medium {
  background-color: var(--color-warning-subtle);
  border-left-color: var(--color-warning-default);
}

.issue-list li.low {
  background-color: var(--color-blue-subtle);
  border-left-color: var(--color-blue-default);
}

.issue-severity {
  display: inline-block;
  font: var(--font-12-semibold);
  padding: var(--space-50) var(--space-100);
  border-radius: var(--radius-small);
  margin-right: var(--space-100);
}

.issue-list li.high .issue-severity {
  background-color: var(--color-red-default);
  color: white;
}

.issue-list li.medium .issue-severity {
  background-color: var(--color-warning-default);
  color: white;
}

.issue-list li.low .issue-severity {
  background-color: var(--color-blue-default);
  color: white;
}

.issue-description {
  font: var(--font-14-medium);
  color: var(--color-text-primary);
}

.issue-details {
  margin-top: var(--space-150);
  padding: var(--space-150);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: var(--radius-small);
}

.issue-example {
  display: flex;
  flex-direction: column;
  gap: var(--space-100);
  margin-bottom: var(--space-100);
  font: var(--font-12-regular);
}

.issue-example code {
  font-family: monospace;
  padding: var(--space-50);
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: var(--radius-small);
}

.found, .expected {
  display: flex;
  align-items: center;
  gap: var(--space-100);
}

.found::before, .expected::before {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.found::before {
  background-color: var(--color-red-default);
}

.expected::before {
  background-color: var(--color-green-default);
}

.issue-suggestion {
  font: var(--font-12-regular);
  font-style: italic;
  color: var(--color-text-secondary);
  margin: 0;
}

.issue-screenshot {
  margin-top: var(--space-200);
  border-top: 1px dashed var(--color-border-default);
  padding-top: var(--space-200);
}

.issue-screenshot h4 {
  font: var(--font-14-medium);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-100) 0;
}

.screenshot-container {
  display: flex;
  gap: var(--space-300);
  overflow-x: auto;
  padding-bottom: var(--space-100);
}

.screenshot {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-small);
  overflow: hidden;
  position: relative;
}

.screenshot img {
  width: 100%;
  height: auto;
  display: block;
}

.screenshot-label {
  position: absolute;
  top: var(--space-50);
  left: var(--space-50);
  padding: var(--space-50) var(--space-100);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font: var(--font-12-medium);
  border-radius: var(--radius-small);
}

.screenshot.current .screenshot-label {
  background-color: var(--color-red-default);
}

.screenshot.expected .screenshot-label {
  background-color: var(--color-green-default);
}

.error-container {
  background-color: var(--color-red-subtle);
  border-radius: var(--radius-medium);
  padding: var(--space-300);
  text-align: center;
}

.error-container p {
  color: var(--color-red-default);
  margin-bottom: var(--space-300);
}

@media (max-width: 768px) {
  .url-input-container {
    flex-direction: column;
  }
  
  .results-summary {
    flex-direction: column;
    text-align: center;
  }
  
  .issue-example {
    flex-direction: column;
  }

  .screenshot-container {
    flex-direction: column;
  }
}

.analyze-button {
  white-space: nowrap;
  min-width: 120px;
}

.cors-solutions {
  margin-bottom: var(--space-300);
}

.solution-cards {
  display: flex;
  gap: var(--space-300);
  flex-wrap: wrap;
}

.solution-card {
  flex: 1;
  min-width: 280px;
  background-color: white;
  border-radius: var(--radius-medium);
  padding: var(--space-300);
  box-shadow: var(--elevation-shadow-light-100);
  margin-bottom: var(--space-200);
}

.solution-card h4 {
  font: var(--font-18-medium);
  color: var(--color-text-primary);
  margin-bottom: var(--space-200);
}

.solution-card p {
  color: var(--color-text-secondary);
  font: var(--font-14-regular);
  margin-bottom: var(--space-200);
}

.solution-card pre {
  background-color: var(--color-bg-subtle);
  border-radius: var(--radius-small);
  padding: var(--space-200);
  margin-bottom: var(--space-200);
}

.solution-card pre code {
  font-family: monospace;
  padding: var(--space-50);
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: var(--radius-small);
}

@media (max-width: 768px) {
  .solution-cards {
    flex-direction: column;
  }
  
  .solution-card {
    min-width: 100%;
  }
  
  .error-container p {
    font-size: 14px;
    line-height: 1.5;
  }
}

/* 代理设置样式 */
.proxy-setup-content {
  padding: 0 10px;
}

.setup-steps {
  margin: 20px 0;
}

.step {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.step-number {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--color-brand-default);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-content {
  flex-grow: 1;
}

.step-content h4 {
  margin-top: 0;
  margin-bottom: 10px;
}



.step-note {
  font-size: 0.9em;
  color: #666;
  margin-top: 5px;
}

.status-indicator {
  margin-top: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  display: inline-block;
}

.status-online {
  background-color: rgba(103, 194, 58, 0.1);
  color: var(--color-green-default);
  border: 1px solid rgba(103, 194, 58, 0.2);
}

.status-offline {
  background-color: rgba(245, 108, 108, 0.1);
  color: var(--color-red-default);
  border: 1px solid rgba(245, 108, 108, 0.2);
}

.proxy-error-card {
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--color-red-subtle);
  border: 1px solid var(--color-red-default);
  display: flex;
  align-items: flex-start;
}

.error-icon {
  font-size: 24px;
  color: var(--color-red-default);
  margin-right: 15px;
}

.error-content h3 {
  margin-top: 0;
  color: var(--color-red-default);
}
</style> 