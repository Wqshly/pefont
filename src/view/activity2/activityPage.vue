<template>
  <div class="page-area">
    <el-tabs v-model="activeName" :tab-position="tabPosition" class="tab" >
      <el-tab-pane label="活动首页" name="活动首页"> <activity_home></activity_home> </el-tab-pane>
      <el-tab-pane label="校内通知" name="校内通知"> <activity_notice></activity_notice> </el-tab-pane>
      <el-tab-pane label="发起活动" name="发起活动"> <activity_promotional></activity_promotional> </el-tab-pane>
      <el-tab-pane label="活动管理" name="活动管理"> <activity_management @transferCheckTitle="getCheckTitle" @transferCheckOutTitle="getCheckOutTitle" @transferEditTitle="getEditTitle"></activity_management> </el-tab-pane>
      <el-tab-pane label="组织签到" name="组织签到"> <activity_checkin :title="check_title"></activity_checkin> </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import activity_home from '@/view/activity/home.vue'
import activity_notice from '@/view/activity/notice.vue'
import activity_promotional from '@/view/activity/promotional.vue'
import activity_management from '@/view/activity/management.vue'
import activity_checkin from '@/view/activity/check_in.vue'

export default {
  //活动中心的父级组件
  name: 'normal_page',
  data () {
    return {
        activeName: '活动首页',
        tabPosition: 'top',
        check_title:'',
        checkOut_title:'',
        edit_title:'',
    }
  },
  components: {
      //标签页子组件
      activity_home,
      activity_notice,
      activity_promotional,
      activity_management,
      activity_checkin
  },
  methods: {
      //接收子组件传值
      getCheckTitle(val){
          console.log('父组件接受到值签到活动:'+val);
          this.check_title=val;
          this.activeName='组织签到';
      },
      //接收子组件传值
      getCheckOutTitle(val){
          console.log('父组件接受到值审核活动:'+val);
          this.checkOut_title=val;
          this.activeName='组织签到';
      },
      //接收子组件传值
      getEditTitle(val){
          console.log('父组件接受到值编辑活动:'+val);
          this.edit_title=val;
      },

  }
}
</script>

<style scoped>
  .page-area{
    background-color: white;
    width: 100%;
    margin:0 auto;
  }

  @media screen and (min-width: 1140px){
    .page-area {
      width: 1140px;
    }
  }

.page-area .tab{
  width:100%;
  top:80px;
}
</style>
