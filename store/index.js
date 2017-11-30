/*
*
* 根数据状态 存放全局数据和异步方法
*
*/
import Service from '~/plugins/axios'

// global actions
export const actions = {
  // 全局服务初始化
  nuxtServerInit(store, {params, route, isServer, req}) {
    // 检查设备类型
    const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent)
    store.commit('option/SET_IS_MOBILE', isMobile)
    store.commit('option/SET_USER_AGENT', userAgent)
    // 设置页面类型是否为H5
    store.commit('option/SET_PAGE_TYPE', route.path.indexOf('mobile') > -1)
    // 检查是否登录
    if (req.cookies.token) {
      store.commit('users/SET_NAME', req.cookies.nickName)
      store.commit('users/SET_HEADIMG', req.cookies.headImageUrl)
    }
  },
  // 是否已登录
  isLogin({commit}, params = {isLogin: false}) {
    return Service.get('/user/is_login')
        .then(response => {
          return commit('option/SET_IS_LOGIN', response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
  },
  // 获取用户资料
  getUserInfo({commit}, params = {isLogin: false}) {
    return Service.get('/api/user/info')
        .then(response => {
          if(response.data.code == 0) {
            return commit('users/SET_DATA', response.data)
          } else {
            return commit('option/SET_TO_LOGIN', true)
          }
        })
        .catch(error => {
          console.log(error)
        })
  },
  // 获取用户的草稿
  getSketch({commit}, params = {isLogin: false}) {
    return Service.get('/api/user/sketch')
        .then(response => {
          if(response.data.code == 0) {
            return commit('users/SET_SKETCH', response.data.list)
          } else {
            return commit('option/SET_TO_LOGIN', true)
          }
        })
        .catch(error => {
          console.log(error)
        })
  },
  // 获取我喜欢的
  getLike({commit}, params = {isLogin: false}) {
    return Service.get('/api/user/like')
        .then(response => {
          if(response.data.code == 0) {
            return commit('users/SET_LIKE', response.data.list)
          } else {
            return commit('option/SET_TO_LOGIN', true)
          }
        })
        .catch(error => {
          console.log(error)
        })
  },
}
