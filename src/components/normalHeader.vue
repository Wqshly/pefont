<template>
  <div>
  <div class="normal">
    <div class="normal_header">
      <img src="../assets/img/normalHeader/logo3.png" style="margin:15px ;width: 227px;height: 50px" alt="PE">
      <i class="el-icon-s-fold" @click="drawer = true"  style="margin-right:15px;font-size:30px;vertical-align:middle;float: right;line-height: 80px"></i>

    </div>

  </div>
  <el-drawer
    title=""
    :visible.sync="drawer"
    :direction="direction"
    :size="'40%'"
    :before-close="handleClose"
    @open="handleOpen">
    <span slot="title">{{user_name}}</span>
    <h1 class="h1_drawer">{{user_school}}</h1>
    <el-menu default-active="0" class="el-menu-vertical-demo" @select="handleSelect">
      <el-menu-item index="0">
        <i class="el-icon-s-flag"></i>
        <span slot="title">活动中心</span>
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-notebook-1"></i>
        <span slot="title">裁判园地</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-s-goods"></i>
        <span slot="title">运动器材</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-basketball"></i>
        <span slot="title">健身小屋</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-question"></i>
        <span slot="title">帮助</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'normal_header',
  data () {
    return {
        drawer: false,
        direction: 'rtl',
        user_name:'田川',
        user_school:'山东科技大学'
    }
  },
  methods:{
      handleOpen() {
          console.log(this.$route.path);
      },
      handleClose(done) {
        done();
      },
      handleSelect(key, keyPath) {
          console.log(key, keyPath);
      }
  },
}
</script>

<style scoped>
  .normal{
    width: 100%;
    height: 80px;
    position: fixed;
    top:0;
    z-index: 999;
    background-color: white;

  }
  .normal_header{
    height: 80px;
    line-height: 80px;
    top:0;
    margin: 0 auto;
    border-bottom: 1px solid #dcdfe6;
    width: 100%;
    vertical-align:middle;
  }

  @media screen and (min-width: 1140px){
    .normal .normal_header {
      width: 1140px;
    }
  }

  .normal .el-icon-s-fold:hover{
    color:#409EFF;
    transition: 0.5s;
  }

  .h1_drawer{
    font-weight: 300;
    font-size: 35px;
    width: 100%;
    display: block;
    vertical-align: middle;
    text-align: center;
    line-height: 100px;
  }


</style>
