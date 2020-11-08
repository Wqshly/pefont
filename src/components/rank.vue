<template>
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
    <el-tab-pane label="学校排名">
      <div class="school_score" style="width:300px;">
        <el-table
          :data="handleData3()"
          max-height="300"
        >
          <el-table-column
            type="index"
            width="75">
          </el-table-column>
          <el-table-column
            prop="name"
            label="学校名"
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

</template>

<script>
    export default {
        data() {
            return {
                scores: [
                    [], [], []
                ],
            }
        },
        methods: {
            requestScore(url, index) {
                this.$api.get(url).then(res => {
                    if (res.code === 0) {
                        this.scores[index] = res.data;
                        console.log(res.data)
                    } else {
                        this.$message.error(res.msg);
                    }
                })
            },
            handleData1() {
                return this.scores[0];
            },
            handleData2() {
                return this.scores[1];
            },
            handleData3() {
                return this.scores[2];
            },
        },
        mounted() {

        },
        created() {
            this.requestScore('/api/semester/scoreByClass', 0);
            this.requestScore('/api/semester/scoreBySchool', 1);
        },
    }
</script>

<style scoped>

</style>
