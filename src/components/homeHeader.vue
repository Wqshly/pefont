<template>
  <div class="all">
    <div class="normal">
      <div class="activity_header">
        <img class="img_normal"  @click="jump('')" src="../assets/logo2.png"  alt="PE">

        <i class="el-icon-s-custom" @click="account()"  :class="{'active3':isActive === 'account' }"  ></i>

        <i class="el-icon-s-fold" @click="drawer = !drawer" :class="{'active2': drawer === true }" ></i>

        <div class="header_a" v-for="(item,index) in headers" @click="jump(item.link)" :class="[{'active':isActive === item.link},{'float_right' : index >= 5}]"  >
          <p v-if="!item.subs">{{item.name}}</p>
          <el-dropdown v-if="item.subs" show-timeout="0" hide-timeout="250">
            <p>{{item.name}}</p>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item  v-for="sub in item.subs" :key="sub.link" @click.native="jump2(sub.link)" >{{sub.name}}</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>


      </div>
    </div>

    <div class="phone" v-if="drawer">

      <div class="header_phone_a" v-for="item in headers" @click="jump(item.link)" :class="{'active':isActive === item.link }"  >
          <p>{{item.name}}</p>
      </div>

    </div>

    <back></back>
  </div>
</template>

<script>
import {clone} from '@/api/clone.js'
import back from '@/components/backTop'
import {api}  from '@/api/ajax'

export default {
    //本组件的当前路由蓝色渲染适用于一级路由  也就是路由路径中的第一个'/'的部分
    components:{
        back
    },
    data () {
      return {
          isActive:'activity',
          reverse_headers:[],
          headers:[
              {
                  name:'早操',
                  link:'home'
              },
              {
                  name:'课外活动',
                  link:'home2'
              },
              {
                  name:'本地比赛',
                  link:'home3',
                  subs:[
                      {
                          name:'足球',
                          link:'/home3/1'
                      },
                      {
                          name:'排球',
                          link:'/home3/2'
                      },
                      {
                          name:'网球',
                          link:'/home3/3'
                      },
                      {
                          name:'羽毛球',
                          link:'/home3/4'
                      },
                      {
                          name:'乒乓球',
                          link:'/home3/5'
                      },
                      {
                          name:'篮球',
                          link:'/home3/6'
                      },
                  ]
              },
              {
                  name:'发起比赛',
                  link:'promotion'
              },
              {
                  name:'校内校外活动',
                  link:'activity',
                  subs:[
                      {
                          name:'活动首页',
                          link:'/activity/home'
                      },
                      {
                          name:'校内通知',
                          link:'/activity/notice'
                      },
                      {
                          name:'发起活动',
                          link:'/activity/promotion'
                      },
                      {
                          name:'活动管理',
                          link:'/activity/management'
                      },
                      {
                          name:'组织签到',
                          link:'/activity/check'
                      },
                  ]
              },
              {
                  name:'健康管理',
                  link:'health',
                  subs:[
                      {
                          name:'个人信息',
                          link:'/health/home'
                      },
                      {
                          name:'祛痘',
                          link:'/health/anti'
                      },
                  ]
              },
              {
                  name:'运动装备',
                  link:'shop'
              },

              {
                  name:'裁判园地',
                  link:'theory'
              },
              {
                  name:'云比赛',
                  link:'video'
              },

          ],
          drawer: false,

      }
    },
    methods:{
        //一级目录跳转函数   便于渲染active样式
        jump(val){
            this.drawer=false;
            if(('/'+val) !==this.$route.path){
                this.isActive = val;
                this.$router.push('/'+val);
                window.scrollTo(0, 0);
            }
        },

        jump2(val){
            if(val !==this.$route.path){
                this.$router.push(val);
                window.scrollTo(0, 0);
            }
        },
        account(){
            window.location.href="#/account";
        },

        request(){
            api.get('/api/login/LoginOrNot').then(res => {
                if (res.code === 0) {
                    this.$store.commit('setUser',res.data);
                }
                else{
                    this.$router.push('/login');
                }
            })
        },
    },
    mounted(){
    },
    created() {
        this.reverse_headers = clone.deepClone(this.headers).reverse();
        this.isActive = (this.$route.path).split('/')[1];
        if(this.$store.state.user.id === -1){
            this.request();
        }
    }
}
</script>

<style scoped>
  .all{
    height: 80px;
  }
  .all .normal{
    width: 100%;
    height: 80px;
    position: fixed;
    top:0;
    z-index: 1999;
    background-color: white;
    border-bottom: 1px solid #dcdfe6;
  }
  .activity_header{
    height: 80px;
    line-height: 80px;
    top:0;
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    vertical-align:middle;
  }
    .activity_header2{
    max-width: 1140px;
  }
  .activity_header .img_normal{
    cursor: pointer;
    line-height:80px;
    height: 30px;
    margin:25px 10px 25px 0;
    float: left;
  }

  .activity_header .el-icon-s-fold{
    margin:0 5px;
    font-size:30px;
    vertical-align:middle;
    float: right;
    line-height: 80px;
    cursor: pointer;
    display: none;
  }

  .activity_header .el-icon-s-custom{
    margin:0 5px 0 10px;
    font-size:30px;
    vertical-align:middle;
    float: right;
    line-height: 80px;
    cursor: pointer;
  }

  .normal .el-icon-s-fold:hover{
    color:#409EFF;
    transition: 0.5s;
  }
  .normal .el-icon-s-custom:hover{
    color:#409EFF;
    transition: 0.5s;
  }
  .normal .activity_header .header_a {
    line-height: 80px;
    margin:  0 0 0 15px;
    color: #60606d;
    float: left;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  .normal .activity_header .header_a:hover, .el-dropdown-selfdefine:hover{
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
  /*手机端*/
  @media screen and (max-width: 760px){
    .all .normal{
      border-bottom: none!important;
    }

    .activity_header .img_normal{
      display: none;
    }

    .active{
      border-bottom: none;
      color:#409EFF!important;
    }
    .normal .activity_header .header_a{
      display: none;
    }

    .all .phone{
      height: auto!important;
    }
    .all .normal{
      background-color: #1B1C20!important;
    }
    .activity_header .el-icon-s-fold{
      display: inherit!important;
      color: white;
      float: left;;
    }
    .activity_header .el-icon-s-custom{
      color: white;
    }
  }
  .active2{
    color:#409EFF!important;
  }
  .phone{
    width: 100%;
    z-index: 9999;
    position: fixed;;
    top:80px;
    overflow: hidden;
    color: #60606d;
    line-height: 50px;
    height: 0;
    background-color: #1B1C20;
  }
  .header_phone_a{
    width: 100%;
    cursor: pointer;
    transition: background-color 0.5s,color 0.5s;
  }

  .header_phone_a:hover{
    background-color: #60606d;
    color:#409EFF!important;
  }

  .header_phone_a p{
      margin-left: 82px;
  }
</style>
