import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const homePage = () => Promise.resolve(require('@/components/homePage'));
const activityPage = () => Promise.resolve(require('@/components/activityPage'));
const videoPage = () => Promise.resolve(require('@/components/videoPage'));
const accountPage = () => Promise.resolve(require('@/components/accountPage'));
/*login page*/
const login = () => Promise.resolve(require('@/view/login'));

/*home page*/
const home = () => Promise.resolve(require('@/view/index/home'));
const test = () => Promise.resolve(require('@/view/index/test'));
const function1 = () => Promise.resolve(require('@/view/index/function'));
const app1 = () => Promise.resolve(require('@/view/index/app1'));

/*activity page*/
const activity_page = () => Promise.resolve(require('@/view/activity/activityPage'));

/*video page*/
const video_home = () => Promise.resolve(require('@/view/video/home'));
const video_video= () => Promise.resolve(require('@/view/video/video'));
const video_class= () => Promise.resolve(require('@/view/video/class'));

/*account page*/
const account_profile = () => Promise.resolve(require('@/view/account/accountProfile'));
const account_message = () => Promise.resolve(require('@/view/account/accountMessage'));
const account_security= () => Promise.resolve(require('@/view/account/accountSecurity'));
const account_management = () => Promise.resolve(require('@/view/account/accountManagement'));
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/activity',
      component: activityPage,
      children: [
        {
          path: '/',
          redirect: '/activity/activity',
        },
        {
          path: '/activity/activity',
          component: activity_page
        },
      ]
    },
    {
      path: '/video',
      component: videoPage,
      children: [
        {
          path: '/',
          redirect: '/video/home',
        },
        {
          path: '/video/home',
          component: video_home
        },
        {
          path: '/video/video',
          component: video_video
        },
        {
          path: '/video/class',
          component: video_class
        },
      ]
    },
    {
      path: '/account',
      component: accountPage,
      children: [
        {
          path: '/',
          redirect:'/account/profile',
        },
        {
          path: '/account/profile',
          component: account_profile
        },
        {
          path: '/account/message',
          component: account_message
        },
        {
          path: '/account/security',
          component: account_security
        },
        {
          path: '/account/management',
          component: account_management
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
