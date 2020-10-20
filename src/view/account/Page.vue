<template>
  <div>
    <div style="width: 100%;padding-top: 5px" class="account_page">
      <v-header></v-header>
      <div style="margin-top: 80px;">
        <div class="account-area">
          <div class="left_options">

            <div class="left_option" v-for="option in left_options"  @click="jump(option)" :class="{'active':isActive === option.link }" >

                {{option.name}}
              <el-badge :value="message_count" class="item" v-if="option.link==='message'">
              </el-badge>
            </div>
          </div>
          <router-view class="account_main">

          </router-view>

        </div>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/homeHeader'
import vFooter from '@/components/footer'
export default {
  name: 'accountPage',
  components: {
      vFooter,
      vHeader
  },
  data () {
    return {
        message_count:12,
        isActive:'profile',
        left_options:[
            {
                name:'资料',
                link:'profile',
            },
            {
                name:'消息',
                link:'message',
            },
            {
                name:'账户',
                link:'account',
            },
            {
                name:'安全',
                link:'security',
            },
            {
                name:'后台',
                link:'management',
            },
            {
                name:'注销',
                link:'logout',
            },
        ],
    }
  },
  methods:{
      jump(val){
          if(val.link!==(this.$route.path).split('/')[2]){
              this.$router.push("/account/"+val.link);
          }
      },

  },
  created() {
      this.isActive = (this.$route.path).split('/')[2];
  },
  watch:{
      $route(to,from){
          if((from.path).split('/')[1]==="account"){
              this.isActive = (to.path).split('/')[2];
          }
      }
  },
}
</script>

<style scoped>
  .account-area{
    overflow: hidden;
    width: 100%;
  }
  .iconfont{
    font-size: 30px;
    vertical-align: middle;
  }
  .account-area .left_options{
    background-color: white;
    overflow: hidden;
    width: 140px;
    padding:0 10px ;
    font-weight: 400;
    float: left;
  }
  .account-area .left_option{
    padding-left: 10px;
    line-height: 37px;
    margin: 4px 0;
    font-size: 14px;
    border-radius: 6px;
    transition: background-color 0.3s;
    background-color: white!important;
    cursor: pointer;
  }
  .account-area .left_option:hover{
    background-color: #409EFF!important;
    color: white;
  }
  .account-area .active{
    background-color: #409EFF!important;
    color: white;
  }
  @media (max-width: 760px) {
    .account-area .left_options{
      width: 100% !important;
      margin: 0;
    }

    .account-area .left_option{
      float: left;
      margin: 0 2px;
      padding-right: 15px;
    }

    .account-area .account_main{
      width: 100% !important;
    }
    .account-area .iconfont{
      display: none;
    }

  }

  .account-area .account_main{
    float: left;
    padding-top: 10px;
    //background-color: grey;
    width: calc(100% - 160px);
    min-height: 700px;
  }
</style>
