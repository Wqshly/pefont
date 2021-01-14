<template>
    <div class="container">
      <basic-table-temp :refName="refName" :table-header-list="getTableHeaderList()"></basic-table-temp>
      <template v-if="!studentManagePage">
        <div class="crumb" v-for="(crumb,index) in crumbs" @click="crumbsClick(index)"
             :class="{'active':crumbFlag === index}" :key="index">
          {{crumb.name}}
          <div v-if="index < crumbs.length - 1" style="display:inline-block;">&gt;</div>
        </div>
        <br>
        <br>
        <div style="float: right">
          <el-button type="text" @click.native="deleteSelectOption()">删除选中项</el-button>
          <el-button type="text" @click.native="openImportExcelDialog()">批量导入</el-button>
          <el-button type="text" @click.native="handleCreate()">新建{{this.crumbs[this.crumbFlag].name}}</el-button>
        </div>
        <el-table :data="handleData()"
                  @selection-change="selectChange"
                  @cell-click="cellClick">
          <el-table-column type="selection" fixed="left" width="55"></el-table-column>
          <el-table-column label="名字" :prop="propName">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click.stop="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button type="danger" size="mini" @click.stop="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="table-footer" style="float: right;">
          <el-pagination
            @size-change="sizeChange"
            @current-change="currentChange"
            :current-page="currentPageNumber"
            :page-sizes="[5, 10, 15, 20, 50]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="recordTotal"
            class="pagination-style"></el-pagination>
        </div>
      </template>
      <!-- 上传Excel窗口 -->
      <el-dialog ref="importExcelFormDialog" title="上传" :visible.sync="importExcelDialogVisible" :close-on-click-modal="false"
                 class="dialog-style">
        <div slot="footer">
          <div style="float: left;">
            <el-button @click.native="closeImportExcelFormDialog">取消</el-button>
          </div>
          <el-button type="primary" @click.native="uploadExcel">确认上传</el-button>
        </div>
      </el-dialog>
      <!-- 编辑窗口 -->
      <dialog ref="editDialog" title="编辑" :visible.sync="editDialogVisible" :close-on-click-modal="false"
              class="dialog-style">
      </dialog>
    </div>
</template>

<script>
export default {
  name: 'collegeManage',
  data () {
    return {
      refName: 'collegeManageForm',
      tableHeaderList: [
        {}
      ],
      refreshObj: {},
      refreshUrl: '/student/queryStudentInfoBySchool',
      studentManagePage: false,
      importExcelDialogVisible: false,
      crumbs: [
        {
          name: '院系',
          tableName: 'collegeList',
          prop: 'collegeName'
        },
        {
          name: '班级',
          tableName: 'classesList',
          prop: 'className'
        }
      ],
      crumbFlag: 0,
      propName: '',
      selectList: [], // 勾选的项列表
      lastUrl: '', // 查询和刷新页面用的Url
      lastObject: {}, // 查询和刷新页面用的Object
      lastFormName: '', // 记录上次的formName
      recordTotal: 0, // 数据的总条数
      currentPageNumber: 1, // 当前页
      pageSize: 10, // 每页显示条数
      sortField: 'id', // 排序的字段
      sortMethod: 'ascending', // 排序方法(升序、降序、不排序)
      tableLoading: false, // 表格显示loading
      collegeList: [], // 学院列表
      classesList: [], // 班级列表
      currentChoose: {
        collegeId: 0,
        classId: 0
      },
      editDialogVisible: true,
      selectRow: {}
    }
  },
  methods: {
    // 获取正确的表头
    getTableHeaderList () {},
    // 选中多行数据
    selectChange (selects) {
      this.selectList = selects
    },
    // 切换表格数据
    shiftData (val) {
      // this.crumbFlag用来监视当前表格数据到底是什么
      this.propName = this.crumbs[val].prop
      this.crumbFlag = val
    },
    cellClick (row) {
      if (this.crumbFlag === 0) {
        this.getClassList(1, row.id)
      } else if (this.crumbFlag === 1) {
        this.getClassList()
      }
    },
    crumbsClick (val) {
      this.shiftData(val)
    },
    // 获取学院信息列表
    getCollegeList () {
      this.$api.http.get('/college/queryCollegeList')
        .then(res => {
          this.collegeList = res.data
          this.shiftData(0)
        })
        .catch()
    },
    getClassList (sid, cid) {
      const url = '/classes/queryClassesList/' + sid + '/' + cid
      this.$api.http.get(url)
        .then(res => {
          this.classesList = res.data
          this.shiftData(1)
        })
        .catch(err => {
          this.$message.error(err.msg)
        })
    },
    // 获取学院/班级的数据
    handleData () {
      return this[this.crumbs[this.crumbFlag].tableName]
    },
    // 新建
    handleCreate () {
      if (this.crumbFlag === 0) {
        this.$prompt('请输入院系名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({value}) => {
          this.createCollege(value)
        }).catch((err) => {
          console.log(err)
        })
      } else {
        this.$prompt('请输入班级名称', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({value}) => {
          this.createClass(value, this.currentChoose.collegeId)
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    // 编辑
    handleEdit (index, row) {
      this.selectRow = row
      this.editDialogVisible = true
    },
    // 新建院系
    createCollege (collegeName) {
      const data = {
        collegeName: collegeName,
        score: 0,
        collegeInfo: '未设置'
      }
      this.$api.http.postJson('/college/addCollege', data)
        .then(res => {
          this.$message.success('新建成功！')
          this.refreshRecord()
        })
        .catch((err) => {
          this.$message.error(err.msg)
        })
    },
    // 新建班级
    createClass (className, collegeId) {
      const data = {
        collegeId: collegeId,
        className: className
      }
      this.$api.http.postJson('/classes/addClasses', data)
        .then(res => {
          this.$message.success('新建成功！')
          this.refreshRecord()
        })
        .catch(() => {})
    },
    // 打开上传Excel页面
    openImportExcelDialog () {
      this.importExcelDialogVisible = true
    },
    // 关闭上传Excel页面
    closeImportExcelFormDialog () {
      this.importExcelDialogVisible = false
    },
    deleteSelectOption () {
      if (this.selectList.length === 0) {
        this.$message.warning('您尚未勾选，请先勾选一条以上记录！')
      } else {
        this.$confirm('确认删除所选内容？？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then()
          .catch(() => {})
      }
    },
    sizeChange (val) {
      this.pageSize = val
      this.refreshRecord()
    },
    currentChange (val) {
      this.currentPageNumber = val
      this.refreshRecord()
    }
  },
  mounted () {
    this.getCollegeList()
    this.$refs[this.refName].getRecord(this.refreshUrl, this.refreshObj)
  }
}
</script>

<style scoped>

  .container {
    margin: 0 auto;
    max-width: 1140px;
    width: 100%;
  }

  .container .crumb {
    cursor: pointer;
    transition: all 0.3s;
    display: inline-block;
    margin-right: 10px;
  }

  .container .crumb:hover {
    color: #409EFF !important;
  }

  .active {
    color: #409EFF !important;
  }

  .table-footer {
    background: rgba(255, 255, 255, 0.7);
    height: 40px;
  }
</style>
