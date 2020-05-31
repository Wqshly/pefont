<template>
  <div class="function1">
    <div class="index-banner">
      <div class="animated fadeInRight"><img src="../assets/img/function1/function_1.png" alt=""></div>
    </div>
    <div class="container_self func_section1">
      <div class="row">
        <div class="col-xs-12 step">
          <div>
            <img src="../assets/img/function1/act_1.png" alt="">
          </div>
          <p>创建活动</p>
          <p>由管理人员在APP、WEB端创建活动，由老师审核后执行活动内容，规范又省心</p>
        </div>
        <div class="col-xs-12 step">
          <div>
            <img src="../assets/img/function1/act_2.png" alt="">
          </div>
          <p>参加活动</p>
          <p>学生可以在APP、H5、WEB端报名参加活动，多端互动，想你所想</p>
        </div>
        <div class="col-xs-12 step">
          <div>
            <img src="../assets/img/function1/act_3.png" alt="">
          </div>
          <p>签到签退</p>
          <p>线下参加活动可通过扫描二维码或者定位功能签到签退，方便快捷</p>
        </div>
        <div class="col-xs-12 step">
          <div>
            <img src="../assets/img/function1/act_4.png" alt="">
          </div>
          <p>完结加分</p>
          <p>学生可以在APP、H5、WEB端报名参加活动，多端互动，想你所想</p>
        </div>
      </div>
    </div>
    <div class="func_section2">
      <img src="../assets/img/function1/function_2.png" alt="">
    </div>
    <div class="container_self func_section3">
      <div class="row">
        <div class="col-lg-6 text_module">
          <p>第二课堂成绩单-支持按需定制</p>
          <p>PU口袋校园可将学生活动、申请类学分数据按条件生成成绩单，便于高校对学生第二课堂情况的统计和管理；</p>
        </div>
        <div class="col-lg-6 img_module">
          <img src="../assets/img/function1/function_3.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6 img_module">
          <img src="../assets/img/function1/function_4.png" alt="">
        </div>
        <div class="col-lg-6 text_module">
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

    }
  }
}
</script>

<style scoped>

  /*每个区域  自适应container_self的width有BUG*/
  @media (max-width: 20000px){
    .container_self {
      width: 1170px;
    }
  }

  @media (max-width: 1200px){
    .container_self {
      width: 970px!important;
    }
  }

  @media (max-width: 992px){
    .container_self {
      width: 750px!important;
    }
  }
  .container_self {
    padding-right: 15px!important;
    padding-left: 15px!important;
    margin-right: auto!important;
    margin-left: auto!important;
    border: white!important;
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
  .function1 img {
    vertical-align: middle;
  }
  .function1 img {
    border: 0;
  }
  .function1 .func_section1 {
    margin-top: 150px;
  }
  .function1 .row {
    margin-right: -15px;
    margin-left: -15px;
  }
  .function1 .func_section1 .step {
    padding-bottom: 50px;
  }
  .function1 .func_section1 .step div {
    margin: auto;
    width: 209px;
    height: 142px;
  }
  .function1 .func_section1 .step div img {
    width: 100%;
    height: 100%;
  }

  .function1 p {
    margin: 0 0 10px;
  }
  .function1 .func_section1 .step p:nth-of-type(1) {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
  }
  .function1 .func_section1 .step p:nth-of-type(2) {
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #898888;
    width: 80%;
    margin: auto;
  }
  @media (max-width: 200000px){
    .function1 .col-xs-12 {
      width: 25%;
    }
  }
  @media (max-width: 1200px){
    .function1 .col-xs-12 {
      width: 50%;
    }
  }
  @media (max-width: 768px){
    .function1 .col-xs-12 {
      width: 100%;
    }
  }

  .function1 .col-xs-12 {
    position: relative;
    min-height: 1px;
    float: left;
  }

  /*区域2*/
  .function1 .func_section2 img {
    width: 100%;
  }


  /*区域3*/
  .function1 .func_section3 .row {
    padding: 50px 0;
  }
  .function1 .func_section3 .text_module {
    padding: 50px 0;
  }
  .function1 .func_section3 .img_module {
    text-align: center;
    vertical-align: center;
    height: 100%;
  }
  .function1 .func_section3 .img_module img {
    width: 60%;
  }
  .function1 .col-lg-6{
    float: left;
  }
  @media (max-width: 20000px){
    .function1 .col-lg-6 {
      width: 50%;
    }
  }
  @media (max-width: 768px){
    .function1 .col-lg-6 {
      width: 100%;
    }
  }
  .function1 .func_section3 .text_module p:nth-of-type(1) {
    font-size: 24px;
    font-weight: bold;
    width: 62%;
    margin: auto;
    padding-left: 2.5%;
  }
  .function1 .func_section3 .text_module p:nth-of-type(2) {
    font-size: 14px;
    color: #898888;
    width: 55%;
    margin: 30px auto auto;
  }

  .function1 .func_section4 {
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
  @media screen and (max-width: 767px){
    .function1 .func_section4 .content {
      top: 10%;
      left: 20%;
    }
  }
  @media screen and (max-width: 20000px){
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
  /*以下样式不要轻易更改*/
  .btn-group-vertical>.btn-group:after, .btn-group-vertical>.btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container_self-fluid:after, .container_self-fluid:before, .container_self:after, .container_self:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
    display: table;
    content: " ";
  }
  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .btn-group-vertical>.btn-group:after, .btn-toolbar:after, .clearfix:after, .container_self-fluid:after, .container_self:after, .dl-horizontal dd:after, .form-horizontal .form-group:after, .modal-footer:after, .modal-header:after, .nav:after, .navbar-collapse:after, .navbar-header:after, .navbar:after, .pager:after, .panel-body:after, .row:after {
    clear: both;
  }
  .btn-group-vertical>.btn-group:after, .btn-group-vertical>.btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container_self-fluid:after, .container_self-fluid:before, .container_self:after, .container_self:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .modal-header:after, .modal-header:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
    display: table;
    content: " ";
  }
  :after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

</style>
