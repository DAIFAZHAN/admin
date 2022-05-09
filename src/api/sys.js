import request from '@/utils/request'
/**
 * 登录
 * return promise
 */
export const login = (data) => {
  // request 为axios实例
  return request({
    // url: '/sys/login',
    url: '/login',
    method: 'POST',
    data
  })
}
