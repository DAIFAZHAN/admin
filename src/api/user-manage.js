import request from '@/utils/request'
/**
 * 获取⽤户列表数据
 */
export const getUserManageList = (data) => {
  return request({
    url: '/user-manage/list',
    params: data
  })
}

/**
 * 获取所有⽤户列表数据
 */
export const getUserManageAllList = () => {
  return request({
    url: '/user-manage/all-list'
  })
}

/**
 * 批量导⼊
 */
export const userBatchImport = (data) => {
  return request({
    url: '/user-manage/batch/import',
    method: 'POST',
    data
  })
}

/**
 * 删除指定数据
 */
export const deleteUser = (id) => {
  return request({
    url: `/user-manage/detele/${id}`
  })
}

/**
 * 获取⽤户详情
 */
export const userDetail = (id) => {
  return request({
    url: `/user-manage/detail/${id}`
  })
}
