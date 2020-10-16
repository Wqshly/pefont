<template>
  <div  class="main-nav">
    <div class="content">

      <template>
        <div class="crumb" v-for="(crumb,i) in crumbs"  @click="crumbsClick(crumb.value)">
          {{crumb.title}}
          <div v-if="i!==2" style="display:inline-block;">&gt;  </div>
        </div>
      </template>
      <br>

      <el-button
        style="float:right;"
        size="middle"
        type="success"
        @click="handleNew()">新建一个{{this.crumbs[this.crumb_flag-1].temp}}</el-button>

      <template>
        <el-table
          :data="handleData()"
          style="width: 100%"
          @cell-click="handleClick">
          <el-table-column
            prop="title"
            label="名字">
            <template slot="header" >
              <label>
                <input
                  type="text"
                  v-model="search"
                  prefix-icon="el-icon-search"
                  style="width: 150px;"
                  placeholder="输入关键字搜索"
                />
              </label>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <el-pagination
        class="_self"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper, sizes"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>

import {api} from "@/api/ajax"
import {clone} from "@/api/clone.js"
export default {
  //活动中心的父级组件
  name: 'mana_page',
    data() {
        return {
            search: '',
            currentPage: 1,
            pageSize: 10,
            total:0,
            crumb_flag:1,
            tableData: [
                {
                    title:'学校1',
                    date: '2016-05-02',
                    name: '王小虎',
                    description: '上海市普陀区金沙江路 1518 弄',
                },
            ],

            data_school:[
                {
                    title:'学校1',
                },
            ],
            data_college:[
                {
                    title:'请先选择一个学校',
                },
            ],
            data_class:[
                {
                    title:'请先选择一个院系',
                },
            ],
            school:{
                id:1,
                schoolName:1,
                schoolAddress:1,
                phone:1,
                schoolZipCode:1,
                schoolIntroduction:1,
            },
            crumbs:[
                {
                    temp:'学校',
                    value:1,
                    title:'学校',
                },
                {
                    temp:'院系',
                    value:2,
                    title:'院系',
                },
                {
                    temp:'班级',
                    value:3,
                    title:'班级',
                },
            ],
            form:{
              school:'',
            },

        }
    },
    methods: {
        handleNew() {
            let url = "";
            let data = "";
            if(this.crumb_flag === 1){
                url = "/api/school/addSchool";

            }
        },
      /*表格的操作*/
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        /*切换表格数据*/
        shift_data(val){
            if(val === 1){
                this.tableData = clone.deepClone(this.data_school);

            }
            else if(val === 2){
                this.tableData = clone.deepClone(this.data_college);
            }
            else if(val === 3){
                this.tableData = clone.deepClone(this.data_class);
            }
            /*this.crumb_flag用来监视当前表格数据到底是什么*/
            this.crumb_flag = val;
        },
        crumbsClick(val){
            this.shift_data(val);
        },
        //处理显示数据
        handleData(){
            let temp_data = this.tableData.filter(data=>this.filter(data));
            this.total=temp_data.length;
            return temp_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
        },
        //表格点击事件
        handleClick(val) {
            if(this.crumb_flag !== 3){
                this.crumbs[this.crumb_flag - 1].title = val.title;
                this.remote_data(this.crumb_flag);
                this.shift_data(this.crumb_flag + 1);
            }
            else{
                console.log(val);
            }
        },
        //请求远端数据
        remote_data(val){
            api.post('/api/user/ceshi',null).then(response =>{
                console.log(response);
            });
        },
        //搜索筛选
        filter(val){
            return (!this.search || val.title.toLowerCase().includes(this.search.toLowerCase()));
        },
        //每页大小
        handleSizeChange(val) {
            this.pageSize=val;
            /*console.log(`每页 ${val} 条`);*/
        },

        //当前页数
        handleCurrentChange(val) {
            /*console.log(`当前页: ${val}`);*/
        },


    },
    mounted() {

    },
    created() {

    },
}
</script>

<style scoped>
  .main-nav .content{
    padding: 0;
    margin: 20px auto;
    overflow: hidden;

  }
  .main-nav .crumb{
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
    margin-right: 10px;
  }
  .main-nav  .crumb:hover {
    color: #409EFF !important;
  }
</style>
