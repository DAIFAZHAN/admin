import variables from '@/styles/variables.module.scss'
import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'

const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  /**
   * @returns true 表示已存在⽤户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
  /**
   * 左侧菜单栏伸缩
   */
  sidebarOpened: (state) => state.app.sidebarOpened,

  language: (state) => state.app.language,

  mainColor: (state) => state.theme.mainColor,

  tagsViewList: (state) => state.app.tagsViewList
}
export default getters
