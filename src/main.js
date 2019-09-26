import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import store from './store'


import routes from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
 
library.add(faGithub, faEnvelope, faLinkedin, faPhone)
 

 
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

const router = new Router({routes})

const app = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
