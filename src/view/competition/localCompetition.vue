<template>
  <div class="main-nav">
    <div v-show="!detail">
      <div class="localCompetition-header">
        <h3>专业赛事</h3>
        <el-select v-model="competitionClass" placeholder="请选择" class="select">
          <el-option v-for="(item, index) in options"
                     :key="index"
                     :label="item"
                     :value="item">
          </el-option>
        </el-select>
      </div>
      <div class="competition-content">
        <div v-for="item in tableData"
             class="competition-card"
             @click="handleClick(item)">
          <h3>{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}{{item}}</h3>
          <el-divider content-position="right">
            <el-tag type="info">已完赛</el-tag>
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
          </el-form>
        </div>
      </div>
    </div>
    <n-detail @back="detail = false" v-show="detail"/>
  </div>
</template>

<script>
  import detail from "../../components/competition/competition_detail";

  export default {
    components: {
      nDetail: detail
    },
    data() {
      return {
        options: ['全部比赛', '报名中', '已结束'],
        competitionClass: '全部比赛',
        tableData: [],
        detail: false,
      }
    },
    methods: {
      handleClick(item) {
        this.detail = true;
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
  .main-nav {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .localCompetition-header {
    width: 100%;
    height: 60px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    border-bottom: 1px solid #DCDFE6;
    align-items: center;
  }

  .competition-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .competition-card {
    background-color: white;
    width: 25%;
    min-width: 300px;
    margin: 15px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    cursor: pointer;
    transition: 0.5s all;
  }

  .competition-card:hover {
    margin-top: 0;
    margin-bottom: 30px;
  }

  .competition-card h3 {
    white-space: pre-wrap;
    word-break: break-all;
    color: #009dff;
    font-weight: 400;
    font-size: 18px;
  }

  .competition-card p {
    white-space: pre-wrap;
    word-break: break-all;
    padding-bottom: 5px;
  }

  .competition-card h3 {
    white-space: pre-wrap;
    word-break: break-all;
    color: #009dff;
    font-weight: 400;
    font-size: 18px;
  }
</style>
