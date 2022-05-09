<template>
  <!-- ⼀级 menu 菜单 -->
  <el-menu
    :uniqueOpened="true"
    default-active="2"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <sidebar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></sidebar-item>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './SidebarItem.vue'

const router = useRouter()
console.log(router.getRoutes()) // 返回完整路由表，但存在重复的路由数据
const routes = computed(() => {
  const fRoutes = filterRouters(router.getRoutes())
  return generateMenus(fRoutes)
})
console.log(JSON.stringify(routes.value))
</script>
