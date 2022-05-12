<template>
  <div class="">
    <el-card>
      <!-- 树形结构：rowkey、default-expand-all、tree-props -->
      <el-table
        :data="allPermission"
        style="width: 100%; margin-bottom: 20px"
        row-key="id"
        border
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column
          prop="permissionName"
          :label="$t('msg.permission.name')"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="permissionMark"
          :label="$t('msg.permission.mark')"
          width="180"
        >
        </el-table-column>
        <el-table-column
          prop="permissionDesc"
          :label="$t('msg.permission.desc')"
        >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { permissionList } from '@/api/permission'
import { watchSwitchLang } from '@/utils/i18n'
import { ref } from 'vue'
/**
 * 权限分级：
 * 1. ⼀级权限为⻚⾯权限
 * permissionMark 对应 路由名称
 * 2. ⼆级权限为功能权限
 * permissionMark 对应 功能权限表
 */
// 所有权限
const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = await permissionList()
}
getPermissionList()
watchSwitchLang(getPermissionList)
</script>

<style lang="scss" scoped></style>
