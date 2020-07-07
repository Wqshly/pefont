import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const homePage = () => Promise.resolve(require('@/components/homePage'));
const activityPage = () => Promise.resolve(require('@/components/activityPage'));
const videoPage = () => Promise.resolve(require('@/components/videoPage'));

/*login page*/
const login = () => Promise.resolve(require('@/view/login'));

/*home page*/
const home = () => Promise.resolve(require('@/view/index/home'));
const test = () => Promise.resolve(require('@/view/index/test'));
const function1 = () => Promise.resolve(require('@/view/index/function'));
const app1 = () => Promise.resolve(require('@/view/index/app1'));

/*page*/
const activity_page = () => Promise.resolve(require('@/view/activity/activityPage'));
const video_home = () => Promise.resolve(require('@/view/video/home'));
const video_video= () => Promise.resolve(require('@/view/video/video'));
const video_class= () => Promise.resolve(require('@/view/video/class'));
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/activity',
      name: 'activity',
      component: activityPage,
      children: [
        {
          path: '/activity',
          component: activity_page
        },
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: videoPage,
      children: [
        {
          path: '/video',
          component: video_home
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
