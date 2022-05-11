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
