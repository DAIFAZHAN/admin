<template>
  <!-- ⼀级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    router
    ><!-- 开启router实现路由跳转 -->
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
console.log(router.getRoutes()) // 返回完整路由表，但存在重复的路由数据
const routes = computed(() => {
  const fRoutes = filterRouters(router.getRoutes())
  return generateMenus(fRoutes)
})
console.log(JSON.stringify(routes.value))

// 默认激活 // 计算⾼亮 menu 的⽅法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>
