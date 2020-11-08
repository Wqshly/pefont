<template>
  <div id="footer">
    <div id="container">
    <h2 class="row">联系PE校园</h2>
    <p class="row">高校入驻，定制业务，商务合作</p>
    <div class="row icon-group">
      <el-popover
        placement="top"
        trigger="hover"
        width="fit-content"
        ref="popover1">
        <div class="popover-content">
          <div>商务：0512-88888888<br>客服：8888888888‬</div>
        </div>
      </el-popover>
      <div class="icon-item" v-popover:popover1>
        <i class="iconfont icon-dianhua"></i>
      </div>

      <el-popover
        placement="top"
        trigger="hover"
        width="90%"
        ref="popover2">
        <div class="address"><img style="width: 100%" v-lazy="require('../assets/img/footer/map.png')" alt=""></div>
      </el-popover>
      <div class="icon-item" v-popover:popover2>
        <i class="iconfont icon-dingwei"></i>
      </div>

      <el-popover
        placement="top"
        trigger="hover"
        width="fit-content"
        ref="popover3">
        <div class="qq">QQ: 491528074</div>
      </el-popover>
      <div class="icon-item" v-popover:popover3>
        <i class="iconfont icon-QQ1"></i>
      </div>

      <el-popover
        placement="top"
        trigger="hover"
        width="120"
        ref="popover4">
        <div class="weibo"><img style="width: 100%;" v-lazy="require('../assets/img/footer/weibo.png')" alt="">
        </div>
      </el-popover>
      <div class="icon-item" v-popover:popover4>
        <i class="iconfont icon-weibo1"></i>
      </div>

      <el-popover
        placement="top"
        trigger="hover"
        width="120"
        ref="popover5">
        <div class="weibo"><img style="width: 100%;" v-lazy="require('../assets/img/footer/wechat.png')" alt="">
        </div>
      </el-popover>
      <div class="icon-item" v-popover:popover5>
        <i class="iconfont icon-wechat"></i>
      </div>
    </div>


    <p style="text-align: center">
      山东科技信息技术有限公司 Chuan 版权所有 鲁ICP备12345678号-4 鲁B2-20200512
    </p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },

}
</script>

<style scoped>
  #footer{
    width:100%;
    z-index: 99999;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    padding-top: 15px;
    background-color: #1B1C20;
    color: #8B8B8B;
    font-family: tahoma,"microsoft yahei","\5FAE\8F6F\96C5\9ED1"!important;
    overflow: hidden;
  }
  #container{
    width: 500px;
    height: fit-content;
  }
  .row{
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }

  h2{
    color: white;
  }

  .icon-group {
    margin: 30px 0 50px;
    flex-wrap: wrap;
  }
  .icon-group .icon-item {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    border-radius: 4px;
    position: relative;
  }
  .icon-group .icon-item .iconfont{
    transition: all 0.5s;
    font-size: 25px;
    line-height: 40px;
  }

  .icon-group .icon-item .iconfont:hover{
    font-size: 30px;
    color: #fff;
  }

  img{
    width: 100%;
  }

  p {
    margin: 10px 0;
    text-align: center;
    color: #60606d;
    font-size: 12px;
  }
</style>
