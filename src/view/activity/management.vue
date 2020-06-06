<template>
  <div class="activity-management">
    <div class="block" v-show="!detail">
      <div>
        <el-radio-group v-model="filter_label_outlay">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="参与者"></el-radio-button>
          <el-radio-button label="签到员"></el-radio-button>
          <el-radio-button label="发起人"></el-radio-button>
        </el-radio-group>
      </div>

      <div>
        <el-radio-group v-model="filter_status_outlay" style="margin-top: 10px">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="待审核"></el-radio-button>
          <el-radio-button label="报名阶段"></el-radio-button>
          <el-radio-button label="待完结"></el-radio-button>
          <el-radio-button label="已完结"></el-radio-button>
        </el-radio-group>
      </div>

      <template>
        <el-table
          :data="handleData()"
          style="width: 100%"
          @cell-click="handleClick"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="description"
            label="通告">
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
            <template slot-scope="scope">
              <span style="color: #e95f13;">{{ scope.row.title }}<br/></span>
              <span style="margin-left: 10px">{{ filter_description(scope.row.description)}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="label"
            label="权限"
            width="100">
            <template slot-scope="scope">
              <el-tag
                :type="bound(scope.row.label)"
                disable-transitions>{{scope.row.label}}</el-tag>
            </template>
            <template slot="header">
              <el-popover trigger="hover" placement="top">
                <el-tag
                  :type="bound('参与者')"
                  disable-transitions>参与者</el-tag>普通成员<br><br>
                <el-tag
                  :type="bound('签到员')"
                  disable-transitions>签到员</el-tag>有组织签到权限<br><br>
                <el-tag
                  :type="bound('发起人')"
                  disable-transitions>发起人</el-tag>有编辑和组织签到权限
                <div slot="reference" class="name-wrapper">
                  权限
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column
            prop="status"
            label="状态"
            width="80">
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
        <template slot="content"><h1 >{{detail_item.title}}</h1>
          <el-button v-if="activity_permission>0&&detail_item.status!=='待审核'" style="float: right;margin:0 5px;display: inline-block" type="primary" @click="handle_checkin()" round>组织签到</el-button>
          <el-button v-if="activity_permission>1" style="float: right;display: inline-block" type="warning" @click="handle_edit()" round>编辑活动</el-button>
        </template>

      </el-page-header>
      <detail_management :detail_item="detail_item"></detail_management>
    </el-card>
  </div>
</template>

<script>
    import detail_management from '@/view/activity/detail_management.vue'
    export default {
        components:{
          detail_management,
        },
        name: 'activity-management',
        data () {
            return {
                /**发起人权限：2   可编辑活动组织签到
                 * 签到员权限:1   可组织签到
                 * 参与者权限:0
                 */
                activity_permission:1,
                filter_label_outlay:'全部',
                filter_status_outlay:'全部',
                detail:false,
                search: '',
                currentPage: 1,
                pageSize: 10,
                total:0,
                tableData: [
                    {
                    title:'',
                    date: '',
                    name: '',
                    status: '',
                    label:'',
                    description: '',
                  },
                ],
                tableData_copy: [{
                    title:'活动1',
                    date: '2016-05-02',
                    name: '王小虎',
                    status: '报名阶段',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
                }, {
                    title:'活动2',
                    date: '2016-05-04',
                    name: '王小虎',
                    status: '待完结',
                    label:'发起人',
                    description: '上海市普陀区金沙江路 1518 弄'
                }, {
                    title:'活动3',
                    date: '2016-05-01',
                    name: '王小虎',
                    status: '已完结',
                    label:'签到员',
                    description: '上海市普陀区金沙江路 1518 弄',
                }, {
                    title:'活动4',
                    date: '2016-05-03',
                    name: '王小虎',
                    status: '待完结',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄'
                }, {
                    title:'活动5',
                    date: '2016-05-03',
                    name: '王小虎',
                    status: '已完结',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄'
                }, {
                    title:'活动6',
                    date: '2016-05-03',
                    name: '王小虎',
                    status: '已完结',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄'
                }, {
                    title:'活动7',
                    date: '2016-05-03',
                    name: '王小虎',
                    status: '已完结',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄'
                }, {
                    title:'活动8',
                    date: '2016-05-03',
                    name: '王小虎',
                    status: '已完结',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄'
                }, {
                    title:'活动9',
                    date: '2016-05-03',
                    name: '王小虎',
                    status: '已完结',
                    label:'参与者',
                    description: '上海市普陀区金沙江路 1518 弄'
                },{
                    title:'活动10',
                    date: '2016-05-04',
                    name: '王小虎',
                    status: '待完结',
                    label:'发起人',
                    description: '上海市普陀区金沙江路 1518 弄'
                },{
                    title:'活动11',
                    date: '2016-05-04',
                    name: '王小虎',
                    status: '待审核',
                    label:'发起人',
                    description: '上海市普陀区金沙江路 1518 弄'
                },],
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
            //渲染TAG
            bound(label){
                if(label==='参与者')
                    return 'info';
                if(label==='签到员')
                    return '';
                if(label==='发起人')
                    return 'danger';
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

            //渲染单行颜色
            tableRowClassName({row, rowIndex}) {
                if(row.status==='已完结')
                  return 'success-row';
                if(row.status==='待完结')
                  return  'warning-row';
                if(row.status==='待审核')
                    return 'info-row';
                  return ''
            },

            handleData(){
                let temp_data = this.tableData.filter(data=>this.filter(data));
                this.total=temp_data.length;
                return temp_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
            },
            //搜索筛选&&标签筛选&&状态筛选
            filter(val){
                return (!this.search || val.title.toLowerCase().includes(this.search.toLowerCase())) &&( val.label === this.filter_label_outlay ||this.filter_label_outlay==='全部')&&(val.status === this.filter_status_outlay ||this.filter_status_outlay==='全部');
            },

            //表格点击事件
            handleClick(val) {
                if(val.label==='参与者')
                    this.activity_permission=0;
                if(val.label==='签到员')
                    this.activity_permission=1;
                if(val.label==='发起人')
                    this.activity_permission=2;

                console.log('管理页点击:',val);


                this.detail=true;

                //以下传送详细活动信息
                this.detail_item.title=val.title;
                this.detail_item.date=val.date;
                this.detail_item.name=val.name;
                this.detail_item.status=val.status;
                this.detail_item.label=val.label;
                this.detail_item.description=val.description;
            },

            //组织签到按钮
            handle_checkin() {
                this.$emit('transferCheckTitle',this.detail_item.title);
            },

            //编辑活动按钮
            handle_edit() {
                this.$emit('transferEditTitle',this.detail_item.title);
                /*console.log(`每页 ${val} 条`);*/
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

            //返回按钮
            goBack() {
                this.detail=false;
            }
        },
        mounted() {
            this.tableData=this.tableData_copy;
            this.total=this.tableData.length;
        }
    }
</script>

<style>
  .activity-management{
    width: 100%;
  }
  .activity-management .notice_detail{
    background-color: white;
    width:100%;
    height: 100%;
    border:3px solid #ebebeb;
    padding: 20px;
  }

  @media screen and (min-width: 1140px){
    .activity-management .notice_detail {
      width: 1090px;
      margin: 0 auto;
    }
    .activity-management  ._self{
      width: 1127px!important;
      margin: 0 auto;
    }
  }
  .activity-management  ._self{
    position:fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
  }


  .activity-management h1{
    font-weight: 300;
  }
  .activity-management .el-page-header__content {
    width: 100% !important;
  }

  .activity-management .warning-row {
    background: oldlace!important;
  }
  .activity-management .success-row{
    background-color:  #f0f9eb!important;
  }
  .activity-management .info-row{
    background-color:  rgb(192, 196, 204)!important;
  }



</style>
