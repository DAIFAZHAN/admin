<template>
  <el-breadcrumb class="breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in breadcrumbData"
        :key="item.path"
      >
        <!-- 不可点击项 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
          generateTitle(item.meta.title)
        }}</span>
        <!-- 可点击项 -->
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          generateTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { generateTitle } from '@/utils/i18n'
import { ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
// ⽣成数组数据
const breadcrumbData = ref([])
const getBreadcrumbData = () => {
  // matched 获取当前路由的标准化路由记录
  breadcrumbData.value = route.matched.filter(
    (item) => item.meta && item.meta.title
  )
  console.log(breadcrumbData.value)
}
// 监听路由变化时触发
watch(
  route,
  () => {
    getBreadcrumbData()
  },
  {
    immediate: true
  }
)
// 处理点击事件
const router = useRouter()
const onLinkClick = (item) => {
  console.log(item)
  router.push(item.path)
}
// 将来需要进⾏主题替换，所以这⾥获取下动态样式
const store = useStore()
// eslint-disable-next-line
const linkHoverColor = ref(store.getters.cssVar.menuBg)
</script>
<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
    cursor: pointer;
  }
  .redirect:hover {
    // 将来需要进⾏主题替换，所以这⾥不去写死样式
    color: v-bind(linkHoverColor);
  }
}
</style>
