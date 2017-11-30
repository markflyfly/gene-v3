/*
*
* 全局设置数据状态
*
*/

export const state = () => {
  return {
    // 是否为移动端
    isMobile: false,
    // ua
    userAgent: '',
    // 是否为H5页面
    pageType: false,
    // 是否已登录
    isLogin: false,
    // 是否立即去登录
    toLogin: false
  }
}

export const getters = {
  isMobile: state => state.isMobile,
}

export const mutations = {

  // 设置是否移动端状态
  SET_IS_MOBILE(state, action) {
    state.isMobile = action
  },

  // 设置UA
  SET_USER_AGENT(state, action) {
    state.userAgent = action
  },

  // 页面类型
  SET_PAGE_TYPE(state, action) {
    state.pageType = action
  },

  // 设置登录状态
  SET_IS_LOGIN(state, action) {
    state.isLogin = action
  },

  // 设置是否去登录
  SET_TO_LOGIN(state, action) {
    state.toLogin = action
  }
}
