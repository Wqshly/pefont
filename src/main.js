import Vue from 'vue'
import App from './App'
import router from './router'

import VueLazyload from 'vue-lazyload'
import VueCropper from 'vue-cropper'
import AMap from 'vue-amap'

import header from './components/header.vue'
import footer from './components/footer.vue'
import menu from './components/routerByMenu.vue'

import {clone} from './api/clone.js'
// import {api} from './api/ajax'
import api from '@/api/index'
import {eventBus} from './api/bus'
Vue.use(AMap)
Vue.use(router)
Vue.use(VueLazyload)
Vue.use(VueCropper)

Vue.component('v-header', header)
Vue.component('v-footer', footer)
Vue.component('router-menu', menu)

Vue.config.productionTip = false

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: '53d6d35a83c5f27b087142c8c4b10a42',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
})

// 全局注册
Vue.prototype.$clone = clone
Vue.prototype.$api = api
Vue.prototype.$eventBus = eventBus

// 使用钩子函数，完成权限控制
router.beforeEach((to, from, next) => {
  var userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
  if (!userInfo && to.path !== '/login' && to.path.split('/')[1] !== 'index') {
    next('/login')
  } else if (to.meta.schoolAdmin) {
    userInfo.identity === '学校管理员' ? next() : next(false) || Vue.prototype.$message.error('您不是管理员，无法进入')
  } else {
    window.scrollTo(0, 0)
    if (to.path !== from.path) {
      next()
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
