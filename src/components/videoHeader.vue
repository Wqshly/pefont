<template>
  <div>
  <div class="video">
    <div class="video_header">
      <img src="../assets/logo2.png" alt="PE">
      <i class="el-icon-s-fold" @click="drawer = true" ></i>

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
    <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect">
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
  </div>
</template>

<script>
import vHeader from '@/components/rightDrawer'
export default {
    name: 'video_header',
    components: {
        vHeader
    },
    data () {
      return {
          drawer: false,
          direction: 'rtl',
          user_name:'田川',
          user_school:'山东科技大学',
          options:['/activity',"/video"]
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
            if(this.options[key]==this.$route.path){
                this.drawer=false;
            }
            else{
                this.$router.push(this.options[key]);
            }

        }
    },
    mounted(){

    }
}
</script>

<style scoped>
  .video{
    width: 100%;
    height: 80px;
    position: fixed;
    top:0;
    z-index: 999;
    background-color: white;
    border-bottom: 1px solid #dcdfe6;
  }
  .video_header{
    height: 80px;
    line-height: 80px;
    top:0;
    width: 100%;
    vertical-align:middle;
  }

  @media screen and (min-width: 1140px){
    .video .video_header {
      width: 1140px;
      margin: 0 auto;
    }
  }

  .video_header img{
    line-height:80px;
    height: 30px;
    margin:25px 0 ;
  }
  .video_header i{
    margin-right:15px;
    font-size:30px;
    float: right;
    line-height: 80px;
  }

  .video .el-icon-s-fold:hover{
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
