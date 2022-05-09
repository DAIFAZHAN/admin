import router from './router'
import store from './store'
// ⽩名单
const whiteList = ['/login']

/**
 * 路由前置守卫
 */
router.beforeEach(async (to, from, next) => {
  // 当⽤户未登陆时，不允许进⼊除 login 之外的其他⻚⾯。
  // ⽤户登录后， token 未过期之前，不允许进⼊ login ⻚⾯
  // 存在 token ，进⼊主⻚
  // if (store.state.user.token) {
  // 快捷访问
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // 判断⽤户资料是否获取
      // 若不存在⽤户信息，则需要获取⽤户信息
      if (!store.getters.hasUserInfo) {
        // 触发获取⽤户信息的 action
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 没有token的情况下，可以进⼊⽩名单
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
