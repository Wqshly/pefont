<template>
  <div class="app1">
    <div v-if="this.screenWidth <= 880" class="unreal" style="height: 60px">
    </div>
    <div class="index-banner">
      <div class="animated fadeInRight"><img src="../../assets/img/index/app1/app.png" alt=""></div>
    </div>

    <div class="app_section1">
      <div class="container_self">
        <div class="item_thu">
          <div align="center">
            <img src="../../assets/img/index/app1/act_1.png" alt="">
            <p>二课活动</p>
            <p>全校二课活动等你来参加，学分交友实践</p>
          </div>

        </div>
        <div class="item_thu">
          <div align="center">
            <img src="../../assets/img/index/app1/act_2.png" alt="">
            <p>高校头条</p>
            <p>给你最全面的校园资讯、学习、娱乐、成长、生活等特色栏目内容丰富多彩。</p>
          </div>

        </div>
        <div class="item_thu">
          <div align="center">
            <img src="../../assets/img/index/app1/act_3.png" alt="">
            <p>话题广场</p>
            <p>最热门有趣的话题，互动交流大平台，记录生活，展现自我。</p>
          </div>

        </div>
        <div class="item_thu">
          <div align="center">
            <img src="../../assets/img/index/app1/act_4.png" alt="">
            <p>福利中心</p>
            <p>陪伴大学生生活，同时给大学生带来很多福利。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="app_section2">
      <div>
        <div class="item" v-if="this.screenWidth > 880">
          <p>PE校园</p>
          <p>学生成长平台</p>
        </div>
        <div class="item" align="center">
        <img src="../../assets/img/index/app1/app_code.png" alt="">
        </div>
      </div>

    </div>


    <div class="func_footer">
      <div class="container_self">
        <p style="text-align: center">
          山东科技信息技术有限公司 Chuan 版权所有 鲁ICP备12345678号-4 鲁B2-20200512
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'home',
        data () {
            return {
                screenWidth: '',
            }
        },
        methods: {
            handleSelect(key, keyPath) {

            },
            getScreenWidth() {
                this.screenWidth = window.innerWidth
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

<style scoped>

  /*自适应margin*/
  .app1 .container_self{
    margin: 0 auto;
    width: 95%;
    overflow: hidden;
  }

  @media (min-width: 1200px){
    .app1 .container_self {
      width: 70%!important;
    }
  }

  .app1 .index-banner {
    height: 34.5vw;
    background: url(../../assets/img/index/app1/app_banner.png) center no-repeat;
    background-size: cover;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .app1 .index-banner div {
    width: 23.5vw;
    position: absolute;
    right: 17vw;
    top: 30%;
  }
  .app1 .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }
  .app1 .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .app1 .index-banner div img {
    width: 100%;
  }
  .app1 .index-banner img {
    vertical-align: middle;
  }
  .app1 .index-banner img {
    border: 0;
  }

  /*区域1*/
  .app1 .app_section1{
    overflow: hidden;
    padding: 150px 0 0 0;
  }
  .app1 .app_section1 .item_thu{
    width: 100%;
    padding: 20px;
  }
  .app1 .app_section1 .item_thu img{
    width: 60%;
  }
  @media (min-width: 910px){
    .app1 .app_section1 .item_thu{
      width: 40%;
      float: left;
    }
  }

  .app1 .app_section1 .item_thu p:nth-of-type(1) {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
  .app1 .app_section1 .item_thu p:nth-of-type(2) {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #898888;
    width: 80%;
    padding: 10px 0;
  }

  /*区域2*/
  .app1 .app_section2{
    overflow: hidden;
    background: url(../../assets/img/index/app1/app_banner2.png) no-repeat;
    background-size: 100% 100%;
    height: 255px;
    width: 100%;
  }
  .app1 .app_section2 img{
    height: 230px;

  }
  .app1 .app_section2 .item{
    height: 100%;
    width: 100%;
    vertical-align: center;
    padding: 20px;
  }

  @media (min-width: 880px){
    .app1 .app_section2 img{
      float: right;
      padding-left: 0;
      line-height: 100%;
    }
    .app1 .app_section2 .item{
      width: 40%;
      float: left;
    }
  }

  .app1 .app_section2 p:nth-of-type(1) {
    font-size: 24px;
    color: white;
    margin-top: 20px;
    font-weight: bold;
  }
  .app1 .app_section2 p:nth-of-type(2) {
    font-size: 15px;
    line-height: 24px;
    color: white;
    width: 80%;
    padding: 10px 0;
  }

  /*脚*/
  .app1 .func_footer {
    background-color: white;
    color: black;
  }
  .app1 .func_footer p {
    margin: 10px 0;
    font-size: 14px;
    text-align: center;
  }

</style>
