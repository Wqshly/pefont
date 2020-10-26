<template>
  <div  class="main-nav">
    <div class="header" style="height: 60px">

    </div>
  </div>
</template>

<script>

import {api} from "@/api/ajax"
export default {

    data() {
        return {
          options:['足球','排球','网球','羽毛球','乒乓球','篮球']
        }
    },
    methods: {


    },
    mounted() {
      let cl = '本地比赛';
      if(this.$route.path != '/home3'){
          cl = this.options[parseInt(this.$route.path.split('/')[2])-1];
      }
      this.$store.commit('setActivityClass',cl);
      this.$router.push('/promotion');
      window.scroll(0,0);
    },
    created() {

    },
}
</script>

<style scoped>
  .main-nav ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
  .main-nav {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
  .main-nav .nav-item a {
    text-decoration: none;
    display: block;
    color: #444;
    line-height: 40px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 300;
    transition:0.15s ease-out;
  }
  .main-nav .nav-item a:hover {
    color: #409EFF;
  }
  .main-nav .nav-group__title {
    font-size: 16px;
    color: #333;
    line-height: 26px;
    margin-top: 15px;
  }
  .pure-menu-list .nav-item{
    display: block;
  }
  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;

  }
  .login-box {
    height: auto;
    font-size: 12px;
    text-align: center;
    width: 250px;
    padding:40px;
    min-width: 200px;
    margin: auto;
  }

  .login-box a{
    text-decoration: none;
    color: #666;
    cursor: pointer;
  }

  .login-box a{
    transition:0.15s ease-out;
    color: rgb(0,0,238);
    line-height: 40px;
    text-decoration: none;
    font-weight: 400;
  }

  .login-box a:hover{
    color: #409EFF;
  }

  .login-box .icon{
    cursor: pointer;
    font-size: 30px;
    margin: 20px 20px 0 20px;
    transition: 1s all;
  }

  .login-box .icon:hover{
    font-size: 40px;
  }

  .header{
    margin-bottom: 10px;
  }
</style>
