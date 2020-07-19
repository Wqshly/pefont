<template>
  <div class="back-to-top">
    <div class="item" id="test">
      <span title="收起" class="top iconfont icon-zhankai" @click="down()"   :class="{'visible':isActive,'hidden':!isActive }"  ></span>
      <span class="middle iconfont icon-kefu" @click="up()"   :class="{'visible':isActive,'hidden':!isActive }"  ></span>
      <span class="middle iconfont icon-anzhuo" @click="up()"  :class="{'visible':isActive,'hidden':!isActive }"  ></span>
      <span  title="回到顶部" class="top iconfont icon-xiangshang" @click="handle()"   :class="{'visible':isActive,'hidden':!isActive }"  ></span>
      <span  title="展开" class="top iconfont icon-xiangshang1" @click="up()"   :class="{'visible':!isActive,'hidden':isActive }"  ></span>
    </div>
  </div>
</template>

<script >

export default {
  name: 'backTop',
  data () {
    return {
        isActive:true
    }
  },
  methods:{
      none(){
          this.isActive=false;
      },
      OK(){
          this.isActive=true;
      },
      up(){
          document.getElementById("test").style.height="180px";
          this.OK();
      },
      down(){
          document.getElementById("test").style.height="40px";
          this.none();
      },
      handle(val){
          window.scroll(0,0);

      },

  },
  created() {

  },

}
</script>

<style scoped>
  .visible {
    display: inherit;
  }

  .hidden {
    display: none;
  }
  .middle{
    margin: 15px 5px;
  }
  .top{
    margin: 5px 5px;
  }
  .back-to-top .item{
    height: 180px;
    overflow: hidden;
    width: 40px;
    margin: 10px auto;
    border: #666666 1px solid;
    color: #666666;
    border-radius:20px;
    cursor: pointer;
    transition: height 0.5s;
  }

  .back-to-top span{
    transition: color 0.5s;
  }
  .back-to-top span:hover{
    color: #409EFF;
  }

  .back-to-top{
    overflow: hidden;
    opacity: 0.8;
    position: fixed;
    bottom: 120px;
    right: 20px;
    width: 60px;
  }

  .iconfont{
    height: 30px;
    width: 30px;
    font-size: 30px;
    line-height: 40px;
  }
  @media (max-width: 760px) {
    .back-to-top{
      display: none;
    }

  }
  #test5{
    display: none;
  }
</style>
