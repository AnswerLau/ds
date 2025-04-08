<template>
  <div class="demo">
    <!-- Header Navigation -->
    <header class="header">
      <div class="header-left">
        <img src="../../assets/logo.svg" alt="Atomm Design System" class="logo-image" />
      </div>
        <nav class="main-nav">
          <ul>
            <li><a href="#" class="active">Projects</a></li>
            <li><a href="#">Pro</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Docs</a></li>
          </ul>
        </nav>
     
      <div class="header-right">
        <div class="search-container">
          <ds-input placeholder="Search" prefix="search" />
        </div>
        <ds-button type="primary">Create</ds-button>
      </div>
    </header>

    <div class="main-content">
      <!-- User Panel -->
      <aside class="user-panel">
        <div class="user-info">
          <div class="user-avatar" style="background-color: var(--color-bg-subtle); background-image: url('../../assets/avatar.png');"></div>
          <h3 class="user-name">Username</h3>
          <div class="user-credits">
            <span class="credit-balance">Credits: 1,250</span>
            <ds-button size="small" type="outline">Buy Credits</ds-button>
          </div>
        </div>
        
        <div class="section-divider"></div>
        
        <div class="stats-section">
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-value">1.2k</span>
              <span class="stat-label">Followers</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">358</span>
              <span class="stat-label">Following</span>
            </div>
          </div>
        </div>
        
        <div class="section-divider"></div>
        
        <div class="stats-section">
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-value">42</span>
              <span class="stat-label">Created</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">128</span>
              <span class="stat-label">Likes</span>
            </div>
          </div>
          <div class="stats-row">
            <div class="stat-item">
              <span class="stat-value">56</span>
              <span class="stat-label">Favorites</span>
            </div>
            <div class="stat-item">
              <span class="stat-value">235</span>
              <span class="stat-label">Downloads</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Content Area -->
      <main class="content-area">
        <!-- Tab Component -->
        <ds-tab 
          v-model="activeTab" 
          :tabs="tabs"
          class="main-tabs"
        >
          <div v-if="activeTab === 'projects'" class="tab-content">
            <div class="projects-grid">
              <div class="project-card" v-for="(project, index) in projects" :key="index">
                <div class="project-image">
                  <div class="project-thumbnail" :style="{ backgroundColor: project.color }"></div>
                  <span class="project-price">{{ project.price }}</span>
                </div>
                <div class="project-info">
                  <h4>{{ project.title }}</h4>
                  <div class="project-meta">
                    <span class="designer">by {{ project.designer }}</span>
                    <div class="interaction-data">
                      <span class="interaction-item"><span class="icon-like"></span> {{ project.likes }}</span>
                      <span class="interaction-item"><span class="icon-star"></span> {{ project.stars }}</span>
                    </div>
                  </div>
                  <div class="project-tags">
                    <span class="tag" v-for="(tag, tagIndex) in project.tags" :key="tagIndex">{{ tag }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div v-if="activeTab === 'collections'" class="tab-content">
            <div class="empty-state">
              <div class="empty-icon"></div>
              <p>No collections yet</p>
            </div>
          </div>
          
          <div v-if="activeTab === 'following'" class="tab-content">
            <div class="empty-state">
              <div class="empty-icon"></div>
              <p>Not following anyone yet</p>
            </div>
          </div>
        </ds-tab>
      </main>
    </div>
  </div>
</template>

<script>
import DsButton from '../../components/ds_Button.vue';
import DsInput from '../../components/ds_Input.vue';
import DsTab from '../../components/ds_Tab.vue';

export default {
  name: 'Demo',
  components: {
    'ds-button': DsButton,
    'ds-input': DsInput,
    'ds-tab': DsTab
  },
  data() {
    return {
      activeTab: 'projects',
      tabs: [
        { name: 'projects', label: 'Projects' },
        { name: 'collections', label: 'Collections' },
        { name: 'following', label: 'Following' }
      ],
      projects: [
        {
          title: 'UI Design System Template',
          designer: 'Designer A',
          price: '$99',
          likes: 42,
          stars: 18,
          tags: ['UI Kit', 'Pro'],
          color: 'var(--color-blue-subtle)'
        },
        {
          title: 'Mobile App Prototype',
          designer: 'Designer B',
          price: 'Free',
          likes: 76,
          stars: 32,
          tags: ['Mobile', 'Free'],
          color: 'var(--color-green-subtle)'
        },
        {
          title: 'E-commerce Website Design',
          designer: 'Designer C',
          price: '$199',
          likes: 128,
          stars: 64,
          tags: ['E-commerce', 'Pro'],
          color: 'var(--color-orange-subtle)'
        },
        {
          title: 'Icon Collection Bundle',
          designer: 'Designer D',
          price: '$149',
          likes: 95,
          stars: 41,
          tags: ['Icons', 'Pro'],
          color: 'var(--color-purple-subtle)'
        }
      ],
      menuItems: [
        { label: 'My Creations', color: 'var(--color-blue-default)' },
        { label: 'My Likes', color: 'var(--color-red-default)' },
        { label: 'My Favorites', color: 'var(--color-orange-default)' },
        { label: 'Order History', color: 'var(--color-green-default)' },
        { label: 'Credit Center', color: 'var(--color-purple-default)' }
      ]
    };
  }
}
</script>

<style scoped>
.demo {
  font-family: var(--font-family);
  color: var(--color-text-primary);
  background-color: var(--color-bg-default);
  min-height: 100vh;
}

/* 顶部导航栏样式 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.header-left, .header-right {
  display: flex;
  align-items: center;
}

.brand-logo {
  margin-right: var(--space-300);
}

.logo-block {
  width: 40px;
  height: 40px;
  background-color: var(--color-brand-default);
  border-radius: var(--radius-small);
  margin-right: var(--space-200);
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin-right: var(--space-300);
}

.main-nav a {
  text-decoration: none;
  color: var(--color-text-secondary);
  font: var(--font-14-medium);
  padding: var(--space-100) var(--space-200);
  border-radius: var(--radius-small);
}

.main-nav a.active, .main-nav a:hover {
  color: var(--color-brand-default);
}

.search-container {
  position: relative;
  margin-right: var(--space-300);
}

.search-input {
  width: 220px;
}



/* 主内容区布局 */
.main-content {
  display: flex;
  padding-top: var(--space-300);
  gap: var(--space-300);
}

/* 左侧用户面板 */
.user-panel {
  width: 250px;
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-medium);
  padding: var(--space-300);
  box-shadow: var(--elevation-100);
}

.user-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--space-200);
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--color-brand-subtlest);
  background-image: none;
}

.user-name {
  font: var(--font-16-medium);
  margin: var(--space-100) 0;
}

.user-credits {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-100);
  margin-top: var(--space-100);
}

.credit-balance {
  font: var(--font-14-regular);
  color: var(--color-text-secondary);
}

.section-divider {
  height: 1px;
  background-color: var(--color-stroke-divider);
  margin: var(--space-200) 0;
}

.stats-section {
  padding: var(--space-100) 0;
}

.stats-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: var(--space-200);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  font: var(--font-16-medium);
  color: var(--color-text-primary);
}

.stat-label {
  font: var(--font-12-regular);
  color: var(--color-text-tertiary);
}

/* 中央内容区 */
.content-area {
  flex: 1;
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-medium);
  padding: var(--space-300);
  box-shadow: var(--elevation-100);
}

.main-tabs {
  width: 100%;
}

.tab-content {
  margin-top: var(--space-300);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--space-300);
}

.project-card {
  border-radius: var(--radius-medium);
  overflow: hidden;
  background-color: white;
  box-shadow: var(--elevation-100);
  transition: transform 0.2s, box-shadow 0.2s;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--elevation-200);
}

.project-image {
  position: relative;
  height: 160px;
}

.project-thumbnail {
  width: 100%;
  height: 100%;
}

.project-price {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 4px 8px;
  border-radius: var(--radius-small);
  font: var(--font-12-medium);
}

.project-info {
  padding: var(--space-200);
}

.project-info h4 {
  margin: 0 0 var(--space-100);
  font: var(--font-14-medium);
}

.project-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--space-100);
  font: var(--font-12-regular);
  color: var(--color-text-secondary);
}

.interaction-data {
  display: flex;
  gap: var(--space-100);
}

.interaction-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

.icon-like, .icon-star {
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
}

.icon-like {
  background-color: var(--color-red-default);
}

.icon-star {
  background-color: var(--color-orange-default);
}

.project-tags {
  display: flex;
  gap: var(--space-100);
  flex-wrap: wrap;
}

.tag {
  background-color: var(--color-bg-subtlest);
  color: var(--color-text-secondary);
  padding: 2px 6px;
  border-radius: var(--radius-small);
  font: var(--font-12-regular);
}

/* 右侧功能入口 */
.function-menu {
  width: 200px;
  background-color: var(--color-bg-surface);
  border-radius: var(--radius-medium);
  padding: var(--space-300);
  box-shadow: var(--elevation-100);
}

.function-menu h3 {
  font: var(--font-16-medium);
  margin-top: 0;
  margin-bottom: var(--space-200);
  padding-bottom: var(--space-100);
  border-bottom: 1px solid var(--color-stroke-divider);
}

.function-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.function-list li {
  margin-bottom: var(--space-200);
}

.function-list a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text-secondary);
  font: var(--font-14-regular);
  padding: var(--space-100) var(--space-200);
  border-radius: var(--radius-small);
  transition: background-color 0.2s;
}

.function-list a:hover {
  background-color: var(--color-bg-subtlest);
  color: var(--color-text-primary);
}

.menu-icon {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: var(--space-100);
}

/* 空状态 */
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: var(--color-text-tertiary);
}

.empty-icon {
  width: 64px;
  height: 64px;
  border-radius: var(--radius-medium);
  margin-bottom: var(--space-200);
  background-color: var(--color-bg-subtle);
}
</style>
