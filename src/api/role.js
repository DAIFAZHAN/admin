import request from '@/utils/request'
/**
 * 获取所有⻆⾊
 */
export const roleList = () => {
  return request({
    url: '/role/list'
  })
}
