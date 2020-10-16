<template>
  <div>
    <div style="width: 100%;" class="theory_page">
      <v-header></v-header>

      <div style="margin-top: 80px;background-color: #f2f5f6; min-height: 700px;">

        <div class="theory-area">
          <el-menu
            mode="horizontal"
            active-text-color="#409EFF;"
            unique-opened router>
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
          <router-view class="main">

          </router-view>

        </div>
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
                items: [
                    {
                        index: 'home',
                        title: '理论学习'
                    },
                    {
                        index: 'exams',
                        title: '理论考试'
                    },
                    {
                        index: 'statistics',
                        title: '学分情况'
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
  .theory-area{
    overflow: hidden;
    width: 100%;
    margin-left: 10px;
    min-width: 300px;;
  }

  @media (min-width: 1140px){
    .theory-area{
      width: 1140px;
      margin: 0 auto;
    }
  }

</style>
