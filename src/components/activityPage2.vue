<template>
  <div>
    <n-header1></n-header1>
    <div  class="normal_page" style="margin-top: 80px;">
      <div class="page-area">
        <el-menu
          mode="horizontal"
          active-text-color="#409EFF;"
          unique-opened router
          @select="handleSelect">
          <template v-for="item in items">
            <!--        有子目录的-->
            <template v-if="item.subs">
              <el-submenu :index="item.index" :key="item.index" class="el-menu-item">
                <template slot="title">
                  <span slot="title">{{item.title}}</span>
                </template>
                <!--            子目录下拉内容-->
                <template v-for="subItem in item.subs">
                  <el-menu-item :index="subItem.index" :key="subItem.index">
                    <span>{{subItem.title}}</span>
                  </el-menu-item>
                </template>
              </el-submenu>
            </template>

            <!--        无子目录的-->
            <template v-else>
              <el-menu-item :index="item.index" :key="item.index">
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </template>

          </template>
        </el-menu>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
import nHeader1 from '@/components/activityHeader'

export default {

  name: 'homePage',
  data () {
    return {
        items: [
            {
                index: 'home',
                title: '活动首页'
            },
            {
                index: 'notice',
                title: '校内通知'
            },
            {
                index: 'promotion',
                title: '发起活动',
            },
            {
                index: 'management',
                title: '活动管理',
            },
            {
                index: 'check',
                title: '组织签到',
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
  components: {
      nHeader1
  }
}
</script>

<style scoped>
  .normal_page{
    background-color: #f2f5f6;
    min-height: 1050px;
  }
  .page-area{
    background-color: #f2f5f6;
    width: 100%;
    margin:0 auto;
  }

  @media screen and (min-width: 1140px){
    .page-area {
      width: 1140px;
    }
  }

  .normal_page  .el-menu-item:hover {
    color: #409EFF !important;
  }
  .normal_page .el-submenu:hover .el-submenu__title, .normal_page .el-submenu:focus .el-submenu__title  {
    color: #409EFF !important;
  }

  .normal_page .el-menu--horizontal .el-menu .el-menu-item:hover,.normal_page .el-menu--horizontal .el-menu .el-submenu__title:hover{
    color: #409EFF !important;
  }
  /*
.normal_page{
  background-image: url("../assets/img/activity/cool-background.png");
}*/
</style>
