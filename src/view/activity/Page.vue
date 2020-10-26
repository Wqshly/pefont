<template>
  <div>
    <n-header></n-header>
    <div  class="normal_page">
      <div class="page-area">
        <v-header :headers="items"></v-header>
        <router-view></router-view>
      </div>

    </div>
  </div>

</template>

<script>
import nHeader from '@/components/homeHeader'
import vHeader from '@/components/routerByMenu'

export default {
  components: {
      nHeader,
      vHeader
  },
  data () {
    return {
        items: [
            {
                link: '/activity/home',
                name: '活动首页'
            },
            {
                link: '/activity/notice',
                name: '校内通知'
            },
            {
                link: '/activity/promotion',
                name: '发起活动',
            },
            {
                link: '/activity/management',
                name: '活动管理',
            },
            {
                link: '/activity/check',
                name: '组织签到',
            }
        ],
        mounted(){

        },
        methods:{
            handleSelect(key, keyPath) {

            },

        },
    }
  },

}
</script>

<style scoped>
  .normal_page{
    background-color: #f2f5f6;
    min-height: 1050px;
    color: black;
  }
  .page-area{
    background-color: #f2f5f6;
    width: 100%;
    max-width: 1140px;
    margin:0 auto;
  }

</style>
