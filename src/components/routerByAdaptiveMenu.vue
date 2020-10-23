<template>
  <div>
    <div class="left_options">
      <div class="left_option" v-for="option in options"  @click="jump(option)" :class="{'active':isActive === option.link || isActive === option.secondLink}" >

          {{option.name}}
        <el-badge :value="message_count" class="item" v-if="option.link==='/account/message'">
        </el-badge>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //该组件只适用于最下级路由
  props:{
      message_count:null,
      options:null,
  },
  data () {
    return {
        isActive:'',
    }
  },
  methods:{
      jump(val){
          if(val.link!==this.$route.path){
              this.$router.push(val.link);
              window.scrollTo(0, 0);
          }
      },

  },
  mounted() {
      this.isActive = this.$route.path;
  },
  created() {

  },
  watch:{
      $route(to,from){
          this.isActive = to.path.split('?')[0];
      }
  },
}
</script>

<style scoped>
  .iconfont{
    font-size: 30px;
    vertical-align: middle;
  }
  .left_options{
    background-color: white;
    overflow: hidden;
    width: 140px;
    padding:0 10px ;
    font-weight: 400;
    float: left;
  }
  .left_option{
    padding-left: 10px;
    line-height: 37px;
    margin: 4px 0;
    font-size: 14px;
    border-radius: 6px;
    transition: background-color 0.3s;
    background-color: white!important;
    cursor: pointer;
  }
  .left_option:hover{
    background-color: #409EFF!important;
    color: white;
  }
  .active{
    background-color: #409EFF!important;
    color: white;
  }
  @media (max-width: 760px) {
    .left_options{
      width: 100% !important;
      margin: 0;
    }

    .left_option{
      float: left;
      margin: 0 2px;
      padding-right: 15px;
    }
    .account_main{
      width: 100% !important;
    }
    .iconfont{
      display: none;
    }
  }

</style>
