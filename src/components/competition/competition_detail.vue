<template>
  <div class="competition-detail">
    <div class="competition-header">
      <div class="header_item">
        <h3>山东科技大学第十三届运动会</h3>
      </div>
      <div class="header_item">
        <img src="http://www.xiaoyuanpe.com/1.png"/>
      </div>
      <el-tag type="info" class="header_button">已完赛</el-tag>
      <div @click="$emit('back')" class="close">&times;</div>
    </div>

    <el-divider content-position="right">

    </el-divider>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item style="margin-bottom: 0!important;" label="报名时间：">
        <p>{{item}}-{{item}}</p>
      </el-form-item>
      <el-form-item style="margin-bottom: 0!important;" label="比赛时间：">
        <p>{{item}}-{{item}}</p>
      </el-form-item>
      <el-form-item style="margin-bottom: 0!important;" label="地址：">
        <p>{{item}}</p>
      </el-form-item>
      <el-form-item style="margin-bottom: 0!important;" label="比赛项目：">
        <el-tag type="info">足球</el-tag>
        <el-tag type="info">羽毛球</el-tag>
        <el-tag type="info">长跑</el-tag>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: {
      headers: {
        default: null
      },
      center: {
        default: false
      },
    },
    data() {
      return {
        options: ['全部比赛', '报名中', '已结束'],
        competitionClass: '全部比赛',
        tableData: [],
        item: 122132131
      }
    },
    methods: {
      handleClick(item) {
        alert(item)
      }
    },
    mounted() {
      for (let i = 0; i < 20; ++i) {
        this.tableData.push("2020-xx-xx")
      }
    },
    created() {

    },
  }
</script>

<style scoped>
  .competition-detail {
    width: fit-content;
    height: fit-content;
    background-color: white;
    border-radius: 20px;
    margin: 40px;
    padding-bottom: 20px;
  }

  .competition-header {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .competition-header .header_item{
    width: 50%;
    margin-right: 30px;
    padding: 20px;
  }
  .competition-header .header_item img{
    width: 100%;
  }
  .competition-header .header_button {
    position: absolute;
    bottom: 15px;
    left: 15px;
  }

  .competition-header .close {
    position: absolute;
    font-size: 24px;
    cursor: pointer;
    transition: 0.2s all;
    right: 10px;
    padding-left: 15px;
  }

  .competition-header .close:hover {
    color: red;
  }
</style>
