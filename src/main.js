import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import './assets/css/iconfont.css'
import './assets/css/markdown.css'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
