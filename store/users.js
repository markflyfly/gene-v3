/*
* 用户信息
*/

export const state = () => {
  return {
    // 用户信息
    info: {
      // 用户名
      name: '',
      // 用户头像
      headImg: '',
      // 关注
      attention: 0,
      // 动态
      dynamic: 0,
      // 喜欢
      like: 0
    },
    // 用户草稿
    sketch: [],
    // 我喜欢的
    like: []
  }
}

export const mutations = {
  // 设置用户名
  SET_NAME(state, action) {
    state.info.name = action
  },

  // 设置用户头像
  SET_HEADIMG(state, action) {
    state.info.headImg = action
  },

  // 其他数据
  SET_DATA(state, action) {
    state.info.attention = action.attention
    state.info.dynamic = action.dynamic
    state.info.like = action.like
  },

  // 我的草稿
  SET_SKETCH(state, action) {
    state.sketch = action
  },

  // 我喜欢的
  SET_LIKE(state, action) {
    state.like = action
  }
}
