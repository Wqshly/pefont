<template>
    <div class="container">
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
      <el-dialog ref="importExcelFormDialog" title="上传" :visible.sync="importExcelDialogVisible" :close-on-click-modal="false" class="dialog-style">
        <div slot="footer">
          <div style="float: left;">
            <el-button @click.native="closeImportExcelFormDialog">取消</el-button>
          </div>
          <el-button type="primary" @click.native="uploadExcel">确认上传</el-button>
        </div>
      </el-dialog>
      <!-- 编辑窗口 -->
      <el-dialog ref="editDialogForm" title="编辑" :visible.sync="editDialogVisible" :close-on-click-modal="false" class="dialog-style">
        <div v-for="(item,index) in editRecordList" :key="index">
          {{item.key}}：<el-input v-model="item.value" :disabled="!item.disabled"></el-input>
        </div>
        <div slot="footer">
          <div style="float: left;">
            <el-button @click.native="editDialogVisible = false">取消</el-button>
          </div>
          <el-button type="primary" @click.native="editRecord">确认上传</el-button>
        </div>
      </el-dialog>
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
      refreshUrl: '/student/queryStudentInfoBySchool',
      studentManagePage: false,
      importExcelDialogVisible: false,
      editDialogVisible: false,
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
      selectRow: {},
      editRecordList: [], // 将待编辑的数据转为list形式，以保证在form中被渲染
      editForm: {} // 编辑的表单
    }
  },
  methods: {
    // 获取记录
    getRecord (url, formName, collegeId) {
      this.selectList = []
      let obj = {}
      if (url === null && formName === null) {
        url = this.lastUrl
        obj = this.lastObject
        formName = this.lastFormName
      } else if (formName === 'classesList') {
        url += collegeId
      }
      obj.currentPageNumber = this.currentPageNumber
      obj.pageSize = this.pageSize
      obj.sort = this.sortField + ' ' + this.sortMethod.replace('descending', ' desc').replace('ascending', ' asc')
      let objJson = JSON.stringify(obj)
      this.tableLoading = true
      this.$api.http.postJson(url, objJson)
        .then(res => {
          this.tableLoading = false
          this[formName] = res.data.list
          if (formName === 'collegeList') {
            this.shiftData(0)
          } else {
            this.shiftData(1)
          }
          this.recordTotal = res.data.total // 总条数
          this.lastUrl = url
          this.lastFormName = formName
          this.lastObject = JSON.parse(objJson)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 刷新记录
    refreshRecord () {
      this.getRecord(null, null)
    },
    // 切换表格数据
    shiftData (val) {
      // this.crumbFlag用来监视当前表格数据到底是什么
      this.propName = this.crumbs[val].prop
      this.crumbFlag = val
    },
    // 删除选中行
    handleDelete (index, row) {},
    // 选中多行数据
    selectChange (selects) {
      this.selectList = selects
    },
    cellClick (row) {
      if (this.crumbFlag === 0) {
        this.getRecord('/classes/queryClassesListByCollege/', 'classesList', row.id)
        this.currentChoose.collegeId = row.id
      } else if (this.crumbFlag === 1) {
        this.getRecord('/classes/queryClassesListByCollege/', 'classesList', row.id)
        this.currentChoose.classId = row.id
      }
    },
    crumbsClick (val) {
      this.shiftData(val)
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
      console.log(data)
      this.$api.http.postJson('/classes/addClasses', data)
        .then(res => {
          this.$message.success('新建成功！')
          this.refreshRecord()
        })
        .catch(() => {})
    },
    // 打开编辑窗口
    handleEdit (index, row) {
      this.selectRow = row
      this.editRecordList = []
      // for循环将值赋给editRecordList，用于渲染edit表单
      for (let i in row) {
        // hsaOwnProperty用于判断对象是否包含特定的自身（非继承）属性。
        if (row.hasOwnProperty(i)) {
          let disabled = true
          if (i.toLowerCase().includes('id')) {
            disabled = false
          }
          let tempData = {
            key: i,
            value: row[i],
            disabled: disabled
          }
          this.editRecordList.push(tempData)
        }
      }
      this.editDialogVisible = true
    },
    // 编辑
    editRecord () {
      this.editRecordList.forEach((item, index) => {
        this.editForm[this.editRecordList[index].key] = item.value
      })
      let url = '/college/updateCollege'
      if (this.crumbFlag === 1) {
        url = '/classes/updateClasses'
      }
      this.$api.http.postJson(url, this.editForm)
        .then(res => {
          this.refreshRecord()
          this.editDialogVisible = false
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 打开上传Excel页面
    openImportExcelDialog () {
      this.importExcelDialogVisible = true
    },
    // 关闭上传Excel页面
    closeImportExcelFormDialog () {
      this.importExcelDialogVisible = false
    },
    // 批量删除(删除选中项)
    deleteSelectOption () {
      if (this.selectList.length === 0) {
        this.$message.warning('您尚未勾选，请先勾选一条以上记录！')
      } else {
        this.$confirm('确认删除所选内容？？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            const selectMultipleId = this.selectList.map(item => item.id)
            let url = this.crumbFlag === 0 ? '/college/deleteCollege' : '/classes/deleteClasses'
            this.$api.http.postJson(url, selectMultipleId)
          })
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
    this.getRecord('/college/queryCollegeList', 'collegeList')
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
