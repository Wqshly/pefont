<template>
  <div class="product1">
    <div class="index-banner">

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

  .product1 .index-banner {
    height: 34.5vw;
    background: url(../assets/img/product1/banner_3.png) center no-repeat;
    background-size: cover;
    text-align: center;
    color: #fff;
    position: relative;
  }
  .product1 .index-banner div {
    width: 23.5vw;
    position: absolute;
    right: 17vw;
    top: 30%;
  }


  /*区域7*/
  .product1 .func_footer {
    background-color: white;
    color: black;
  }
  .product1 .func_footer p {
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
