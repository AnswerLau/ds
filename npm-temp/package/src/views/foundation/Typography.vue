<template>
  <div class="section-page">
    <h1>Typography</h1>
    <p class="description">我们的字体系统设计旨在确保在各种设备和场景下的最佳可读性和视觉层次。</p>
    
    <div class="section">
      <h2>字体家族 Font Family</h2>
      <div class="font-family-showcase">
        <div class="font-sample">
          <p style="font: var(--font-16-regular)">Inter 是一款专为屏幕优化的现代无衬线字体，具有良好的可读性和清晰度。</p>
          <p class="font-name">Inter - var(--font-family)</p>
        </div>
      </div>
    </div>
    
    <div class="section">
      <h2>字体层级 Type Scale</h2>
      
      <div class="category-card">
        <h3>标题文字</h3>
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-32-bold)">Aa</div>
          <div class="type-details">
            <p class="type-name">标题文字 32px Bold</p>
            <p class="type-description">用于页面主标题，重要信息展示</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-24-semibold)">Aa</div>
          <div class="type-details">
            <p class="type-name">标题文字 24px SemiBold</p>
            <p class="type-description">用于章节标题，分区块标题</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-20-semibold)">Aa</div>
          <div class="type-details">
            <p class="type-name">标题文字 20px SemiBold</p>
            <p class="type-description">用于子标题，卡片标题</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-16-semibold)">Aa</div>
          <div class="type-details">
            <p class="type-name">标题文字 16px SemiBold</p>
            <p class="type-description">用于小标题，列表标题</p>
          </div>
        </div>
      </div>
      
      <div class="category-card">
        <h3>正文文字</h3>
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-16-medium)">Aa</div>
          <div class="type-details">
            <p class="type-name">正文文字 16px Medium</p>
            <p class="type-description">用于重要的正文内容，强调文本</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-16-regular)">Aa</div>
          <div class="type-details">
            <p class="type-name">正文文字 16px Regular</p>
            <p class="type-description">用于普通的正文内容，段落文本</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-14-medium)">Aa</div>
          <div class="type-details">
            <p class="type-name">正文文字 14px Medium</p>
            <p class="type-description">用于次要的正文内容，按钮文本</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-14-regular)">Aa</div>
          <div class="type-details">
            <p class="type-name">正文文字 14px Regular</p>
            <p class="type-description">用于普通的次要内容，表格内容</p>
          </div>
        </div>
      </div>
      
      <div class="category-card">
        <h3>辅助文字</h3>
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-12-medium)">Aa</div>
          <div class="type-details">
            <p class="type-name">辅助文字 12px Medium</p>
            <p class="type-description">用于标签、提示等辅助信息</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-12-regular)">Aa</div>
          <div class="type-details">
            <p class="type-name">辅助文字 12px Regular</p>
            <p class="type-description">用于次要的辅助信息，注释文本</p>
          </div>
        </div>
        
        <div class="type-row">
          <div class="type-preview" style="font: var(--font-10-regular)">Aa</div>
          <div class="type-details">
            <p class="type-name">最小文字 10px Regular</p>
            <p class="type-description">用于极小的辅助信息，版权信息</p>
          </div>
        </div>
      </div>
    
      <h2>文本示例</h2>
      <div class="category-card">
        <h1 style="font: var(--font-32-bold); margin-bottom: var(--space-200); color: var(--color-text-primary)">Design System Title</h1>
        <h2 style="font: var(--font-24-semibold); margin-bottom: var(--space-200); color: var(--color-text-primary)">Component Library Overview</h2>
        <p style="font: var(--font-16-regular); margin-bottom: var(--space-150); color: var(--color-text-primary)">
          The design system is a comprehensive guide that includes design principles, component specifications, style guidelines, and interaction patterns. By using a unified design language, we can ensure consistency and usability across products while improving the efficiency of design and development.
        </p>
        <h3 style="font: var(--font-20-semibold); margin-bottom: var(--space-150); margin-top: var(--space-200); color: var(--color-text-primary)">Core Principles</h3>
        <p style="font: var(--font-16-regular); margin-bottom: var(--space-150); color: var(--color-text-primary)">
          Our design system is built on the following core principles:
        </p>
        <ul style="margin-bottom: var(--space-200); padding-left: var(--space-200);">
          <li style="font: var(--font-14-regular); margin-bottom: var(--space-100); color: var(--color-text-secondary)">Consistency: Ensuring all elements and interactions in the product remain consistent</li>
          <li style="font: var(--font-14-regular); margin-bottom: var(--space-100); color: var(--color-text-secondary)">Usability: Prioritizing user experience and ease of use</li>
          <li style="font: var(--font-14-regular); margin-bottom: var(--space-100); color: var(--color-text-secondary)">Efficiency: Enhancing the productivity of design and development teams</li>
          <li style="font: var(--font-14-regular); color: var(--color-text-secondary)">Adaptability: Being able to adapt to different products and usage scenarios</li>
        </ul>
        <p style="font: var(--font-12-regular); color: var(--color-text-tertiary)">
          Note: This example only demonstrates the application of text styles, and adjustments should be made based on specific scenarios in actual use.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Typography'
}
</script>

<style scoped>
.font-family-showcase {
  background-color: var(--color-bg-default);
  border-radius: 8px;
  padding: var(--space-200);
  margin-bottom: var(--space-300);
  border: 1px solid var(--color-stroke-default);
}

.font-sample {
  margin-bottom: var(--space-150);
}

.font-name {
  margin-top: var(--space-100);
  color: var(--color-text-tertiary);
  font: var(--font-14-medium);
}

.type-row {
  display: flex;
  margin-bottom: var(--space-150);
  padding-bottom: var(--space-150);
  border-bottom: 1px dashed var(--color-stroke-divider);
}

.type-row:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.type-preview {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-subtlest);
  border-radius: 8px;
  margin-right: var(--space-200);
  border: 1px solid var(--color-stroke-default);
}

.type-details {
  flex: 1;
}

.type-name {
  font: var(--font-16-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-50);
}

.type-description {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
}

.type-token {
  font: var(--font-12-medium);
  color: var(--color-text-tertiary);
  padding: 8px 12px;
  background-color: var(--color-bg-subtlest);
  border-radius: 4px;
  display: inline-block;
}
</style>