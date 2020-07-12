<template>
  <div>
    <div class="management_page">
      <v-header></v-header>
      <div class="management_main">
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

        <router-view>

        </router-view>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/activityHeader'
import vFooter from '@/components/footer'
export default {
  name: 'accountPage',
  components: {
      vFooter,
      vHeader
  },
  data () {
    return {
        user:{
            "user": "田川",
            "id": "201883060064",
            "permission": 0
        },
        items: [
            {
                index: '1',
                title: '管理首页'
            },
            {
                index: '2',
                title: '活动审批'
            },
            {
                index: '3',
                title: '院级管理',
                subs:[
                    {
                        index: '4',
                        title: '活动审批'
                    },
                    {
                        index: '5',
                        title: '活动审批'
                    },
                    {
                        index: '6',
                        title: '活动审批'
                    },
                ],
            },
            {
                index: '/7',
                title: '校级管理'
            }
            ,
            {
                index: '/8',
                title: '超级管理'
            }
        ],

    }
  },
  methods:{
      handleSelect(key, keyPath) {

      },

  },
  created() {

  },
}
</script>

<style scoped>
  .management_page{
    margin-top:80px;
  }
  .management_main{
    margin: 80px auto;
    width: 100%;
    padding-top: 5px;
    min-height: 500px;
  }

  @media (min-width: 1140px){
    .management_main {
      width: 1140px;
    }
  }

  .account-area .left_option:hover{
    background-color: #409EFF!important;
    color: white;
  }
  .account-area .active{
    background-color: #409EFF!important;
    color: white;
  }

</style>
