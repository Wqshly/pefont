import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const homePage = () => Promise.resolve(require('@/components/homePage'));
const activityPage = () => Promise.resolve(require('@/components/activityPage'));
const videoPage = () => Promise.resolve(require('@/components/videoPage'));
const accountPage = () => Promise.resolve(require('@/components/accountPage'));
const managementPage = () => Promise.resolve(require('@/components/managementPage'));
const theoryPage = () => Promise.resolve(require('@/components/theoryPage'));

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
const account_account = () => Promise.resolve(require('@/view/account/accountAccount'));
const account_security= () => Promise.resolve(require('@/view/account/accountSecurity'));
const account_management = () => Promise.resolve(require('@/view/account/accountManagement'));
const account_privacy = () => Promise.resolve(require('@/view/account/accountPrivacy'));

/*management page*/
const mana_page = () => Promise.resolve(require('@/view/management/manaPage'));

/*theory page*/
const theory_page = () => Promise.resolve(require('@/view/theory/theoryPage'));
const theory_theory = () => Promise.resolve(require('@/view/theory/theoryTheory'));
const theory_exam = () => Promise.resolve(require('@/view/theory/theoryExam'));
const theory_exams = () => Promise.resolve(require('@/view/theory/theoryExams'));
const theory_statistic = () => Promise.resolve(require('@/view/theory/theoryStatistics'));

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
          //redirect: '/video/home',//暂定不使用
          redirect: '/video/class'
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
          path: '/account/account',
          component: account_account
        },
        {
          path: '/account/security',
          component: account_security
        },
        {
          path: '/account/privacy',
          component: account_privacy
        },
        {
          path: '/account/management',
          component: account_management
        },
      ]
    },
    {
      path: '/theory',
      component: theoryPage,
      children: [
        {
          path: '/',
          redirect:'/theory/home',
        },
        {
          path: '/theory/home',
          component: theory_page
        },
        {
          path: '/theory/theory',
          component: theory_theory
        },
        {
          path: '/theory/exam',
          component: theory_exam
        },
        {
          path: '/theory/exams',
          component: theory_exams
        },
        {
          path: '/theory/statistics',
          component: theory_statistic
        },
      ]
    },
    {
      path: '/management',
      component: managementPage,
      children: [
        {
          path: '/',
          redirect:'/management/home',
        },
        {
          path: '/management/home',
          component: mana_page
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
