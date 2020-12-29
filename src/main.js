import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'

import VueLazyload from 'vue-lazyload'
import VueCropper from 'vue-cropper'
import AMap from 'vue-amap'

import header from './components/header.vue'
import footer from './components/footer.vue'
import menu from './components/routerByMenu.vue'

import {clone} from './api/clone.js'
import {api} from './api/ajax'
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

Vue.prototype.$clone = clone
Vue.prototype.$api = api
Vue.prototype.$eventBus = eventBus

if (store.state.user.id === -1) {
  api.get('/api/login/LoginOrNot').then(res => {
    if (res.code === 0) {
      store.state.user = res.data
    }
  })
}

router.beforeEach((to, from, next) => {
  if (from.path === '/competition/create') {
    Vue.prototype.$confirm('确认离开页面？')
      .then(_ => {
        next()
      })
      .catch(_ => {
      })
  }
  // if中是需要执行（判断是不是已登录）的条件
  else if (
    store.state.user.id === -1 &&
    to.path !== '/login' &&
    from.path !== '/login' &&
    to.path.split('/')[1] !== 'index'
  ) {
    api.get('/api/login/LoginOrNot').then(res => {
      if (res.code === 0) {
        store.state.user = res.data
        window.scrollTo(0, 0)
        next()
      } else {
        next({
          path: '/login',
          query: {redirect: to.fullPath}
        })
      }
    })
  } else {
    window.scrollTo(0, 0)
    if (to.path !== from.path) {
      next()
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
