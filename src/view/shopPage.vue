<template>
  <div class="page-area">
    <el-tabs :tab-position="tabPosition" style="height: 200px;">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'normal_page',
  data () {
    return {
        tabPosition: 'top'
    }
  },
  methods: {
      handleOpen(key, keyPath) {
          console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
          console.log(key, keyPath);
      }
  }
}
</script>

<style scoped>
  .page-area{
    background-color: white;
    width: 100%;
    height: 2000px;
    margin:81px auto 0 auto;
  }

  @media screen and (min-width: 1140px){
    .page-area {
      width: 1140px;
    }
  }


</style>
