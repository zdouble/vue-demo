import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import 'assets/css/bootstrap.css'
import 'assets/js/bootstrap.min.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
