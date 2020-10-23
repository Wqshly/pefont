<template>
  <div>
    <div style="width: 100%;padding-top: 5px" class="account_page">
      <v-header></v-header>
      <div class="account-area">
        <v-route :message_count="message_count" :options="options"></v-route>
        <router-view class="account_main">
        </router-view>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/homeHeader'
import vFooter from '@/components/footer'
import vRoute from '@/components/routerByAdaptiveMenu'
export default {
  name: 'accountPage',
  components: {
      vFooter,
      vHeader,
      vRoute
  },
  data () {
    return {
        message_count:12,
        options:[
            {
                name:'资料',
                link:'/account/profile',
            },
            {
                name:'消息',
                link:'/account/message',
            },
            {
                name:'账户',
                link:'/account/account',
            },
            {
                name:'安全',
                link:'/account/security',
            },
            {
                name:'后台',
                link:'/account/management',
            },
            {
                name:'注销',
                link:'/account/logout',
            },
        ],
    }
  },
  methods:{

  },
  created() {

  },

}
</script>

<style scoped>
  .account-area{
    overflow: hidden;
    width: 100%;
  }

  .account-area .account_main{
    float: left;
    padding-top: 10px;
    //background-color: grey;
    width: calc(100% - 160px);
    min-height: 700px;
  }
</style>
