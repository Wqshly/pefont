<template>
  <div class="checkin_management1">
    <h1>{{check_title}}</h1>
    <div class="checkin_management1_content">

      <div style="display: inline-block;float:left;">
        <el-radio-group v-model="filter_status">
          <el-radio-button label="全部"></el-radio-button>
          <el-radio-button label="未签到"></el-radio-button>
          <el-radio-button label="已签到"></el-radio-button>
          <el-radio-button label="已签退"></el-radio-button>
        </el-radio-group>
      </div>

      <div style="display: inline-block;float:right;margin-right: 50px">
        <a href="javascript:" class="upload"  v-show="title">导入成员
          <input id= "file" type="file"  class="change"  @change="insert(this)" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
        </a>
        <el-button type="text" @click="export1()">数据导出</el-button>
        <el-button type="text" @click="groupSignIn()" :disabled="valid">批量签到</el-button>
        <el-button type="text" @click="groupSignOut()" :disabled="valid">批量签退</el-button>
      </div>

      <div style="width: 150px;margin: 25px 0;display: block; ">
          <el-input
            type="text"
            v-model="search"
            prefix-icon="el-icon-search"
            placeholder="输入关键字搜索"
          >
          </el-input>
      </div>

      <template>
        <el-table
          @cell-click="handleClick"
          @selection-change="handleSelectionChange"
          :data="handleData()"
          border
          :row-class-name="tableRowClassName"
          style="width: 100%">

          <el-table-column
            type="selection"
            fixed="left"
            width="55">
          </el-table-column>
          <el-table-column
            prop="name"
            fixed="left"
            label="姓名"
            width="80">
          </el-table-column>

          <el-table-column
            prop="date"
            label="UID"
            width="150">
          </el-table-column>

          <el-table-column
            prop="address"
            label="学校"
            width="300">
          </el-table-column>

          <el-table-column
            prop="zip"
            label="电话"
            width="120">
          </el-table-column>

          <el-table-column
            prop="status"
            label="状态"
            width="120">
            <template slot="header">
              <el-popover trigger="hover" placement="top">
                状态变化：未签到---><span style="background-color: oldlace!important;"> 已签到 </span>---><span style="background-color: #f0f9eb!important;"> 已签退 </span>
                <div slot="reference" class="name-wrapper">
                  状态
                </div>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column
            fixed="right"
            label="操作"
            >
            <template slot-scope="scope">
              <el-button :disabled="!(scope.row.status==='未签到')" @click="handleSignIn(scope.$index,scope.row)"  size="small">签到</el-button>
              <el-button :disabled="!(scope.row.status==='已签到')" size="small" @click="handleSignOut(scope.$index, scope.row)">签退</el-button>
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

    <el-dialog title="数据预览" width="fit-content" :visible.sync="dialogTableVisible">
      <el-table :data="arr_temp.slice((currentPage_temp-1)*pageSize,currentPage_temp*pageSize_temp)" >
        <el-table-column property="name" label="姓名" width="80"></el-table-column>
        <el-table-column property="date" label="UID" width="150"></el-table-column>
        <el-table-column property="address" label="学校" width="200"></el-table-column>
        <el-table-column property="zip" label="电话" width="120"></el-table-column>
        <el-table-column property="status" label="状态" width="120"></el-table-column>
      </el-table>
      <el-pagination

        @size-change="handleSizeChangeTemp"
        @current-change="handleCurrentChangeTemp"
        :current-page.sync="currentPage_temp"
        :page-size="pageSize_temp"
        layout="total, prev, pager, next, jumper, sizes"
        :total="total_temp">
      </el-pagination>
      <el-button @click="dialogTableVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirm_import()">确 定</el-button>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: 'activity-promotional',
        inject:["reload"],
        data () {
            return {
                valid:true,
                dialogTableVisible:false,
                notifyPromise:Promise.resolve(),
                multipleSelection: [],
                search:'',
                filter_status:'全部',
                check_title:'请先在活动管理中选择一个活动进行组织签到',
                currentPage_temp:1,
                pageSize_temp:10,
                total_temp: 0,
                currentPage: 1,
                pageSize: 10,
                total:0,
                arr_temp_filename:'',
                arr_temp: [{
                    date: '',
                    name: '',
                    status:'',
                    address: '',
                    zip: '',
                }, ],
                tableData: [{
                    date: '',
                    name: '',
                    status:'',
                    address: '',
                    zip: '',
                }, ],
                tableData_copy: [{
                    date: '20160502',
                    name: '王小虎',
                    status:'未签到',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: '200333'
                }, {
                    date: '20160504',
                    name: '王小虎',
                    status:'已签到',
                    address: '上海市普陀区金沙江路 1517 弄',
                    zip: '200333'
                }, {
                    date: '20160501',
                    name: '王小虎',
                    status:'已签退',
                    address: '上海市普陀区金沙江路 1519 弄',
                    zip: '200333'
                }, {
                    date: '20160503',
                    name: '王小虎',
                    status:'已签到',
                    address: '上海市普陀区金沙江路 1516 弄',
                    zip: '200333'
                }],
          };
        },
        methods: {

            //过滤数据
            handleData(){
                let temp_data = this.tableData.filter(data=>this.filter(data));
                this.total=temp_data.length;
                return temp_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
            },

            //搜索筛选&&状态筛选
            filter(val){
                return (val.name)&&(!this.search || val.name.toLowerCase().includes(this.search.toLowerCase())) &&( val.status === this.filter_status ||this.filter_status==='全部');
            },

            //导入表格确认
            confirm_import(){
                this.$confirm('将追加到当前签到表并上传至服务器 ，是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                    for(let key in this.arr_temp){
                        this.tableData.push(this.arr_temp[key]);
                        ///此处将修改数据库
                    }
                    this.dialogTableVisible=false;
                    this.$message({
                        type: 'success',
                        message: '成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });
            },

            //导入表格 显示到展示区
            insert(obj){
                var a = document.getElementById('file');
                this.arr_temp_filename = a.value;
                this.importf(obj);
                this.dialogTableVisible=true;
                a.value='';
            },

            //excel导出API
            importf(obj) {
                let _this = this;
                let inputDOM = this.$refs.inputer;   // 通过DOM取文件数据
                this.file = event.currentTarget.files[0];
                var rABS = false; //是否将文件读取为二进制字符串
                var f = this.file;
                var reader = new FileReader();
                //if (!FileReader.prototype.readAsBinaryString) {
                FileReader.prototype.readAsBinaryString = function(f) {
                    var binary = "";
                    var rABS = false; //是否将文件读取为二进制字符串
                    var pt = this;
                    var wb; //读取完成的数据
                    var outdata;
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        var bytes = new Uint8Array(reader.result);
                        var length = bytes.byteLength;
                        for(var i = 0; i < length; i++) {
                            binary += String.fromCharCode(bytes[i]);
                        }
                        var XLSX = require('xlsx');
                        if(rABS) {
                            wb = XLSX.read(btoa(fixdata(binary)), { //手动转化
                                type: 'base64'
                            });
                        } else {
                            wb = XLSX.read(binary, {
                                type: 'binary'
                            });
                        }
                        // outdata就是你想要的东西 excel导入的数据
                        outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
                        // excel 数据再处理
                        _this.arr_temp = [];
                        outdata.map(v => {
                            let obj = {};
                            obj.name = v.姓名;
                            obj.date = v.UID;
                            obj.address = v.学校;
                            obj.zip = v.电话;
                            obj.status = '未签到';
                            _this.arr_temp.push(obj);

                        });
                        _this.total_temp = _this.arr_temp.length;


                    };
                    reader.readAsArrayBuffer(f);
                };
                if(rABS) {
                    reader.readAsArrayBuffer(f);
                } else {
                    reader.readAsBinaryString(f);
                }


            },
            //导出表格
            export1(){
                let filename = '';
                if(this.title===''){
                    filename='数据为空，将下载模板表格';
                }
                else {
                    filename = '将下载文件 '+this.title+'签到信息.xlsx';
                }
                this.$confirm(filename+', 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.export2Excel();
                    this.$message({
                        type: 'success',
                        message: '成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });

            },

            //excel导出API
            export2Excel() {
                require.ensure([], () => {
                    const { export_json_to_excel } = require('../../vendor/Export2Excel');
                    const tHeader = ['姓名', 'UID', '学校', '电话', '状态']; //对应表格输出的title
                    const filterVal = ['name', 'date', 'address', 'zip', 'status']; // 对应表格输出的数据
                    const list = this.tableData;
                    const data = this.formatJson(filterVal, list);
                    export_json_to_excel(tHeader, data, this.title+'签到信息'); //对应下载文件的名字
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => v[j]))
            },
            //导出表格结束

            //深度克隆 避免改变被赋值对象影响赋值对象
            deepClone(obj){
                let newObj=Array.isArray(obj)?[]:{};

                if(obj&&typeof obj ==="object"){
                    for(let key in obj){
                        if(obj.hasOwnProperty(key)){
                            newObj[key]=(obj && typeof obj[key]==='object')?this.deepClone(obj[key]):obj[key];
                        }
                    }
                }
                return newObj
            },

            //表格点击事件
            handleClick(row) {
                console.log(row);

            },

            SignInByDate(date){
                for(var i = 0; i < this.tableData.length; i++){
                    if(date===this.tableData[i].date){
                        if(this.tableData[i].status==='未签到'){
                            this.tableData[i].status='已签到';
                            this.notify(date+'签到成功');
                        }
                        break;
                    }
                }
            },
            SignOutByDate(date){
                for(var i = 0; i < this.tableData.length; i++){
                    if(date===this.tableData[i].date){
                        if(this.tableData[i].status==='已签到'){
                            this.tableData[i].status='已签退';
                            this.notify(date+'签退成功');
                        }
                        break;
                    }
                }
            },

            notify(msg) {
                this.notifyPromise = this.notifyPromise.then(this.$nextTick).then(()=>{
                    this.$notify({
                        title: msg,
                    });
                })
            },

            //签到
            handleSignIn(index,row){

                this.SignInByDate(row.date);
            },
            //签退
            handleSignOut(index,row){

              this.SignOutByDate(row.date);
            },
            //批量
            groupSignIn(){
                for(var j=0;j < this.multipleSelection.length;j++){
                    this.SignInByDate(this.multipleSelection[j].date);
                }
            },
            groupSignOut(){
                for(var j=0;j < this.multipleSelection.length;j++){
                    this.SignOutByDate(this.multipleSelection[j].date);
                }
            },
            //每页条数
            handleSizeChangeTemp(val) {
                this.pageSize_temp=val;
            },

            //当前页数
            handleCurrentChangeTemp(val) {
            },
            //每页条数
            handleSizeChange(val) {
                this.pageSize=val;
            },

            //当前页数
            handleCurrentChange(val) {
            },
            //渲染单行颜色
            tableRowClassName({row, rowIndex}) {
                if(row.status==='已签退')
                    return 'success-row';
                if(row.status==='已签到')
                    return  'warning-row';
                return ''
            },

            //多选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },


        },
        mounted() {

        },
        created() {
            if(this.$store.state.activityId!==0){
                this.check_title = this.$store.state.activityId;
                this.valid=false;
                //copy为后台请求数据
                this.tableData=this.deepClone(this.tableData_copy);
                this.total=this.tableData.length;
            }
        }
    }
</script>

<style>
  .checkin_management1{
    margin-top: 20px;
  }
  @media screen and (min-width: 1140px){
    .checkin_management1  ._self{
      width: 1127px!important;
      margin: 0 auto;
    }
  }
  .checkin_management1  ._self{
    position:fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
    z-index: 2014;
  }

  .checkin_management1 .checkin_management1_date{
    font-size: 15px;
    font-weight: 300;
    padding-bottom: 20px;
    border-bottom:1px solid #ebebeb;
  }
  .checkin_management1 .checkin_management1_content{
    margin-top: 20px;
  }
  .checkin_management1 h1{
    font-weight: 300;
  }

  .checkin_management1 .warning-row {
    background: oldlace!important;
  }
  .checkin_management1 .success-row{
    background-color:  #f0f9eb!important;
  }
  .checkin_management1 .upload{
    padding: 4px 10px;
    font-size: 14px;
    height: 100%;
    line-height: 100%;
    position: relative;
    text-decoration: none;
    color: #409EFF;
    cursor: pointer;

  }

  .checkin_management1 .change{
    position: absolute;
    overflow: hidden;
    right: 0;
    top: 0;
    opacity: 0;
    cursor: pointer;
  }


</style>
