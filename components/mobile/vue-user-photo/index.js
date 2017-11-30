import UserPhotoComponent from './user-photo.vue'

const userPhoto = {
  install: function(Vue) {
    Vue.component(UserPhotoComponent.name, UserPhotoComponent)
  }
}

export default userPhoto
