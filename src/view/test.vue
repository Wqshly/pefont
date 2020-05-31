<template>
  <div class="function1">
    <div v-if="this.screenWidth <= 880" class="unreal" style="height: 60px">
    </div>
    <div class="index-banner">
      <div class="animated fadeInRight"><img src="../assets/img/function1/function_1.png" alt=""></div>
    </div>

    <div class="func_section1">
      <div class="container_self">
        <div class="item_thu">
          <div align="center">
            <img src="../assets/img/function1/act_1.png" alt="">
            <p>创建活动</p>
            <p>由管理人员在APP、WEB端创建活动，由老师审核后执行活动内容</p>
          </div>

        </div>
        <div class="item_thu">
          <div align="center">
            <img src="../assets/img/function1/act_2.png" alt="">
            <p>参加活动</p>
            <p>学生可以在APP、H5、WEB端报名参加活动，多端互动，想你所想</p>
          </div>

        </div>
        <div class="item_thu">
          <div align="center">
            <img src="../assets/img/function1/act_3.png" alt="">
            <p>签到签退</p>
            <p>线下参加活动可通过扫描二维码或者定位功能签到签退，方便快捷</p>
          </div>

        </div>
        <div class="item_thu">
          <div align="center">
            <img src="../assets/img/function1/act_4.png" alt="">
            <p>完结加分</p>
            <p>学生可以在APP、H5、WEB端报名参加活动，多端互动，想你所想</p>
          </div>
        </div>
      </div>
    </div>

    <div class="func_section2">
      <img src="../assets/img/function1/function_2.png" alt="">
    </div>

    <div class="func_section3">
      <div class="container_self">

        <div class="item_thu" align="center">
          <p>第二课堂成绩单-支持按需定制</p>
          <p>PU口袋校园可将学生活动、申请类学分数据按条件生成成绩单，便于高校对学生第二课堂情况的统计和管理；</p>
        </div>

        <div class="item_thu" align="center">
          <img src="../assets/img/function1/function_3.png" alt="">
        </div>


        <div class="item_thu" align="center">
          <img src="../assets/img/function1/function_4.png" alt="">
        </div>

        <div class="item_thu" align="center">
          <p>学分预警系统</p>
          <p>PU口袋校园具备灵活的学分上下限定义和预警系统，帮助高校更高效的管理和提醒第二课堂学分情况</p>
        </div>

      </div>
    </div>


    <div class="func_section4">
      <div class="content">
        <p>第二课堂数据统计</p>
        <p>PU口袋校园可将学生活动、申请类数据进行多维度筛选，便于高校对学生第二课堂情况的统计和分析</p>
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
  .function1 .container_self{
    margin: 0 auto;
    width: 95%;
    overflow: hidden;
  }

  @media (min-width: 1200px){
    .function1 .container_self {
      width: 60%!important;
    }
  }

  .function1 .index-banner {
    height: 34.5vw;
    background: url(../assets/img/function1/banner_4.png) center no-repeat;
    background-size: cover;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .function1 .index-banner div {
    width: 23.5vw;
    position: absolute;
    right: 17vw;
    top: 30%;
  }
  .function1 .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }
  .function1 .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .function1 .index-banner div img {
    width: 100%;
  }
  .function1 .index-banner img {
    vertical-align: middle;
  }
  .function1 .index-banner img {
    border: 0;
  }

  /*区域1*/
  .function1 .func_section1{
    overflow: hidden;
    padding: 150px 0 0 0;
  }
  .function1 .func_section1 .item_thu{
    width: 100%;
  }
  .function1 .func_section1 .item_thu img{
    width: 80%;
  }
  @media (min-width: 540px){
    .function1 .func_section1 .item_thu{
      width: 50%;
      float: left;
    }
  }
  @media (min-width: 1200px){
    .function1 .func_section1 .item_thu{
      width: 25%;
      float: left;
    }
  }

  .function1 .func_section1 .item_thu p:nth-of-type(1) {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
  .function1 .func_section1 .item_thu p:nth-of-type(2) {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #898888;
    width: 80%;
    padding: 10px 0;
  }

  /*区域2*/
  .function1 .func_section2{
    overflow: hidden;
    width: 100%;
  }
  .function1 .func_section2 img{
    width: 100%;
  }

  /*区域3*/
  .function1 .func_section3{
    overflow: hidden;
    width: 100%;
    padding-top: 20px;
  }

  .function1 .func_section3 .item_thu{
    width: 100%;
  }
  .function1 .func_section3 img{
    width: 80%;
  }
  @media (min-width: 768px){
    .function1 .func_section3 .item_thu{
      width: 50%;
      float: left;
    }
  }

  .function1 .func_section3 .item_thu p:nth-of-type(1) {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
  .function1 .func_section3 .item_thu p:nth-of-type(2) {
    font-size: 15px;
    line-height: 24px;
    color: #898888;
    width: 80%;
    padding: 10px 0;
  }

  /*区域4*/
  .function1 .func_section4 {
    overflow: hidden;
    height: 28.4vw;
    background: url(../assets/img/function1/function_5.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
  }
  .function1 .func_section4 .content {
    color: #fff;
    position: absolute;
  }
  .function1 .func_section4 .content p:nth-of-type(1) {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .function1 .func_section4 .content p:nth-of-type(2) {
    font-size: 14px;
    width: 45%;
  }
  .function1 .func_section4 .content {
    top: 10px;
    left: 15px;
  }

  @media screen and (min-width: 767px){
    .function1 .func_section4 .content {
      top: 40%;
      left: 20%;
    }
  }

  /*区域7*/
  .function1 .func_footer {
    background-color: white;
    color: black;
  }
  .function1 .func_footer p {
    margin: 10px 0;
    font-size: 14px;
    text-align: center;
  }

</style>
