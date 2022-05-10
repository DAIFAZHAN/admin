<template>
  <!-- 主题图标
 v-bind：https://v3.cn.vuejs.org/api/instance-properties.html#attrs
 v-bind="$attrs" 父组件给他指定的属性会直接绑定到该元素
 -->
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handleSetTheme"
  >
    <div>
      <el-tooltip :content="$t('msg.navBar.themeChange')">
        <svg-icon icon="change-theme" />
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.theme.themeColorChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 展示弹出层 -->
  <div></div>
</template>
<script setup>
const handleSetTheme = (command) => {}
</script>
<style lang="scss" scoped></style>
