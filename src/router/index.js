import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const homePage = () => Promise.resolve(require('@/components/homePage'));
const normalPage = () => Promise.resolve(require('@/components/normalPage'));

/*login page*/
const login = () => Promise.resolve(require('@/view/login'));

/*home page*/
const home = () => Promise.resolve(require('@/view/index/home'));
const test = () => Promise.resolve(require('@/view/index/test'));
const function1 = () => Promise.resolve(require('@/view/index/function'));
const app1 = () => Promise.resolve(require('@/view/index/app1'));

/*normal page*/
const activity_page = () => Promise.resolve(require('@/view/activity/activityPage'));

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
          path: '/test',
          name: 'test',
          component: test
        },
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
          path: '/app',
          name: 'app',
          component: app1
        }
      ]
    }
  ]
})
