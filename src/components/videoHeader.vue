<template>
  <div style="height: 80px;">
    <div class="normal">
      <div class="activity_header">
        <img src="../assets/logo2.png"  alt="PE">
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
      <el-menu default-active="" class="el-menu-vertical-demo" @select="handleSelect">
        <el-menu-item index="0">
          <i class="el-icon-s-flag"></i>
          <span slot="title">活动</span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-video-camera-solid"></i>
          <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-basketball"></i>
          <span slot="title">器材</span>
        </el-menu-item>
        <el-menu-item index="3" >
          <i class="el-icon-notebook-1"></i>
          <span slot="title">理论</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-user-solid"></i>
          <span slot="title">个人</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-s-management"></i>
          <span slot="title">管理</span>
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
        name: 'activity_header',
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
                    this.drawer=false
                }

            }
        },
        mounted(){

        }
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
    border-bottom: 1px solid #dcdfe6;

  }
  .activity_header{
    height: 80px;
    line-height: 80px;
    top:0;
    margin: 0 auto;
    width: 100%;
    vertical-align:middle;
  }
  .activity_header img{
    line-height:80px;
    height: 30px;
    margin:25px 0 ;
  }
  .activity_header i{
    margin-right:15px;
    font-size:30px;
    vertical-align:middle;
    float: right;
    line-height: 80px;
  }
  @media screen and (min-width: 1140px){
    .normal .activity_header {
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
