<template>
  <div class="venue">
    <div class="index-banner">
      <div class="index-font-box">
        <h1>线上预约</h1>
        <p>无需登录，更简单快捷地场馆预约</p>
      </div>
      <div class="center-input">
        <div style="width: 40%;">
        <el-input
          placeholder="输入场馆关键词"
          suffix-icon="el-icon-search"
          v-model="input1">
        </el-input>
        </div>
      </div>
    </div>
    <v-venue :search="input1"></v-venue>
  </div>
</template>

<script>
  import vVenue from '../../components/venue/venue.vue'
  export default {
    components:{
      vVenue
    },
    data() {
      return {
        input1: null,
      }
    }
  }
</script>

<style>

  .venue .index-banner {
    height: 34.5vw;
    background: url(../../assets/img/index/venue/venue.jpg) center no-repeat;
    background-size: cover;
    color: #fff;
    position: relative;
  }
  .venue .index-banner .index-font-box {
    display: none;
  }

  .venue .center-input {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .venue .center-input input::-ms-input-placeholder input::-webkit-input-placeholder{
    color: #ffffff;
  }

  .venue .center-input input::-webkit-input-placeholder{
    color: #ffffff;
  }
  .venue .center-input .el-input__inner {
    background-color: transparent!important;
    border: 2px solid #ffffff!important;
    border-radius: 40px;
    color: #ffffff;
  }
  .venue .center-input .el-icon-search {
    color: #ffffff;
  }
  @media (min-width: 760px) {
    .venue .index-banner .index-font-box {
      position: absolute;
      display: inherit;
      top: 35%;
      left: 10%;
      font-weight: 200;
    }
  }

  .venue .index-banner .index-font-box h1 {
    font-family: inherit;
    font-weight: 500!important;
    line-height: 1.1;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 40px;
  }

  .venue .index-banner .index-font-box p {
    margin-top: 15px;
    font-size: 20px;
  }


</style>
