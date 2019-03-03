import VueDefaultImage from './components/vue-default-image'

const install = (Vue) => {
  Vue.component(VueDefaultImage.name, VueDefaultImage)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueDefaultImage,
}
