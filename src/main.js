import Vue from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import './assets/css/iconfont.css'
import './assets/font/iconfont.css'
import './assets/css/markdown.css'
import dayjs from 'dayjs'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';
import NProgress from 'nprogress';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);

axios.defaults.baseURL = 'http://localhost:8080';

Vue.filter("date", function(value) {
    return dayjs(value).format("YYYY-MM-DD");
});

Vue.filter("year", function(value) {
    return dayjs(value).format("YYYY");
});

Vue.filter("hour", function(value) {
    return dayjs(value).format("HH:mm:ss");
});

Vue.filter("time", function(value) {
    return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
});

Vue.filter("num", function(value) {
    if (value >= 1000) {
        return (value / 1000).toFixed(1) + "k";
    }
    return value;
});

/* 全局前端守卫 */
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

router.afterEach(() => {
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });
  NProgress.done();
});

axios.interceptors.response.use(
    function(response) {
      switch (response.data.code) {
        case 50000:
          Vue.prototype.$toast({ type: "error", message: "系统异常" });
      }
      return response;
    },
    function(error) {
      return Promise.reject(error);
    }
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
