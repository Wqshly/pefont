<template>
  <div>
    <el-tabs type="border-card" style="width: 300px">
    <el-tab-pane label="班内排行 ">
      <div class="student_score" style="width:300px;">
        <el-table
          :data="handleData1()"
          max-height="300"> >
          <el-table-column
            type="index"
            width="75">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="75">
          </el-table-column>
          <el-table-column
            prop="collegeId"
            label="学院"
            width="75">
          </el-table-column>
          <el-table-column
            prop="score"
            label="PE分"
            width="75">
          </el-table-column>
        </el-table>

      </div>
    </el-tab-pane>
    <el-tab-pane label="校内排行 ">
      <div class="student_score" style="width:300px;">
        <el-table
          :data="handleData2()"
          max-height="300"
        >
          <el-table-column
            type="index"
            width="75">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="75">
          </el-table-column>
          <el-table-column
            prop="collegeId"
            label="学院"
            width="75">
          </el-table-column>
          <el-table-column
            prop="score"
            label="PE分"
            width="75">
          </el-table-column>
        </el-table>

      </div>
    </el-tab-pane>
  </el-tabs>
    <div id="my-score"  >
      <el-tabs type="border-card" style="width: 300px">
        <el-tab-pane :label="'你的分数'+myName+':'+myScore+'分'">
          <div class="student_score" style="width:300px;">
            <el-table
              :data="handleData3()"
              max-height="300"> >
              <el-table-column
                prop="startTime"
                label="日期"
                width="100"
                class="cell"
                :formatter="mappingStartTime">
              </el-table-column>
              <el-table-column
                prop="score"
                label="分数"
                width="50">
              </el-table-column>
              <el-table-column
                prop="timeLen"
                label="运动时长/(分钟)"
                width="150">
              </el-table-column>
            </el-table>

          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                myName:null,
                myScore:0,
                score1: [

                ],
                score2: [

                ],
                sportRecord: [

                ],
            }
        },
        methods: {
            mappingStartTime(row,column){
                return row.startTime.split(".")[0].replace('T','\n');
            },
            requestScore(url, index) {
                this.$api.get(url).then(res => {
                    if (res.code === 0) {
                        switch (index) {
                            case 0:
                                this.myScore = res.data.score;
                                break;
                            case 1:
                                this.score1 = res.data;
                                break;
                            case 2:
                                this.score2 = res.data;
                                break;
                            case 3:
                                this.sportRecord = res.data;
                                break;
                        }
                    } else {
                        this.$message.error(res.msg);
                    }
                })
            },
            handleData1() {
                return this.score1;
            },
            handleData2() {
                return this.score2;
            },
            handleData3() {
                return this.sportRecord;
            },
        },
        mounted() {

        },
        created() {
            this.myName = this.$store.state.user.username;
            this.requestScore('/api/semester/singleScore', 0);
            this.requestScore('/api/semester/scoreByClass', 1);
            this.requestScore('/api/semester/scoreBySchool', 2);
            this.requestScore('/api/SignIn/searchActivityOneWeek', 3);
        },
    }
</script>

<style scoped>
  #my-score{
    font-weight: 300;
    font-size: 15px;
    padding: 15px 0;
  }

</style>
