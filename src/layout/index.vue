<template>
  <div
    class="app-wrapper"
    :class="[$store.getters.sidebarOpened ? 'openSidebar' : 'hideSidebar']"
  >
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: $store.getters.cssVar.menuBg }"
    />
    <!-- 为了主题更换，此处使用动态scss -->
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
        <!-- tags -->
        <tags-view></tags-view>
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import TagsView from '@/components/TagsView'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import AppMain from './components/AppMain'
import variables from '@/styles/variables.module.scss'
import {} from 'vue'
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss'; // webpack
@import '~@/styles/variables.module.scss';

.app-wrapper {
  @include clearfix; // 使用mixin里的clearfix
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width #{$sideBarDuration};
}

.hideSidebar .fixed-header {
  width: calc(100% - #{$hideSideBarWidth});
}
</style>
