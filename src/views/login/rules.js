export const validatePassword = () => {
  return (rule, value, callback) => {
    if (value.length < 5) {
      // 6 改 5 配合mock服务
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
