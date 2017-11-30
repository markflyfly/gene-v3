import ScrollComponent from './scroll.vue'

const scroll = {
  install: function(Vue) {
    Vue.component(ScrollComponent.name, ScrollComponent)
  }
}

export default scroll
