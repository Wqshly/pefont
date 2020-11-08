<template>
  <div id="container">
    <v-rank class="rank"></v-rank>
    <div class="table">
      <p> 当前班级:{{className}}</p>
      <div class="table-header">
        <p class="a" @click.stop="handleMultiSignIn">批量签到</p>
        <p class="a"  @click.stop="handleMultiSignOut">批量签退</p>
      </div>
      <el-table @selection-change="handleSelectionChange"
                :data="handleData()"
                style="width: 100%">
        <el-table-column type="selection"
                         fixed="left"
                         width="55">
        </el-table-column>
        <el-table-column prop='studentName'
                         label="名字">
          <template #header>
            <el-input type="text"
                      size="small"
                      v-model="search"
                      prefix-icon="el-icon-search"
                      style="width: 150px;"
                      placeholder="输入名字搜索">
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop='flag'
                         label="状态"
                         :formatter="mappingStatus">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini"
                       :disabled="!(scope.row.flag === 0)"
                       @click.stop="handleSignIn(scope.$index, scope.row)">签到
            </el-button>

            <el-button size="mini"
                       :disabled="!(scope.row.flag === 1)"
                       @click.stop="handleSignOut(scope.$index, scope.row)">签退
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange"
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
    import vRank from "@/components/rank"
    export default {
        components:{
          vRank,
        },
        data() {
            return {
                className: '',

                search:'',
                tableData:[],
                currentPage: 1,
                pageSize: 10,
                total:0,
                multipleSelection:[],
            }
        },
        methods: {
            Sign(url,data){
                this.$api.post_JSON(url,data).then(res => {
                    if (res.code === 0) {
                        this.requestTableData();
                    } else {
                        this.$message.error(res.msg);
                    }
                });
            },
            handleSignIn(index, row){
                this.Sign('/api/SignIn/setSignInByClass',[row.id]);
            },
            handleMultiSignIn(){
                let data = [];
                for(let i in this.multipleSelection){
                    data.push(this.multipleSelection[i].id);
                }
                this.Sign('/api/SignIn/setSignInByClass',data);
            },
            handleSignOut(index, row){
                this.Sign('/api/SignIn/setSignOutByClass',[row.id]);
            },
            handleMultiSignOut(){
                let data = [];
                for(let i in this.multipleSelection){
                    data.push(this.multipleSelection[i].id);
                }
                this.Sign('/api/SignIn/setSignOutByClass',data);
            },
            //多选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            mappingStatus(row, column){
                switch (row.flag) {
                    case 0:
                      return '未签到';
                    case 1:
                      return '未签退';
                    case 2:
                      return '已签退';
                }
            },
            handleData() {
                let temp_data = this.tableData.filter(data=>this.filter(data));
                this.total=temp_data.length;
                return temp_data.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize);
            },
            //搜索筛选
            filter(val){
                return (!this.search || val.studentName.toLowerCase().includes(this.search.toLowerCase()));
            },
            //每页大小
            handleSizeChange(val) {
                this.pageSize=val;
            },

            handleCurrentChange(val) {
            },

            requestTableData() {
                let url = '/api/SignIn/getSignInByClass';
                this.$api.get(url).then(res => {
                    if (res.code === 0) {
                        this.tableData = this.$clone.transObjectToList(res.data);
                    } else {
                        this.$message.error(res.msg);
                    }
                });
            },
        },
        mounted() {
            this.className = this.$store.state.user.unit;
        },
        created() {
            this.requestTableData();
        },
    }
</script>

<style scoped>
  #container{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: center;
  }


  .rank{
    order: 2;
    float: right;
  }
  .table{
    order: 1;
    float: left;
    width: calc(100% - 320px);
    padding-bottom: 30px;
  }

  .table-header{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  p {
    padding: 8px 0;
    font-size: 15px;
  }
  .a{
    color:#409eff;
    cursor: pointer;
    padding-right: 20px;
  }
  @media screen and (max-width:860px ){
    .table{
      width: 100%
    }
  }
</style>
