<template>
  <div class="all">
    <div id="normal">
      <div id="header_item_container">
        <div id="img_container" @click="jump('')">
          <img src="../assets/logo2.png"  alt="PE">
        </div>
        <div class="header_item"
             v-for="(item,index) in headers"
             @click="jump(item.link)"
             :class="[{'active':isActive === item.link},{'float_right' : item.float ==='right'}]">
          <div>
            <i v-if="!item.subs && item.iconName" :class="item.iconName"></i>
            <p v-if="!item.subs && !item.iconName">{{item.name}}</p>
          </div>
          <el-dropdown v-if="item.subs" show-timeout="0" hide-timeout="250">
            <div>
              <i v-if="item.iconName" :class="item.iconName"></i>
              <p v-if="!item.iconName">{{item.name}}</p>
            </div>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item  v-for="sub in item.subs" :key="sub.link" @click.native="jump2(sub.link)" >{{sub.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <phone-header class="small" :headers="headers"></phone-header>
    <back></back>
  </div>
</template>

<script>
import back from '@/components/backTop'
import phoneHeader from '@/components/phoneHeader'
export default {
    //本组件的当前路由蓝色渲染适用于一级路由  也就是路由路径中的第一个'/'的部分
    components: {
        back,
        phoneHeader,
    },
    data() {
        return {
            isActive: 'activity',
            reverse_headers: [],
            headers: [
                {
                    name: '早操',
                    link: 'home'
                },
                {
                    name: '课外活动',
                    link: 'home2'
                },
                {
                    name: '本地比赛',
                    link: 'home3',
                    subs: [
                        {
                            name: '足球',
                            link: '/home3/1'
                        },
                        {
                            name: '排球',
                            link: '/home3/2'
                        },
                        {
                            name: '网球',
                            link: '/home3/3'
                        },
                        {
                            name: '羽毛球',
                            link: '/home3/4'
                        },
                        {
                            name: '乒乓球',
                            link: '/home3/5'
                        },
                        {
                            name: '篮球',
                            link: '/home3/6'
                        },
                    ]
                },
                {
                    name: '发起比赛',
                    link: 'promotion'
                },
                {
                    name: '校内校外活动',
                    link: 'activity',
                    subs: [
                        {
                            name: '活动首页',
                            link: '/activity/home'
                        },
                        {
                            name: '校内通知',
                            link: '/activity/notice'
                        },
                        {
                            name: '发起活动',
                            link: '/activity/promotion'
                        },
                        {
                            name: '活动管理',
                            link: '/activity/management'
                        },
                        {
                            name: '组织签到',
                            link: '/activity/check'
                        },
                    ]
                },
                {
                    name: '账户',
                    link: 'account',
                    subs: [
                        {
                            name: '注销',
                            link: '/account/logout'
                        },
                    ],
                    float:'right',
                    iconName:'el-icon-s-custom',
                },
                {
                    name: '健康管理',
                    link: 'health',
                    subs: [
                        {
                            name: '个人信息',
                            link: '/health/home'
                        },
                        {
                            name: '祛痘',
                            link: '/health/anti'
                        },
                    ],
                    float:'right',
                },
                {
                    name: '运动装备',
                    link: 'shop',
                    float:'right',
                },

                {
                    name: '裁判园地',
                    link: 'theory',
                    float:'right',
                },
                {
                    name: '云比赛',
                    link: 'video',
                    float:'right',
                },

            ],
            drawer: false,

        }
    },
    methods: {
        //一级目录跳转函数   便于渲染active样式
        jump(val) {
            this.drawer = false;
            this.isActive = val;
            this.$router.push('/' + val);
        },
        //二级目录跳转函数
        jump2(val) {
            this.$router.push(val);
        },
        account() {
            this.$router.push("/account");
        },
        logout(){
            api.get('/api/login/logout').then(res => {
            });
            this.$store.commit('setUserId', -1);
            this.$router.push('/login');
        }
    },
    mounted() {
    },
    created() {
        this.reverse_headers = this.$clone.deepClone(this.headers).reverse();
        this.isActive = (this.$route.path).split('/')[1];
    }
}
</script>

<style scoped>
  .all{
    height: 80px;
    width: 100%;
  }
  .all #normal{
    width: 100%;
    height: 80px;
    position: fixed;
    top:0;
    z-index: 1999;
    background-color: white;
    border-bottom: 1px solid #dcdfe6;
  }

  #header_item_container{
    height: 80px;
    line-height: 80px;
    top:0;
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    vertical-align:middle;
  }

  #img_container{
    display: flex;
    cursor: pointer;
    height: 80px;
    float: left;
    align-items: center;
  }

  #header_item_container img{
    height: 30px;
  }

  #normal #header_item_container .header_item {
    line-height: 80px;
    height: 80px;
    margin:  0 0 0 15px;
    float: left;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  #normal i{
    font-size:30px;
    vertical-align:middle;
    line-height: 80px;
    cursor: pointer;
    color: #60606d;
  }


  #normal p{
    color: #60606d;
    font-size: 14px;
  }

  #normal p:hover, i:hover{
    color:#409EFF!important;
  }
  .float_right{
    float: right!important;
  }
  .active{
    border-bottom: 2px solid #409EFF;
    color:#409EFF!important;
  }
  .active3{
    border-bottom: none;
    color:#409EFF!important;
  }
  #normal {
    display: block;
  }
  .small{
    display: none!important;
  }
  /*手机端*/
  @media screen and (max-width: 840px) {
    .all{
      height: 60px;
      width: 100%;
    }

    #normal {
      display: none;
    }
    .small{
      display: flex!important;
    }
  }
</style>
