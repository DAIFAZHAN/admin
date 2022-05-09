const getters = {
  token: (state) => state.user.token,
  /**
   * @returns true 表示已存在⽤户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  }
}
export default getters
