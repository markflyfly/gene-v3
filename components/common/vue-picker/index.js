import PickerComponent from './picker.vue'

const picker = {
  install: function(Vue) {
    Vue.component(PickerComponent.name, PickerComponent)
  }
}

export default picker
