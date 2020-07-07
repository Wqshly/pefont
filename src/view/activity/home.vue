<template>
  <div class="activity-home">
    <div class="block" v-show="!detail">
      <template>
        <template>
          <el-input
            type="text"
            v-model="search"
            prefix-icon="el-icon-search"
            style="width: 150px;margin-left:10px;"
            placeholder="输入关键字搜索"
          />
        </template>
        <el-table
          :show-header="false"
          :data="handleData()"
          style="width: 100%"
          @cell-click="handleClick">
          <el-table-column
            prop="title">

            <template slot-scope="scope">
              <el-card shadow="hover">
                <el-image
                  style="width: 50%;"
                  :src="url"
                  :fit="'scale-down'">

                </el-image>
                <div style=" width: 47%;float: right">
                  <span style="color: #e95f13;display: block">{{ scope.row.title }}<br/></span>
                  <span style="color: #e95f13;float: right">{{ scope.row.status }}<br/></span>
                  <span style="display: block;">{{ filter_description(scope.row.name)}}&nbsp;&nbsp;|&nbsp;&nbsp;{{ filter_description(scope.row.date)}}</span>
                  <span style="margin: 10px 0 0 10px;display: block">{{ filter_description(scope.row.description)}}</span>
                </div>
              </el-card>
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

    <el-card shadow="hover" class="notice_detail" v-show="detail">
      <el-page-header @back="goBack" style="width: 100%;">
        <template slot="content"><h1>{{detail_item.title}}</h1>
          <el-button :disabled="activity_status" style="float: right;display: inline-block" type="primary" @click="handleSign()" round>报名参加</el-button>
        </template>

      </el-page-header>
      <detail_activity :detail_item="detail_item"></detail_activity>
    </el-card>
  </div>
</template>

<script>
  import detail_activity from '@/view/activity/detail_activity.vue'
  export default {
    components:{
        detail_activity,
    },
    name: 'activity-home',
    data () {
      return {
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          search: '',
          detail:false,
          currentPage: 1,
          pageSize: 10,
          total:0,
          activity_status:false,
          tableData: [{
              title:'',
              date: '',
              name: '',
              status: '',
              description: '',
          }, ],
          tableData_copy: [{
              title:'活动1',
              date: '2016-05-02',
              name: '王小虎',
              status: '报名阶段',
              description: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
          }, {
              title:'活动2',
              date: '2016-05-04',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }, {
              title:'活动3',
              date: '2016-05-01',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄',
          }, {
              title:'活动4',
              date: '2016-05-03',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }, {
              title:'活动5',
              date: '2016-05-03',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }, {
              title:'活动6',
              date: '2016-05-03',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }, {
              title:'活动7',
              date: '2016-05-03',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }, {
              title:'活动8',
              date: '2016-05-03',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }, {
              title:'活动9',
              date: '2016-05-03',
              name: '王小虎',
              status: '已完结',
              description: '上海市普陀区金沙江路 1518 弄'
          }],
          detail_item:{
              title:'跆拳道体验活动',
              date: '2019-10-17 08:30',
              name: '体育学院',
              status:'报名阶段',
              description: '本活动意在百团纳新​时，设立多种体验游戏，帮助没有接触过跆拳道的同学，认识跆拳道，加深理解，同时促进跆拳道的传播，帮助大学生学习一项体育技能，丰富大学生活，锻炼身体。',
              checker: {
              region:'体育学院',
              name:'Bob'
              },
              class:'文化艺术与身心发展',
              position:'A餐水房旁边',
              fee:'免费',
              fee_description:'免费活动',
              signOut:true,
              signUp_time_start:'2019-10-11 08:00',
              signUp_time_end:'2019-10-19 12:00',
              activity_time_start:'2019-10-19 08:30',
              activity_time_end:'2019-10-19 16:47',
              numberOfPeople:'无限制',
              college_checkAll: true,
              college:['学院1','学院2','学院3','学院4','学院5','学院6','学院7','学院8','学院9','学院10'],
              activity_grade_checkAll: true,
              activity_grade:['2015','2016','2017','2018','2019','2020','2021'],
              contact_name:'崔老师 ',
              contact_method:'18300255591',
              sign_method:'报名制',
              delivery: false,
              imageUrl:'',

              now_people:'50'
          },
      }
    },

    methods: {
        //列表点击事件
        handleClick(val) {
            if(val.status==='报名阶段')
                this.activity_status=false;
            console.log('活动主页点击:',val);
            this.detail=true;
            //this.detail_item=val;

        },
        //处理表格数据
        handleData(){
            let temp_data = this.tableData.filter(data=>this.filter(data));
            this.total=temp_data.length;
            return temp_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
        },
        //搜索筛选
        filter(val){
            return (!this.search || val.title.toLowerCase().includes(this.search.toLowerCase()));
        },

        //过长的内容转换为省略号
        filter_description(val){
            if(val.length>30){
                return val.slice(0,30)+'...';
            }
            else{
                return val;
            }
        },

        //每页条数
        handleSizeChange(val) {
            this.pageSize=val;
            /*console.log(`每页 ${val} 条`);*/
        },

        //当前页数
        handleCurrentChange(val) {
            /*console.log(`当前页: ${val}`);*/
        },

        //报名按钮
        handleSign(){
            this.$message.success('恭喜你，报名成功');
        },

        //返回按钮
        goBack() {
            this.detail=false;
            this.activity_status=true;
        },
    },
    mounted() {

        this.tableData=this.tableData_copy;
        this.total=this.tableData.length;
    }
  }
</script>

<style >

  .activity-home{
    width: 100%;
  }
  .activity-home .block{
    background-color: white;
    width:100%;
    height: 100%;
    border:3px solid #ebebeb;
    padding-top: 20px;
    border-radius: 14px;
  }
  .activity-home .notice_detail{
    background-color: white;
    width:100%;
    height: 100%;
    border:3px solid #ebebeb;
    padding: 20px;
  }

  @media screen and (min-width: 1140px){
    .activity-home .notice_detail {
      width: 1090px;
      margin: 0 auto;
    }
    .activity-home  ._self{
      width: 1127px!important;
      margin: 0 auto;
    }
  }
  .activity-home  ._self{
    position:fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
  }

  .activity-home h1{
    font-weight: 300;
  }
  .activity-home .el-page-header__content {
    width: 100% !important;
  }

  .activity-home .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: white!important;
  }
  .activity-home .el-table td, .el-table th.is-leaf {
     border-bottom: 0 solid #EBEEF5!important;
  }
  .activity-home .el-card, .el-message {
    border-radius: 14px;
    overflow: hidden;
  }

</style>
