import CityPickerComponent from './city-picker.vue'

const cityPicker = {
  install: function(Vue) {
    Vue.component(CityPickerComponent.name, CityPickerComponent)
  }
}

export default cityPicker
