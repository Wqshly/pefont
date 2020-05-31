import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const homePage = () => Promise.resolve(require('@/components/homePage'))
const normalPage = () => Promise.resolve(require('@/components/normalPage'))

/*home page*/
const home = () => Promise.resolve(require('@/view/home'))
const function1 = () => Promise.resolve(require('@/view/function'))
const product = () => Promise.resolve(require('@/view/product'))
const develop = () => Promise.resolve(require('@/view/develop'))
const app1 = () => Promise.resolve(require('@/view/app1'))
const login = () => Promise.resolve(require('@/view/login'))

/*normal page*/
const shop_page = () => Promise.resolve(require('@/view/shopPage'))
const activity_page = () => Promise.resolve(require('@/view/activity/activityPage'))

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/activity',
      name: 'activity',
      component: normalPage,
      children: [
        {
          path: '/activity',
          redirect: '/activity/home',
        },
        {
          path: '/activity/home',
          name: 'activity_home',
          component: activity_page
        },
        {
          path: '/activity/shop',
          name: 'activity_shop',
          component: shop_page
        },
        {
          path: '/home',
          name: 'activity_commit',
          component: activity_page
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: '',
      component: homePage,
      children: [
        {
          path: '/index',
          name: 'home',
          component: home
        },
        {
          path: '/function',
          name: 'function',
          component: function1
        },
        {
          path: '/product',
          name: 'product',
          component: product
        },
        {
          path: '/develop',
          name: 'develop',
          component: develop
        },
        {
          path: '/app',
          name: 'app',
          component: app1
        }
      ]
    }
  ]
})
