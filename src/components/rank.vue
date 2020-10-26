<template>
  <el-tabs type="border-card" style="width: 300px">
    <el-tab-pane label="校内排行 ">
      <div class="student_score" style="width:300px;">
        <el-table
          :data="handleData1()"
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
            label="分数"
            width="75">
          </el-table-column>
        </el-table>

      </div>
    </el-tab-pane>
    <el-tab-pane label="学校排名">
      <div class="school_score" style="width:300px;">
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
            label="学校名"
            width="75">
          </el-table-column>
          <el-table-column
            prop="score"
            label="分数"
            width="75">
          </el-table-column>
        </el-table>

      </div>
    </el-tab-pane>
  </el-tabs>

</template>

<script>
    import {api} from "@/api/ajax"
    export default {
        data() {
            return {
                scores:[
                    {
                        name:'张一',
                        collegeId:'学院1',
                        score:10,
                    },
                    {
                        name:'张二',
                        collegeId:'学院2',
                        score:8,
                    },
                    {
                        name:'张三',
                        collegeId:'学院3',
                        score:7,
                    },
                    {
                        name:'张四',
                        collegeId:'学院45',
                        score:6,
                    },
                    {
                        name:'张五',
                        collegeId:'学院54',
                        score:5,
                    },
                    {
                        name:'张一',
                        collegeId:'学院14',
                        score:4,
                    },
                    {
                        name:'张二',
                        collegeId:'学院22',
                        score:3,
                    },
                    {
                        name:'张三',
                        collegeId:'学院34',
                        score:2,
                    },
                    {
                        name:'张四',
                        collegeId:'学院42',
                        score:1,
                    },
                    {
                        name:'张五',
                        collegeId:'学院54',
                        score:0,
                    },
                ],
                scores2:[
                    {
                        name:'张一',
                        score:10,
                    },
                    {
                        name:'张二',
                        score:8,
                    },
                    {
                        name:'张三',
                        score:7,
                    },
                    {
                        name:'张四',
                        score:6,
                    },
                    {
                        name:'张五',
                        score:5,
                    },
                    {
                        name:'张一',
                        score:4,
                    },
                    {
                        name:'张二',
                        score:3,
                    },
                    {
                        name:'张三',
                        score:2,
                    },
                    {
                        name:'张四',
                        score:1,
                    },
                    {
                        name:'张五',
                        score:0,
                    },
                ],
            }
        },
        methods: {
            requestScoreBySchoolId(){
                let url = '/api/semester/score/'+'1';
                api.get(url).then(res => {
                    if (res.code === 0) {
                        this.scores = res.data;
                    }
                    else{
                        this.$message.error(res.msg);
                    }
                })
            },
            handleData1(){
                return this.scores;
            },
            handleData2(){
                return this.scores2;
            },
        },
        mounted() {

        },
        created() {

        },
    }
</script>

<style scoped>

</style>
