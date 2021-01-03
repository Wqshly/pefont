<template>
  <div class="competition-detail">
    <div class="competition-header">
      <div class="header_item">
        <h3>{{competition.title}}</h3>
        <el-button type="info" class="header_button" @click="sign = true">报名中</el-button>
      </div>
      <div class="header_item">
        <img :src="competition.img"/>
      </div>
      <div @click="$emit('back')" class="close">&times;</div>
    </div>

    <el-divider content-position="right">

    </el-divider>
    <el-form label-width="100px">
      <el-form-item style="margin-bottom: 0!important;" label="报名时间：">
        <p>{{competition.signTime}}</p>
      </el-form-item>
      <el-form-item style="margin-bottom: 0!important;" label="比赛时间：">
        <p>{{competition.competitionTime}}</p>
      </el-form-item>
      <el-form-item style="margin-bottom: 0!important;" label="地址：">
        <p>{{competition.address}}</p>
      </el-form-item>
      <el-form-item style="margin-bottom: 0!important;" label="比赛项目：">
        <el-tag class="competition-project"
                v-for="(project,index) in competition.projects"
                :key="index"
                type="info">
          {{project}}
        </el-tag>
      </el-form-item>
    </el-form>
    <competition_sign v-show="sign"/>
  </div>
</template>

<script>
  import competition_sign from "./competition_sign";

  export default {
    components: {
      competition_sign
    },
    props: {
      competition: {
        default: {
          id: -1,
          title: "山东科技大学第十三届运动会",
          img: "http://www.xiaoyuanpe.com/1.png",
          status: "已完赛",
          signTime: "2020-12-20     2020-12-21",
          competitionTime: "2020-12-27     2020-12-29",
          address: "山东科技大学风雨操场",
          projects: ["足球", "羽毛球", "长跑"],
        }
      }

    },
    data() {
      return {
        sign: false
      }
    },
    methods: {},
    mounted() {

    },
    created() {

    },
  }
</script>

<style scoped>
  .competition-detail {
    width: fit-content;
    min-width: 300px;
    height: fit-content;
    background-color: white;
    border-radius: 20px;
    margin: 40px;
  }

  .competition-header {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .competition-header .header_item {
    width: 50%;
    margin-right: 30px;
    padding: 20px;
  }

  .competition-header .header_item img {
    width: 100%;
  }

  .competition-header .header_button {
    margin-top: 50px;
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

  .competition-project {
    margin-right: 10px;
    cursor: pointer;
  }

  .competition-project:hover {
    color: black;
  }
</style>
