interface loginReq {
  // 用户名
  username: string
  // 密码
  password: string
  // 记住密码
  rememberme: boolean
}

export function login(req:loginReq) {
  return {
    code: 200,
    msg: '登录成功',
    data: {
      userId: 1,
      username: 'admin',
      nickname: '管理员',
      avatar: '',
      roles: ['admin'],
      permissions: ['*']
    }
  }
}