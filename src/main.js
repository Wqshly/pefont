import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload'
import icon from "./assets/icon/iconfont.js"

Vue.use(VueLazyload);
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});


