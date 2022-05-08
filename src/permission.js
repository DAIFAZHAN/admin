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
