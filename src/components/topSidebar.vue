<template>
  <div class="sidebar">
    <el-menu mode="horizontal" active-text-color="#fff" unique-opened router  @select="handleSelect">
      <template v-for="item in items">
        <!--        有子目录的-->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index" class="el-menu-item" >
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
          <el-menu-item :index="item.index" :key="item.index" >
            <span slot="title">{{item.title}}</span>
          </el-menu-item>
        </template>
        <!--        LOGO-->
        <template v-if="item.index==='product'">
          <li class="logo">
            <img src="../assets/logo2.png" alt="">
          </li>
        </template>
      </template>
    </el-menu>



  </div>
</template>

<script>
export default {
  name: 'topSidebar',
  data () {
    return {
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
          index: 'product',
          title: '业务分类',/*有bug待修改
          subs: [
              {
                  index: "index-1",
                  title: "shenme1"
              },
              {
                  index: "index-2",
                  title: "shenme2"
              },
              {
                  index: "index-3",
                  title: "shenme3"
              }
          ]*/

        },
        {
          index: 'develop',
          title: '发展历程'
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
  methods:{
      handleSelect(key, keyPath) {

      },
  },
}
</script>

<style scoped>

  *{
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-menu {
    background: transparent none !important;
    border-bottom: none!important;
  }

  .el-menu--horizontal {
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-submenu__title{
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-menu--horizontal .el-menu-item:not(.is-disabled) {
    background: transparent none !important;
    border-bottom: none!important;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-menu-item.is-active {
    background: transparent none !important;
    border-bottom: none!important;
  }

  .el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
    color: white;
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-menu--popup{
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-menu-item{
    background: transparent none !important;
    border-bottom: none!important;
  }
  .el-menu-item:hover{
    color: #409EFF !important;
  }
  .sidebar {
    display: block;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    z-index: 666;
  }
  .sidebar ul {
    display: flex;
    justify-content: space-around;
    height: 124px!important;
    margin-bottom: 10px;
  }
  .sidebar ul, li {
    list-style: none;
    line-height: 124px!important;
    color: white!important;
  }
  .sidebar li img {
    margin-top: 0;
    width: 200px;
    margin-bottom: 10px;
  }
  /*除下拉菜单外菜单文字*/
  .sidebar .el-menu-item * {
    line-height: 124px!important;
    color: white;
    vertical-align: middle;
  }
  .sidebar .el-menu-item *:hover {
    color: #409EFF !important;
  }

  /*下拉菜单*/
  .el-menu--horizontal{
    background: transparent none!important;
  }

  .el-menu--horizontal ul{
    background: transparent none!important;
    /*background-color: black;*/
  }
  /*样式已在INDEX.CSS中修改 在此无效 请在INDEX.CSS中搜索田川*/
  .el-menu--popup {
    z-index: 100;
    border: none!important;
    top:100px;
    padding: 5px 0;
    border-radius: 2px;
    -webkit-box-shadow: none!important;
    background: transparent none!important;
    box-shadow: none!important;
  }
  .el-menu .el-submenu, .el-menu--popup {
    min-width: 100px!important;
  }
  /*相当重要 下拉菜单真正有用的样式*/
  .el-menu--horizontal .el-menu .el-menu-item, .el-menu--horizontal .el-menu .el-submenu__title {
    float: none;
    height: 20px!important;
    line-height: 20px!important;
    padding: 0!important;
    margin: 20px 20px!important;
    background: transparent none!important;
    color: #000;
  }
  .el-menu span{
    line-height: 20px;
  }


</style>
