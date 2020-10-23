<template>
  <el-tabs type="border-card" style="width: 300px">
    <el-tab-pane label="校内排行 ">
      <div class="student_rank" style="width:300px;">
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
            prop="collage"
            label="学院"
            width="75">
          </el-table-column>
          <el-table-column
            prop="rank"
            label="分数"
            width="75">
          </el-table-column>
        </el-table>

      </div>
    </el-tab-pane>
    <el-tab-pane label="学校排名">
      <div class="school_rank" style="width:300px;">
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
            prop="rank"
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
        //活动中心的父级组件
        name: 'home_page',
        data() {
            return {
                ranks:[
                    {
                        name:'张一',
                        collage:'学院1',
                        rank:10,
                    },
                    {
                        name:'张二',
                        collage:'学院2',
                        rank:8,
                    },
                    {
                        name:'张三',
                        collage:'学院3',
                        rank:7,
                    },
                    {
                        name:'张四',
                        collage:'学院45',
                        rank:6,
                    },
                    {
                        name:'张五',
                        collage:'学院54',
                        rank:5,
                    },
                    {
                        name:'张一',
                        collage:'学院14',
                        rank:4,
                    },
                    {
                        name:'张二',
                        collage:'学院22',
                        rank:3,
                    },
                    {
                        name:'张三',
                        collage:'学院34',
                        rank:2,
                    },
                    {
                        name:'张四',
                        collage:'学院42',
                        rank:1,
                    },
                    {
                        name:'张五',
                        collage:'学院54',
                        rank:0,
                    },
                ],
                ranks2:[
                    {
                        name:'张一',
                        rank:10,
                    },
                    {
                        name:'张二',
                        rank:8,
                    },
                    {
                        name:'张三',
                        rank:7,
                    },
                    {
                        name:'张四',
                        rank:6,
                    },
                    {
                        name:'张五',
                        rank:5,
                    },
                    {
                        name:'张一',
                        rank:4,
                    },
                    {
                        name:'张二',
                        rank:3,
                    },
                    {
                        name:'张三',
                        rank:2,
                    },
                    {
                        name:'张四',
                        rank:1,
                    },
                    {
                        name:'张五',
                        rank:0,
                    },
                ],
            }
        },
        methods: {
            handleData1(){
                return this.ranks;
            },
            handleData2(){
                return this.ranks2;
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
