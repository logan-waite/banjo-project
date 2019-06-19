import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import store from './store'
import GoogleMaps from 'google-maps'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faChevronDown,
  faChevronLeft,
  faPencilAlt,
  faPlus,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

library.add(faChevronDown, faChevronLeft, faPlus, faTimes, faPencilAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

GoogleMaps.KEY = 'AIzaSyADXGvfKPRnvYULA81DxvEHyrgiBbDBP3k'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
