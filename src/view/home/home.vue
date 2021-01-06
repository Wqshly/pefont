<template>
  <div class="container">
    <div class="left-plate">
      <div class="side-box">
        <el-card header="即将参赛"></el-card>
      </div>
    </div>
    <div class="main-plate">
      <div style="margin: 0 10px;">
        <div class="side-box">
          <el-card header="校内PE分排名(前10名)">
            <el-table :data="SchoolPEScoreRank" ref="SchoolPEScoreRank">
              <el-table-column label="姓名" width="100" prop="name"></el-table-column>
              <el-table-column label="所属学院" width="180" prop="collegeId"></el-table-column>
              <el-table-column label="PE分" min-width="100" prop="score"></el-table-column>
              <el-table-column type="index" width="100" label="排名"></el-table-column>
            </el-table>
          </el-card>
        </div>
        <div class="side-box">
          <el-card header="可报名比赛"></el-card>
        </div>
      </div>
    </div>
    <div class="right-plate">
      <div class="side-box">
        <el-card header="我的PE分">
          <div style="margin: 0 auto; text-align: center;">
            <el-progress type="circle" :percentage="25"></el-progress>
          </div>
          <div style="text-align: center; font-size: 24px;padding-top: 20px; padding-bottom: 20px;"><span style="font-style: italic;">{{myScore.score}}</span> 分</div>
          <div style="text-align: center; padding-bottom: 20px;">最近一周获得：{{myScoreInWeek}}分</div>
        </el-card>
      </div>
      <div class="side-box">
        <el-card header="PE分获取记录(最近一周内)">
          <el-table
            :data="PEScoreInWeek" ref="PEScoreInWeek">
<!--            <el-table-column label="分数" width="50" prop="score"></el-table-column>-->
            <el-table-column label="运动时长/(分钟)" width="130" prop="timeLen"></el-table-column>
            <el-table-column label="日期" width="120" prop="startTime" :formatter="dateFormatter"></el-table-column>
          </el-table>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import vRank from '../../components/rank'
import vScore from '../../components/myScore'

export default {
  components: {
    vRank,
    vScore
  },
  data () {
    return {
      myScore: [],
      myScoreInWeek: 0,
      PEScoreInWeek: [],
      SchoolPEScoreRank: []
    }
  },
  methods: {
    dateFormatter (row, column) {
      let datetime = row.startTime
      if (datetime) {
        datetime = new Date(datetime)
        let year = datetime.getFullYear()
        let month = datetime.getMonth() + 1
        let day = datetime.getDate()
        return year + '年' + month + '月' + day + '日'
      }
    },
    getMyScore () {
      this.$api.get('/api/semester/singleScore')
        .then(res => {
          this.myScore = res.data.score
        })
    },
    getScore (url, formName) {
      this.$api.get(url)
        .then(res => {
          this[formName] = res.data
          if (formName === 'PEScoreInWeek') {
            this[formName].forEach(item => {
              this.myScoreInWeek += item.score
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getMyScore()
    this.getScore('/api/semester/singleScore', 'myScore') // 一周内的运动记录
    this.getScore('/api/SignIn/searchActivityOneWeek', 'PEScoreInWeek') // 一周内的运动记录
    this.getScore('/api/semester/scoreBySchool', 'SchoolPEScoreRank') // 本校PE分排名
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .left-plate {
    float: right;
    width: 270px;
  }

  .main-plate {
    float: right;
    width: 550px;
  }

  .right-plate {
    float: right;
    width: 320px;
  }

  .side-box {
    border-radius: 3px;
    border: 1px #c7e5eb solid;
    margin-bottom: 10px;
  }

  .home-left-container {
    border:3px solid #ebebeb;
    width: 300px;
    height: 500px;
  }
  .home-center-container {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
  .center_row {
    width: 100%;
    margin: 10px 0;
  }
  .home-right-container {
    width: 300px;
    margin-right: 20px;
  }

  @media screen {

  }
</style>
