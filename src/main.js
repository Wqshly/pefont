// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
//import './assets/iconfont/iconfont.css'
import icon from "./assets/icon/iconfont.js"

//import VideoPlayer from 'vue-video-player'
//import 'vue-video-player/src/custom-theme.css'
//import 'video.js/dist/video-js.css'

//Vue.use(VideoPlayer)


Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App,icon},
  template: '<App/>'
});
