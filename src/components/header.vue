<template>
  <div class="all">
    <div id="normal">
      <div id="header_item_container">
        <div id="img_container" @click="jump({link:''})">
          <img src="../assets/logo2.png" alt="PE">
        </div>
        <div class="header_item"
             v-for="(item,index) in headers"
             @click="jump(item)"
             :class="[{'active':isActive === item.link && item.link !== '404'},{'float_right' : item.float ==='right'}]">
          <!--一级菜单-->
          <div>
            <i v-if="!item.subs && item.iconName" :class="item.iconName"></i>
            <p v-if="!item.subs && !item.iconName">{{item.name}}</p>
          </div>
          <!--二级菜单-->
          <el-dropdown v-if="item.subs" show-timeout="0" hide-timeout="250" :trigger="item.trigger">
            <div>
              <i v-if="item.iconName" :class="item.iconName"></i>
              <p v-if="!item.iconName">{{item.name}}</p>
            </div>
            <el-dropdown-menu slot="dropdown">
              <div v-for="(sub,index) in item.subs" :key="index">
                <el-dropdown-item v-if="!sub.subs" @click.native="jump2(sub)">{{sub.name}}</el-dropdown-item>
                <!--三级菜单-->
                <el-dropdown style="width: 100%" v-else>
                  <el-dropdown-item>{{sub.name}}</el-dropdown-item>
                  <el-dropdown-menu style="margin: -20px -157px 0 0;" slot="dropdown">
                    <el-dropdown-item v-for="(s,index) in sub.subs" :key="index" @click.native="jump3(s)">
                      {{s.name}}
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
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
            name: '首页',
            link: 'home'
          },
          {
            name: '早操',
            link: 'exercises'
          },
          {
            name: '课外活动',
            link: 'home2'
          },
          {
            name: '本地比赛',
            noJump: true,
            trigger: 'click',
            link: 'competition',
            subs: [
              {
                name: '比赛综合类',
                subs: [
                  {
                    name: '田径运动会',
                    link: '/competition/home',
                  },
                  {
                    name: '综合性运动会',
                    link: '/competition/home',
                  },
                  {
                    name: '其他',
                    link: '/competition/home',
                  },
                ],
              },
              {
                name: '田径类',
                subs: [
                  {
                    name: '田赛',
                    link: '/competition/home',
                  },
                  {
                    name: '竞赛',
                    link: '/competition/home',
                  },
                  {
                    name: '全能',
                    link: '/competition/home',
                  },
                ],
              },
              {
                name: '球类运动',
                subs: [
                  {
                    name: '足球',
                    link: '/competition/home',
                  },
                  {
                    name: '排球',
                    link: '/competition/home',
                  },
                  {
                    name: '篮球',
                    link: '/competition/home',
                  },
                  {
                    name: '网球',
                    link: '/competition/home',
                  },
                  {
                    name: '乒乓球',
                    link: '/competition/home',
                  },
                  {
                    name: '其他',
                    link: '/competition/home',
                  },
                ],
              },
              {
                name: '水上运动',
                subs: [
                  {
                    name: '游泳比赛',
                    link: '/competition/home',
                  },
                  {
                    name: '帆船比赛',
                    link: '/competition/home',
                  },
                  {
                    name: '其他',
                    link: '/competition/home',
                  },
                ]
              },
              {
                name: '其他',
                subs: [
                  {
                    name: '自行车赛',
                    link: '/competition/home',
                  },
                  {
                    name: '跆拳道赛',
                    link: '/competition/home',
                  },
                  {
                    name: '柔道赛',
                    link: '/competition/home',
                  },
                  {
                    name: '拳击赛',
                    link: '/competition/home',
                  },
                  {
                    name: '其他',
                    link: '/competition/home',
                  },
                ]
              },
              {
                name: '已发起项',
                link: '/404',
              },
            ]
          },
          {
            name: '区域联赛',
            link: '404'
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
            float: 'right',
            iconName: 'el-icon-s-custom',
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
            float: 'right',
          },
          {
            name: '运动装备',
            link: 'shop',
            float: 'right',
          },

          {
            name: '裁判园地',
            link: 'theory',
            float: 'right',
          },
          {
            name: '云比赛',
            link: '404',
            float: 'right',
          },

        ],
        drawer: false,

      }
    },
    methods: {
      //一级目录跳转函数   便于渲染active样式
      jump(val) {
        if (!val.noJump) {
          this.drawer = false;
          this.$router.push('/' + val.link);
        }
      },
      //二级目录跳转函数
      jump2(val) {
        if (!val.noJump) {
          this.drawer = false;
          this.$router.push(val.link);
        }
      },
      jump3(val) {
        if (!val.noJump) {
          this.drawer = false;
          this.$store.commit('setCompetitionClass', val.name);
          this.$router.push(val.link);
        }
      },
      logout() {
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

<style>
  .all {
    height: 80px;
    width: 100%;
  }

  .all #normal {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 1999;
    background-color: white;
    border-bottom: 1px solid #dcdfe6;
  }

  #header_item_container {
    height: 80px;
    line-height: 80px;
    top: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    vertical-align: middle;
  }

  #img_container {
    display: flex;
    cursor: pointer;
    height: 80px;
    float: left;
    align-items: center;
  }

  #header_item_container img {
    height: 30px;
  }

  #normal #header_item_container .header_item {
    line-height: 80px;
    height: 80px;
    margin: 0 0 0 15px;
    float: left;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
  }

  #normal i {
    font-size: 30px;
    vertical-align: middle;
    line-height: 80px;
    cursor: pointer;
    color: #60606d;
  }


  #normal p {
    color: #60606d;
    font-size: 14px;
  }

  #normal p:hover, i:hover {
    color: #409EFF !important;
  }

  .float_right {
    float: right !important;
  }

  .active {
    border-bottom: 2px solid #409EFF;
    color: #409EFF !important;
  }

  .active3 {
    border-bottom: none;
    color: #409EFF !important;
  }

  #normal {
    display: block;
  }

  .small {
    display: none !important;
  }

  /*手机端*/
  @media screen and (max-width: 840px) {
    .all {
      height: 60px;
      width: 100%;
    }

    #normal {
      display: none;
    }

    .small {
      display: flex !important;
    }
  }

</style>
