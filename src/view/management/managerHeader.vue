<template>
  <div class="header-style">
    <div class="normal">
      <div class="header-item-container">
        <el-menu mode="horizontal" router>
          <template v-for="(FirstLevelItem,index) in headerList">
            <!-- 有子目录的 -->
            <template v-if="FirstLevelItem.subs">
              <el-submenu :index="FirstLevelItem.index" :key="index" :class="[{'float-right' : FirstLevelItem.float ==='right'}]">
                <template slot="title">
                  <i :class="FirstLevelItem.icon"></i>
                  <span slot="title">{{FirstLevelItem.title}}</span>
                </template>
                <!-- 二级菜单 -->
                <template v-for="(subItem,index) in FirstLevelItem.subs">
                  <template v-if="subItem.subs">
                    <el-submenu :index="subItem.index" :key="index">
                      <template slot="title">
                        <i :class="subItem.icon"></i>
                        <span slot="title">{{subItem.title}}</span>
                      </template>
                      <template v-for="(ThreeLevelItem,index) in subItem.subs">
                        <el-menu-item :index="ThreeLevelItem.index" :key="index">
                          <span>{{ThreeLevelItem.title}}</span>
                        </el-menu-item>
                      </template>
                    </el-submenu>
                  </template>
                  <template v-else>
                    <el-menu-item :index="subItem.index" :key="subItem.index">
                      <span>{{subItem.title}}</span>
                    </el-menu-item>
                  </template>
                </template>
              </el-submenu>
            </template>
            <!-- 无子目录的 -->
            <template v-else>
              <el-menu-item :index="FirstLevelItem.index" :key="index">
                <template v-if="FirstLevelItem.imgPath">
                  <img src="@/assets/logo2.png" />
                </template>
                <i :class="FirstLevelItem.icon"></i>
                <span slot="title">{{FirstLevelItem.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      headerList: [
        {
          imgPath: true,
          index: '/'
        },
        {
          title: '管理首页',
          icon: '',
          index: 'management'
        },
        {
          title: '比赛管理',
          index: 'competitionManage',
          subs: [
            {
              title: '本地比赛',
              index: 'localCompetition',
              subs: [
                {
                  title: '发起比赛',
                  index: '/management/createCompetition'
                },
                {
                  title: '管理比赛',
                  index: '/management/manageCompetition'
                }
              ]
            },
            {
              title: '区域联赛',
              index: '/404'
            }
          ]
        },
        {
          title: '活动管理',
          index: '/management/activity',
          subs: [
            {
              title: '审批活动',
              index: '/management/activityApproval'
            }
          ]
        },
        {
          title: '场馆管理',
          index: '/management/venue',
          subs: [
            {
              title: '添加场馆',
              index: '/management/venueCreate'
            },
            {
              title: '场馆管理',
              index: '/management/venueManage'
            }
          ]
        },
        {
          icon: 'el-icon-s-custom',
          index: '/account',
          float: 'right',
          subs: [
            {
              title: '返回用户页',
              index: '/home'
            },
            {
              title: '注销',
              index: '/account/logout'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .header-style {
    height: 80px;
    width: 100%;
  }

  .header-style .normal {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 1999;
    background-color: white;
    border-bottom: 1px solid #dcdfe6;
  }

  .header-item-container {
    height: 80px;
    line-height: 80px;
    top: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    vertical-align: middle;
  }

  .img-container {
    display: flex;
    cursor: pointer;
    height: 80px;
    float: left;
    align-items: center;
  }

  .header-item-container img {
    height: 30px;
  }

  .normal i {
    font-size: 30px;
    vertical-align: middle;
    line-height: 80px;
    cursor: pointer;
    color: #60606d;
  }

  .normal p {
    color: #60606d;
    font-size: 14px;
  }

  .normal p:hover, i:hover {
    color: #409EFF !important;
  }

  .float-right {
    float: right !important;
  }

  .normal {
    display: block;
  }

  /*手机端*/
  @media screen and (max-width: 700px) {
    .img-container {
      display: none !important;
    }
  }

</style>
