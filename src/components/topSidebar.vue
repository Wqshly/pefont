<template>
  <div class="sidebar" v-if="this.screenWidth > 880">
    <div class="d" >
    <el-menu  mode="horizontal" active-text-color="#fff" unique-opened router
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
        <!--        LOGO-->
        <template v-if="item.index==='function'">
          <li class="logo">
            <img src="../assets/logo3.png" alt="">
          </li>
        </template>
      </template>
    </el-menu>
    </div>


  </div>
  <div v-else-if="this.screenWidth <= 880" class="sidebar_phone">
    <div style="height: 60px">
      <img src="../assets/brand.png" style="height: 60px"/>
      <i class="el-icon-s-fold" @click="drawer = !drawer"  style=""></i>
    </div>
    <el-collapse-transition>
      <div v-show="drawer" style="">
        <el-table
          :row-class-name="tableRowClassName"
          :show-header="false"
          :data="items"
          style="width: 100%;"
          @cell-click="handleClick">
          <el-table-column
            prop="index">
            <template slot-scope="scope">
              <div style="padding-left: 60px">
                {{scope.row.title}}
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-collapse-transition>

  </div>
</template>

<script>
    export default {
        name: 'topSidebar',

        data() {
            return {
                drawer:false,
                screenWidth: '',
                items: [
                    {
                        index: 'index',
                        title: '首页'
                    },
                    {
                        index: 'function',
                        title: '产品功能'
                    },
                    {
                        index: 'app',
                        title: 'APP下载'
                    },
                    {
                        index: '/login',
                        title: '登录入口'
                    }
                    ,
                    {
                        index: '/activity',
                        title: '测试入口'
                    }
                ]
            }
        },
        methods: {
            tableRowClassName({row, rowIndex}) {
                  return 'success-row';
            },
            handleSelect(key, keyPath) {

            },
            getScreenWidth() {
                this.screenWidth = window.innerWidth
            },
            handleClick(val){
                this.drawer=false;
                this.$router.push(val.index);

            }
        },
        mounted() {
            // 监听窗口大小
            window.onresize = () => {
                return (() => {
                    this.screenWidth = document.body.clientWidth;
                })()
            }
        },
        created(){
            window.addEventListener('resize', this.getScreenWidth);
            this.getScreenWidth()
        }
    }
</script>

<style>

  .sidebar * {
    border-bottom: none !important;
  }

  .sidebar .el-menu {
    background: transparent none !important;
    border-bottom: none !important;
  }

  .sidebar .el-menu-item {
    background: transparent none !important;
    border-bottom: none !important;
  }

  .sidebar .el-menu-item:hover {
    color: #409EFF !important;
  }

  .sidebar {
    transform: none;
    display:inline;
    width: 100%;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    z-index: 666;
  }

  .sidebar .d ul {
    display: flex;
    justify-content: space-around;
    height: 124px !important;
    margin-bottom: 10px;
  }

  .sidebar .d ul, li {
    list-style: none;
    line-height: 124px !important;
    color: white !important;
  }

  .sidebar .d li img {
    margin-top: 0;
    width: 200px;
    margin-bottom: 10px;
  }

  .sidebar_phone{
    position: fixed;
    z-index: 99999;
    width: 100%;
    top: 0;
    background-color: black;
    height: 60px;
  }
  .sidebar_phone .el-table .success-row {
    background: black;
    color: white;
    cursor: pointer;
  }
  .sidebar_phone .el-icon-s-fold:hover{
    color:#409EFF;
    margin-right:15px;
    font-size:30px;
    vertical-align:middle;
    float: right;
    line-height: 60px
  }
  .sidebar_phone .el-icon-s-fold{
    color:white;
    margin-right:15px;
    font-size:30px;
    vertical-align:middle;
    float: right;
    line-height: 60px
  }
  .sidebar_phone .el-table--enable-row-hover .el-table__body tr:hover>td {
    background: black !important;
    color: #409EFF !important;
  }
  .sidebar_phone .el-table__row>td{
    border: none;
  }
  .sidebar_phone .el-table::before {
  height: 0;
  }

</style>
