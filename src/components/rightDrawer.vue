<template>
  <el-drawer
    title=""
    :visible.sync="drawer1"
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
        <i class="el-icon-video-camera-solid"></i>
        <span slot="title">视频中心</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-basketball"></i>
        <span slot="title">运动器材</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-notebook-1"></i>
        <span slot="title">裁判园地</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-s-management"></i>
        <span slot="title">后台管理</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-question"></i>
        <span slot="title">帮助</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script>

export default {
    name: 'right_drawer',
    props: ["drawer"],
    data () {
      return {
          drawer1: false,
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
    mounted(){

    },
    watch: {

        drawer: {
            deep: true,
            handler(nv, ov) {
                this.drawer1 = nv;
            }
        }
    },
}
</script>

<style scoped>

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
