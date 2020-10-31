import Router from 'vue-router'

/*骨架页面导入*/
const indexPage = () => Promise.resolve(require('@/view/index/Page'));
const homePage = () => Promise.resolve(require('@/view/home/Page'));
const home2Page = () => Promise.resolve(require('@/view/home2/Page'));
const home3Page = () => Promise.resolve(require('@/view/home3/Page'));
const promotionPage = () => Promise.resolve(require('@/view/promotion/Page'));
const activityPage = () => Promise.resolve(require('@/view/activity/Page'));
const videoPage = () => Promise.resolve(require('@/view/video/Page'));
const accountPage = () => Promise.resolve(require('@/view/account/Page'));
const managementPage = () => Promise.resolve(require('@/view/management/Page'));
const theoryPage = () => Promise.resolve(require('@/view/theory/Page'));
const healthPage = () => Promise.resolve(require('@/view/health/Page'));

/*login page*/
const login = () => Promise.resolve(require('@/view/login'));

/*index page*/
const home = () => Promise.resolve(require('@/view/index/home'));
const test = () => Promise.resolve(require('@/view/index/test'));
const function1 = () => Promise.resolve(require('@/view/index/function'));
const app1 = () => Promise.resolve(require('@/view/index/app1'));

/*home page*/
const home_page = () => Promise.resolve(require('@/view/home/home'));

/*home3 page*/
const home3_page = () => Promise.resolve(require('@/view/home3/home'));

/*health page*/
const health_home = () => Promise.resolve(require('@/view/health/home'));
const health_anti = () => Promise.resolve(require('@/view/health/Anti-Acne'));
/*promotion page*/
const promotion_page = () => Promise.resolve(require('@/view/promotion/home'));

/*activity page*/
const activity_home = () => Promise.resolve(require('@/view/activity/home'));
const activity_notice = () => Promise.resolve(require('@/view/activity/notice'));
const activity_promotional = () => Promise.resolve(require('@/view/activity/promotional'));
const activity_management = () => Promise.resolve(require('@/view/activity/management'));
const activity_check = () => Promise.resolve(require('@/view/activity/check_in'));

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
const account_logout = () => Promise.resolve(require('@/view/account/logout'));

/*management page*/
const mana_page = () => Promise.resolve(require('@/view/management/home'));
const mana_class = () => Promise.resolve(require('@/view/management/manaClass'));

/*theory page*/
const theory_page = () => Promise.resolve(require('@/view/theory/home'));
const theory_theory = () => Promise.resolve(require('@/view/theory/theoryTheory'));
const theory_exam = () => Promise.resolve(require('@/view/theory/theoryExam'));
const theory_exams = () => Promise.resolve(require('@/view/theory/theoryExams'));


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/home',
      component: homePage,
      children: [
        {
          path: '/',
          component: home_page
        },
      ]
    },
    {
      path: '/home2',
      component: home2Page,
      children: [
        {
          path: '/',
          component: home_page
        },
      ]
    },
    {
      path: '/home3',
      component: home3Page,
      children: [
        {
          path: '/',
          component: home3_page
        },
        {
          path: '/home3/1',
          component: home3_page
        },
        {
          path: '/home3/2',
          component: home3_page
        },
        {
          path: '/home3/3',
          component: home3_page
        },
        {
          path: '/home3/4',
          component: home3_page
        },
        {
          path: '/home3/5',
          component: home3_page
        },
      ]
    },
    {
      path: '/promotion',
      component: promotionPage,
      children: [
        {
          path: '/',
          redirect: '/promotion/home',
        },
        {
          path: '/promotion/home',
          component: promotion_page
        },
      ]
    },
    {
      path: '/health',
      component: healthPage,
      children: [
        {
          path: '/',
          redirect: '/health/home'
        },
        {

          path: '/health/home',
          component: health_home
        },
        {
          path: '/health/anti',
          component: health_anti
        },
      ]
    },
    {
      path: '/activity',
      component: activityPage,
      children: [
        {
          path: '/',
          redirect: '/activity/home',
        },
        {
          path: '/activity/home',
          component: activity_home
        },
        {
          path: '/activity/notice',
          component: activity_notice
        },
        {
          path: '/activity/promotion',
          component: activity_promotional
        },
        {
          path: '/activity/management',
          component: activity_management
        },
        {
          path: '/activity/check',
          component: activity_check
        },
      ]
    },
    {
      path: '/video',
      component: videoPage,
      children: [
        {
          path: '/',
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
        {
          path: '/account/logout',
          component: account_logout
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
        {
          path: '/management/class',
          component: mana_class
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
      component: indexPage,
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
