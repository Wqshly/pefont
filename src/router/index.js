import Router from 'vue-router'

/*骨架页面无下划线*/

/*门户*/
const indexPage = () => import(/* webpackChunkName: '0' */ '../view/index/Page');
const index_home = () => import(/* webpackChunkName: '0' */ '../view/index/home');
const index_function = () => import(/* webpackChunkName: '0' */ '../view/index/function');
const index_app = () => import(/* webpackChunkName: '0' */ '../view/index/app1');
const notFoundPage = () => import(/* webpackChunkName: '0' */ '../view/404');

/*login page*/
const login = () => import(/* webpackChunkName: '0' */ '../view/login');

/*早操*/
const exercisesPage = () => import(/* webpackChunkName: '1' */ '../view/exercises/Page');
const exercises_page = () => import(/* webpackChunkName: '1' */ '../view/exercises/home');

/*home2 page*/
const home2Page = () => import(/* webpackChunkName: '2' */ '../view/home2/Page');
const home2_page = () => import(/* webpackChunkName: '2' */ '../view/home2/home');

/*本地比赛*/
const competitionPage = () => import(/* webpackChunkName: '3' */ '../view/competition/Page');
const competition_home = () => import(/* webpackChunkName: '3' */ '../view/competition/home');

/*promotion page*/
const promotionPage = () => import(/* webpackChunkName: '4' */ '../view/promotion/Page');
const promotion_home = () => import(/* webpackChunkName: '4' */ '../view/promotion/home');

/*activity page*/
const activityPage = () => import(/* webpackChunkName: '5' */ '../view/activity/Page');
const activity_home = () => import(/* webpackChunkName: '5' */ '../view/activity/home');
const activity_notice = () => import(/* webpackChunkName: '5' */ '../view/activity/notice');
const activity_promotional = () => import(/* webpackChunkName: '5' */ '../view/activity/promotional');
const activity_management = () => import(/* webpackChunkName: '5 */ '../view/activity/management');
const activity_check = () => import(/* webpackChunkName: '5' */ '../view/activity/check_in');

/*video page*/
const videoPage = () => import(/* webpackChunkName: '6' */ '../view/video/Page');
const video_home = () => import(/* webpackChunkName: '6' */ '../view/video/home');
const video_video= () => import(/* webpackChunkName: '6' */ '../view/video/video');
const video_class= () => import(/* webpackChunkName: '6' */ '../view/video/class');

/*account page*/
const accountPage = () => import(/* webpackChunkName: '7' */ '../view/account/Page');
const account_profile = () => import(/* webpackChunkName: '7' */ '../view/account/accountProfile');
const account_message = () => import(/* webpackChunkName: '7' */ '../view/account/accountMessage');
const account_account = () => import(/* webpackChunkName: '7' */ '../view/account/accountAccount');
const account_security= () => import(/* webpackChunkName: '7' */ '../view/account/accountSecurity');
const account_management = () => import(/* webpackChunkName: '7' */ '../view/account/accountManagement');
const account_privacy = () => import(/* webpackChunkName: '7' */ '../view/account/accountPrivacy');
const account_logout = () => import(/* webpackChunkName: '7' */ '../view/account/logout');

/*management page*/
const managementPage = () => import(/* webpackChunkName: '8' */ '../view/management/Page');
const mana_page = () => import(/* webpackChunkName: '8' */ '../view/management/home');
const mana_class = () => import(/* webpackChunkName: '8' */ '../view/management/manaClass');

/*health page*/
const healthPage = () => import(/* webpackChunkName: '8' */ '../view/health/Page');
const health_home = () => import(/* webpackChunkName: '8' */ '../view/health/home');
const health_anti = () => import(/* webpackChunkName: '8' */ '../view/health/Anti-Acne');

/*theory page*/
const theoryPage = () => import(/* webpackChunkName: '8' */ '../view/theory/Page');
const theory_page = () => import(/* webpackChunkName: '8' */ '../view/theory/home');
const theory_theory = () => import(/* webpackChunkName: '8' */ '../view/theory/theoryTheory');
const theory_exam = () => import(/* webpackChunkName: '8' */ '../view/theory/theoryExam');
const theory_exams = () => import(/* webpackChunkName: '8' */ '../view/theory/theoryExams');


const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/index/home'
    },
    {
      path: '/404',
      component: notFoundPage,
    },
    {
      path: '/home',
      redirect: '/exercises'
    },
    {
      path: '/exercises',
      component: exercisesPage,
      children: [
        {
          path: '/',
          redirect:'/exercises/signIn',
        },
        {
          path: '/exercises/signIn',
          component: exercises_page
        },
      ]
    },
    {
      path: '/home2',
      component: home2Page,
      children: [
        {
          path: '/',
          redirect: '/home2/home',
        },
        {
          path: '/home2/home',
          component: home2_page
        },
      ]
    },
    {
      path: '/competition',
      component: competitionPage,
      children: [
        {
          path: '/',
          redirect: '/competition/1'
        },
        {
          path: '/competition/home',
          component: competition_home
        }
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
          component: promotion_home
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
      path: '/index',
      component: indexPage,
      children: [
        {
          path: '/index/home',
          component: index_home
        },
        {
          path: '/index/function',
          component: index_function
        },
        {
          path: '/index/app',
          component: index_app
        }
      ]
    }
  ]
});

export default router;
