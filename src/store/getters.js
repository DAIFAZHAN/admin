import variables from '@/styles/variables.module.scss'
const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在⽤户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => variables,
  /**
   * 左侧菜单栏伸缩
   */
  sidebarOpened: (state) => state.app.sidebarOpened,

  language: (state) => state.app.language
}
export default getters
