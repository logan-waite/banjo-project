import Vue from 'vue'
import App from './app.vue'
import GoogleMaps from 'google-maps'

GoogleMaps.KEY = 'AIzaSyADXGvfKPRnvYULA81DxvEHyrgiBbDBP3k'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
