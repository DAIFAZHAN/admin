/**
 * 处理所有和⽤户相关的内容
 */
import { login } from '@/api/sys'
// import md5 from 'md5'
import { setItem, getItem } from '@/utils/storage'
import { TOKEN } from '@/constant'
import router from '@/router'

export default {
  namespaced: true, // 单独的模块，不会被合并到其他模块去
  state: () => ({
    token: getItem(TOKEN) || ''
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    }
  },
  actions: {
    /**
     * 登录请求动作
     */
    login(context, userInfo) {
      const { username, password } = userInfo
      // 返回promise，成功或失败可被处理
      return new Promise((resolve, reject) => {
        login({
          username,
          // password: md5(password) // 使用MD5加密
          password // 暂不加密配合mock
        })
          .then((data) => {
            console.log(data)
            this.commit('user/setToken', data.token)
            // 跳转
            router.push('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
