<template>
  <div class="homepage">
    <div class="index-banner">
      <!-- 背景动图 -->
      <div class="video-box">
        <video loop autoplay muted>
          <source src="../assets/home.mp4" type="video/mp4">
        </video>
        <div class="overlay"></div>
      </div>
      <div class="index-font-box">
        <h1>校园体育,提升健康</h1>
        <p>选择PE校园，进入校园健康时代</p>
      </div>
    </div>

    <div class="container_self section-1">
      <template>
        <el-carousel indicator-position="outside" type="card" height="529px" style="width: 1170px!important;">
          <el-carousel-item v-for="item in items1" :key="item">
            <h3 class ="carousel_">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

    <div class="container_self section-2 ">
        <div class="container_self description">
          <h2>PE校园-无边界校园</h2>
          <div class="detail">
            <p>
              PE校园是由苏州天宫信息技术有限公司自主开发，最早探索建设第二课堂的平台，
            </p>
            <p>是国内领先的大学生成长服务体系提供商。</p>
          </div>
        </div>

      <div class="row">
        <div class="col-sm-6">
          <div class="thumbnail hover-card">
            <img src="../assets/img/section2/index_explore.png" alt="探索二课">
            <div class="caption">
              <h3 style="text-align: center">探索二课</h3>
              <p style="text-align: center">PE校园是全国最早</p>
              <p style="text-align: center">探索建设第二课堂的平台</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="thumbnail hover-card">
            <img src="../assets/img/section2/index_platform.png" alt="指定平台">
            <div class="caption">
              <h3 style="text-align: center">指定平台</h3>
              <p style="text-align: center">《中长期青年发展规划》</p>
              <p style="text-align: center">指定服务平台</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail hover-card">
            <img src="../assets/img/section2/index_technical.png" alt="技术解决方案">
            <div class="caption">
              <h3 style="text-align: center">技术解决方案</h3>
              <p style="text-align: center">技术大咖分分钟解决你的技术难题，</p>
              <p style="text-align: center">并持续优化解决方案</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail hover-card">
            <img src="../assets/img/section2/index_production.png" alt="产品服务">
            <div class="caption">
              <h3 style="text-align: center">产品服务</h3>
              <p style="text-align: center">提供满足大众需求的第二课堂</p>
              <p style="text-align: center">SAAS平台和特殊定制化需求</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail hover-card">
            <img src="../assets/img/section2/index_school.png" alt="合作院校">
            <div class="caption">
              <h3 style="text-align: center">合作院校</h3>
              <p style="text-align: center">覆盖60个城市，690+合作院校，</p>
              <p style="text-align: center">1000w学生用户</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="section-3">
      <div class="container_self">
        <div class="container_self description">
          <h2>PE校园优势</h2>
          <div class="detail">
            <p>
              PE校园专注于为高校学生的综合能力提升提供系列服务，保障大学生不断成长的同时，
            </p>
            <p>
              也在不断改善自身产品，为学生和高校提供更好的服务。
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src="../assets/img/section3/index_system.png" alt="专业系统">
              <div class="caption">
                <h3 style="text-align: center">专业系统</h3>
                <p style="text-align: center">
                  集成课程体系，学校培养评估，学生
                </p>
                <p style="text-align: center">
                  素质评价为一体的综合素质管理平台
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src="../assets/img/section3/index_variable.png" alt="多端形态">
              <div class="caption">
                <h3 style="text-align: center">多端形态</h3>
                <p style="text-align: center">APP、H5、小程序、PC、Web多端</p>
                <p style="text-align: center">形态，满足不同的使用场景需求          </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src="../assets/img/section3/index_personalization.png" alt="个性定制">
              <div class="caption">
                <h3 style="text-align: center">个性定制</h3>
                <p style="text-align: center">针对不同高校和学生群体需求，</p>
                <p style="text-align: center">定制符合其自身发展需求的功能</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="thumbnail">
              <img src="../assets/img/section3/index_upgrade.png" alt="持续升级">
              <div class="caption">
                <h3 style="text-align: center">持续升级</h3>
                <p style="text-align: center">不断优化迭代，持续升级，</p>
                <p style="text-align: center">为第二课堂的前行铺平道路</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container_self section-4">
      <div class="container_self title">
        <h2 style="text-align: center">PE校园智能</h2>
      </div>
      <div class="container_self content-box">
        <div class="row upper-row">
          <div class="col-xs-12 col-md-4">
            <div class="card right-pic">
              <div class="word">
                <h3 class="title">
                  成绩单定制
                </h3>
                <p>
                  PE校园可根据高校需求个性化定制成绩单，包含成绩单界面布局、各数据维度等方面的定制，支持一键导出打印等功能，在通用数据上帮助高校管理第二课堂的同时，差异化展示各校学生的综合素质情况。
                </p>
              </div>
              <div class="icon transcript"></div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 col-md-offset-4">
            <div class="card left-pic">
              <div class="icon dataopen"></div>
              <div class="word">
                <h3 class="title">
                  数据打通
                </h3>
                <p>
                  PE校园可实现与其他系统的互联互通，可实现基本信息同步维护，数据便捷查询；PE校园产生的活动、部落、学分等数据也可同步至学校，便于学校对大数据进行挖掘分析。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row bottom-row">
          <div class="col-xs-12 col-md-4">
            <div class="card right-pic">
              <div class="word">
                <h3 class="title">
                  精准数据运算定制
                </h3>
                <p>
                  PE校园提供符合学校要求的定制数据结果，展现第二课堂教育成果，为学校提供更好的第二课堂教育以及学生素质教育指导。
                </p>
              </div>
              <div class="icon work"></div>
            </div>
          </div>
          <div class="col-xs-12 col-md-4 col-md-offset-4">
            <div class="card left-pic">
              <div class="icon stastic"></div>
              <div class="word">
                <h3 class="title">
                  第二课堂数据分析
                </h3>
                <p>
                  PE校园提供第二课堂数据多维度多条件的统计和分析，将各项结果准确图形化展示，并支持导出数据报告，便于学校对第二课堂大数据进行挖掘分析，对第二课堂的工作进行回顾和改进。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-5">
      <div class="container_self">
        <h2>选择PE校园<br>让大学生活更简单
        </h2>
        <div class="detail">
          <p>PE校园未来将为大学生成长提供一站式的全面服务，</p>
          <p>
            二课、学习、培训、就业、交友、娱乐...你想要的，PE校园都有！
          </p>
          <p>
            选择PE校园，让大学生活更简单!
          </p>
        </div>
      </div>
    </div>

    <div class="section-6">
      <div class="container_self">
        <h2 style="text-align: center">联系PE校园</h2>
        <p style="text-align: center">高校入驻，定制业务，商务合作</p>
        <div class="icon-group">
          <el-popover

            placement="top"
            trigger="hover"
            width="200"
            ref="popover1">
            <div class="popover-content" ><div>商务：0512-88888888<br>客服：8888888888‬</div></div>
          </el-popover>
          <div class="icon-item" v-popover:popover1>
            <i class="iconfont icon-dianhua"></i>
          </div>

          <el-popover
            placement="top"
            trigger="hover"
            width="760"
            ref="popover2">
            <div class="address"><img style="width: 760px ;height: 600px" src="../assets/img/section6/map.png" alt=""></div>
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
            width="270"
            ref="popover4">
            <div class="weibo"><img style="width: 270px ;height: 270px" src="../assets/img/section6/weibo.png" alt="">
            </div>
          </el-popover>
          <div class="icon-item" v-popover:popover4>
            <i class="iconfont icon-weibo1"></i>
          </div>

          <el-popover
            placement="top"
            trigger="hover"
            width="270"
            ref="popover5">
            <div class="weibo"><img style="width: 270px ;height: 270px" src="../assets/img/section6/wechat.png" alt="">
            </div>
          </el-popover>
          <div class="icon-item" v-popover:popover5>
            <i class="iconfont icon-wechat"></i>
          </div>

        </div>
      </div>


    </div>

    <div class="footer">
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
        /*轮播图 走马灯*/
      items1:[
        "sg",
        "ad",
        "op",
        "mn"
      ]
    }
  }
}
</script>

<style scoped>
  #app{
    width: 100%;
  }
  .homepage .video-box video {
    width: 100%;
    height: 100%;
  }

  .homepage .index-banner {
    position: relative;
  }

  .homepage .index-banner .video-box .overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: -1px;/**/
    opacity: .7;
    background: #1C1D21;
  }

  .homepage  .index-banner .index-font-box {
    position: absolute;
    top: 28%;
    left: 10%;
    font-weight: 200;
  }

  .homepage .index-banner .index-font-box h1 {
    font-weight: 700;
    font-size: 40px;
    color: #fff;
  }

  .homepage .index-banner .index-font-box p {
    margin-top: 15px;
    font-size: 20px;
    color: #898888;
  }

  /*每个区域  自适应container_self的width有BUG 原代码已被注释 逻辑上相同*/
  /*
  @media (min-width: 1200px){
    .container_self {
      width: 1170px;
    }
  }

  @media (min-width: 992px){
    .container_self {
      width: 970px;
    }
  }

  @media (min-width: 768px){
    .container_self {
      width: 750px;
    }
  }*/
  @media (max-width: 20000px){
    .homepage .container_self {
      width: 1170px;
    }
  }

  @media (max-width: 1200px){
    .homepage .container_self {
      width: 970px;
    }
  }

  @media (max-width: 992px){
    .homepage .container_self {
      width: 750px;
    }
  }
  .homepage .container_self {
    padding-right: 15px!important;
    padding-left: 15px!important;
    margin-right: auto!important;
    margin-left: auto!important;
    border: white!important;
  }
  .homepage .col-md-4, .col-sm-6,.col-xs-12{
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  @media (min-width: 768px) {
    .homepage .col-sm-6 {
      width: 50%;
    }
  }
  @media (min-width: 768px){
    .homepage .col-sm-6{
      float: left;
    }
  }
  @media (min-width: 992px){
    .homepage .col-md-3 {
      width: 25%;
    }
  }
  @media (min-width: 992px){
    .homepage .col-md-4 {
      width: 33.33333333%;
    }
  }
  @media (min-width: 992px){
    .homepage .col-md-4,.col-md-3{
      float: left;
    }
  }
  @media (min-width: 992px){
    .homepage .col-md-offset-4 {
      margin-left: 33.33333333%;
    }
  }
  .homepage .container_self .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500!important;
    line-height: 1.1;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .homepage .container_self * {
    box-sizing: border-box;
    font-family: "Microsoft Yahei", sans-serif;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }
  .homepage .container_self p {
    font-weight: 500!important;
    font-size: 14px!important;
  }
  .homepage .container_self h2 {
    font-size: 30px!important;
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  /*区域一*/
  .homepage .section-1{
    margin: 35px auto 15px auto;
    padding: 0 15px;

  }
  /* 走马灯*/
  .homepage .el-carousel__item h3 {
    color: #fafafa;
    font-size: 18px;
    opacity: 1;
    margin: 500px auto 0 auto;
    text-align: center;
    position: relative;
  }

  .homepage .el-carousel{
    margin: 0 auto;
    /*width = 1.7*height*/
  }

  .homepage  .el-carousel__container{
    /*width = 1.7*height*/
  }

  .homepage .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .homepage .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*区域2*/
  .homepage .section-2 {
    position: relative;
  }

  .homepage .section-2 .description {
    padding-top: 50px;
    margin-bottom: 20px;
    text-align: center;
  }
  .homepage .section-2 .description .detail {
    margin-top: 20px;
  }
  /*文字部分结束*/
  .homepage .section-2 .row {
    margin-right: -15px;
    margin-left: -15px;
    width: auto;
    height: auto;
  }

  .homepage .section-2 .hover-card {
    background: rgba(0, 0, 0, 0);
    position: relative;
    display: block;
    padding: 4px;
    margin-bottom: 20px;
    line-height: 1.42857143;
    border: 1px solid #ddd;
    border-radius: 4px;
    -webkit-transition: background-color .2s ease-in-out;
    -o-transition: background-color .2s ease-in-out;
    transition: background-color .2s ease-in-out;
  }
  .homepage .section-2 .hover-card:hover {
    background-color: #666666;
    opacity: 0.8;
  }
  .homepage .section-2 .hover-card:hover .caption h3,.homepage .section-2 .hover-card:hover .caption p{
    color: white;
  }
  .homepage .thumbnail .caption {
    padding: 9px;
    color: #333;
  }
  .homepage .thumbnail a>img, .thumbnail>img {
    margin-right: auto;
    margin-left: auto;
  }
  .homepage .carousel-inner>.item>a>img, .carousel-inner>.item>img,.homepage  .img-responsive, .thumbnail a>img, .thumbnail>img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  .homepage img {
    vertical-align: middle;
    border: 0;
  }
  /*区域3*/
  .homepage .section-3 {
    position: relative;
    background-image: url(../assets/img/section3/index_banner_1.png);
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
  }
  .homepage .section-3 .row {
    padding: 0 100px 100px;
    margin-right: -15px;
    margin-left: -15px;
  }
  .homepage .section-3 .description {
    margin-bottom: 20px;
    color: #fff;
    text-align: center;
    padding-top: 50px;
  }

  .homepage .section-3 .description .detail {
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.7);
  }

  .homepage .section-3 .description .detail .p{
    color: rgba(255, 255, 255, 0.7);
  }
  .homepage .section-3 .thumbnail .caption h3 {
    color: #fff;
  }
  .homepage .section-3 .thumbnail .caption p {
    color: rgba(255, 255, 255, 0.7);
  }
  .homepage .section-3 .thumbnail img {
    width: 80%;
  }
  .homepage .thumbnail a>img,.homepage  .thumbnail>img {
    margin-right: auto;
    margin-left: auto;
  }
  .homepage .carousel-inner>.item>a>img, .carousel-inner>.item>img,.homepage  .img-responsive, .thumbnail a>img, .thumbnail>img {
    display: block;
    max-width: 100%;
    height: auto;
  }



  /*区域四*/
  .homepage .section-4 .bottom-row {
    padding-top: 100px;
  }
  .homepage .section-4 {
    padding-top: 30px;
  }
  @media screen and (min-width: 1024px){
    .homepage .section-4 {
      background: url(../assets/img/section4/box_border.png) 52% 95px no-repeat;
      background-size: 460px auto;
    }
  }
  @media screen and (min-width: 1024px){
    .homepage .section-4 .content-box {
      background: url(../assets/img/section4/index_tans_bg.png) center 100px no-repeat;
      background-size: 285px auto;
    }
  }
  .homepage .section-4 .container_self {
    margin: 20px 0;
  }
  .homepage .section-4 h3 {
    float: left;
    font-size: 24px!important;
  }
  .homepage .section-4 .row {
    margin: 30px 0;
  }
  .homepage .section-4 .col-xs-12 {
    float: left;
  }
  .homepage .section-4 .bottom-row {
    padding-top: 100px;
  }
  .homepage .section-4 .container_self .card {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .homepage .section-4 .container_self .card .word {
    width: calc(100% - 60px);
  }
  .homepage .section-4 .container_self .right-pic h3 {
    margin: 0;
    float: right;
    margin-bottom: 30px;
  }
  .homepage .section-4 .container_self .right-pic p {
    clear: both;
    text-align: right;
    color: #666;
  }
  .homepage .section-4 .container_self .left-pic h3 {
    margin: 0;
    float: left;
    margin-bottom: 30px;
  }
  .homepage .section-4 .container_self .left-pic p {
    clear: both;
    text-align: left;
    color: #666;
  }
  .homepage .section-4 .container_self .card {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .homepage .section-4 .container_self .card .icon {
    width: 60px;
    height: 60px;
  }
  .homepage .section-4 .container_self .card .transcript {
    background: url(../assets/img/section4/index_transcript.png) no-repeat;
    background-size: contain;
  }
  .homepage .section-4 .container_self .card .dataopen {
    background: url(../assets/img/section4/index_dataopen.png) no-repeat;
    background-size: contain;
  }
  .homepage .section-4 .container_self .card .work {
    background: url(../assets/img/section4/index_work.png) no-repeat;
    background-size: contain;
  }
  .homepage .section-4 .container_self .card .stastic {
    background: url(../assets/img/section4/index_statistic.png) no-repeat;
    background-size: contain;
  }
  /*区域五*/
  .homepage .section-5 {
    text-align: center;
    background: url(../assets/img/section5/index_choose.png) center no-repeat;
    background-size: cover;
    color: #fff;
  }
  .homepage .section-5 .container_self {
    position: relative;
    top: 11%;
  }
  @media screen and (min-width: 1024px){
    .homepage .section-5 {
      height: 600px;
    }
  }
  .homepage .section-5 h3{
    color: black;
  }
  .homepage .section-5 .container_self .detail {
    margin-top: 20px;
  }

  /*区域6*/
  .homepage .section-6 {
    text-align: center;
    background-color: #1B1C20;
    color: #fff;
  }
  .homepage .section-6 p {
    color: #8B8B8B;
  }
  .homepage .section-6 .icon-group {
    margin: 30px 0 50px;
    display: flex;
    justify-content: center;
  }
  .homepage .section-6 .icon-group .icon-item {
    width: 40px;
    height: 40px;
    margin: 0 5px;
    /*background-color: #D8C1A2;*/
    border-radius: 4px;
    position: relative;
  }
  .homepage .section-6 .el-popover{
    padding: 10px!important;
  }
  .homepage .iconfont{
    font-size: 25px;
    line-height: 40px;
  }
  /*区域7*/
  .homepage .footer {
    background-color: white;
    color: black;
  }
  .homepage .footer p {
    margin: 10px 0;
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
