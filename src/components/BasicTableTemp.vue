<template>
  <div class="fill-contain">
    <!-- 表头标题 -->
    <template v-if="titleShow === true">
      <div class="title-style" ref="tableTitle">
        {{tableTitle}}
      </div>
    </template>
    <!-- 表前工具栏 -->
    <template v-if="tableTools ===true">
      <div class="table-tools-area">
        <el-button-group style="display: block">
          <el-popover placement="top-start" content="新增" trigger="hover">
            <el-button v-if="addButton" slot="reference" @click.native="openAddDialog"
                       class="button" style="color:#13ce66;">
              <font-awesome-icon :icon="['fas', 'plus-circle']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-popover>
          <el-popover placement="top-start" content="编辑" trigger="hover">
            <el-button v-if="editButton" slot="reference" @click.native="openEditDialog"
                       class="button" style="color: #f7c900;">
              <font-awesome-icon :icon="['fas', 'edit']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-popover>
          <el-popover placement="top-start" content="删除" trigger="hover">
            <el-button v-if="deleteButton" slot="reference" @click.native="deleteRecord"
                       class="button" style="color: #b9c9c7;"
                       :disabled="this.selectRecord.length === 0">
              <font-awesome-icon :icon="['fas', 'trash-alt']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-popover>
          <el-popover placement="top-start" content="刷新" trigger="hover">
            <el-button v-if="refreshButton" slot="reference" @click.native="refreshRecord"
                       class="button" style="color: #12ce66">
              <font-awesome-icon :icon="['fas', 'sync-alt']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-popover>
          <el-popover placement="top-start" content="下载(批量导出数据)" trigger="hover">
            <el-button v-if="refreshButton" slot="reference" @click.native="refreshRecord"
                       class="button" style="color: #12ce66">
              <font-awesome-icon :icon="['fas', 'cloud-download-alt']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-popover>
          <el-popover placement="top-start" content="上传(批量导入数据)" trigger="hover">
            <el-button v-if="refreshButton" slot="reference" @click.native="openImportExcelDialog"
                       class="button" style="color: #12ce66">
              <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-popover>
          <!-- 按钮扩展区域1(左侧) -->
          <span>
              <slot name="btn-area-left"></slot>
          </span>
          <!-- 按钮扩展区域2(右侧) -->
          <span style="float: right;padding-right: 5px;height: inherit;">
              <slot name="btn-area-right"></slot>
          </span>
        </el-button-group>
      </div>
    </template>
    <!-- 表格内容 -->
    <el-row>
      <!-- @为v-on的缩写，:为v-bind的缩写 -->
      <el-table :data="tableData" ref="TableTemplate"
                @row-click="rowClick"
                @row-dblclick="rowDoubleClick" @selection-change="selectChange"
                :default-sort="defaultSort" @sort-change="sortChange"
                v-loading="tableLoading">
        <!-- 选择框 -->
        <el-table-column type="selection" width="55"></el-table-column>
        <!-- 序号 -->
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <!-- 正式内容 -->
        <!-- 通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据。 -->
        <!-- 使用sortable="custom" 即可通过后端排序 -->
        <el-table-column v-for="tableHeader in tableHeaderList" :key="tableHeader.value"
                         :label="tableHeader.label" :prop="tableHeader.value"
                         :min-width="tableHeader.minWidth" :width="tableHeader.width"
                         header-align="center" align="center"
                         :fixed="tableHeader.fixed" :sortable="sortable"
                         show-overflow-tooltip>
          <!-- Element UI固定写法 -->
          <template slot-scope="scope">
            <!-- 通过tableHeader.value获取表数据 -->
            <el-popover trigger="hover" placement="top">
              <p>{{scope.row[tableHeader.value]}}</p>
              <div slot="reference">{{scope.row[tableHeader.value]}}</div>
            </el-popover>
          </template>
        </el-table-column>
        <!-- 右侧操作栏 -->
        <el-table-column label="操作" :width="funcBtn.width" v-if="funcBtn.isShow" :fixed="funcBtn.fixed">
          <template slot-scope="scope">
            <!-- 通过tableHeader.value获取按钮名 -->
            <el-button size="small" v-for="(item, index) in funcBtn.buttons"
                       @click="btnClick(item.value, scope.$index)" :key="index">
              {{item.name}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <!-- 表后页码等 -->
    <el-row>
      <div class="table-footer" style="float: right;">
        <el-pagination
          :hide-on-single-page="hidePagination"
          @size-change="sizeChange"
          @current-change="currentChange"
          :current-page="currentPageNumber"
          :page-sizes="[5, 10, 15, 20, 50]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="recordTotal"
          class="pagination-style"></el-pagination>
      </div>
    </el-row>
    <!-- 新增窗口 -->
    <el-dialog ref="addFormDialog" title="新增" :visible.sync="addDialogVisible" :close-on-click-modal="false"
               class="dialog-style">
      <slot name="addForm"></slot>
      <div slot="footer">
        <!-- 作为模板时，不加.native将不会生效 -->
        <el-button type="primary" @click.native="addRecord">保存</el-button>
        <el-button type="primary" @click.native="addAndClose">保存并关闭</el-button>
        <el-button @click.native="addDialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!-- 编辑窗口 -->
    <el-dialog ref="editFormDialog" title="编辑" :visible.sync="editDialogVisible" :close-on-click-modal="false"
               class="dialog-style">
      <slot name="editForm"></slot>
      <div slot="footer">
        <div style="float:left;">
          <el-button type="primary" @click.native="previousRecord">上一条</el-button>
          <el-button type="primary" @click.native="nextRecord">下一条</el-button>
        </div>
        <!-- 作为模板时，不加.native将不会生效 -->
          <el-button type="primary" @click.native="editRecord">保存</el-button>
          <el-button type="primary" @click.native="editAndClose">保存并关闭</el-button>
          <el-button @click.native="editDialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <!-- 详情窗口 -->
    <el-dialog ref="detailFormDialog" title="详情" :visible.sync="detailDialogVisible" :close-on-click-modal="false"
               class="dialog-style">
      <slot name="detailForm"></slot>
      <div slot="footer">
        <div style="float: left;">
          <el-button type="primary" @click.native="previousRecord">上一条</el-button>
          <el-button type="primary" @click.native="nextRecord">下一条</el-button>
        </div>
<!--        <el-button type="primary" @click.native="letsEdit">编辑</el-button>-->
        <el-button @click.native="closeDetailDialog">关闭</el-button>
      </div>
    </el-dialog>
    <!-- 上传Excel窗口 -->
    <el-dialog ref="importExcelFormDialog" title="上传" :visible.sync="importExcelDialogVisible" :close-on-click-modal="false"
               class="dialog-style">
      <slot name="excelForm"></slot>
      <div slot="footer">
        <div style="float: left;">
          <el-button @click.native="closeImportExcelFormDialog">取消</el-button>
        </div>
        <el-button type="primary" @click.native="uploadExcel">确认上传</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BasicTableTemp',
  props: {
    titleShow: {type: Boolean, default: true},
    tableTitle: {type: String, default: '初始表头名'},
    tableTools: {type: Boolean, default: true},
    sortable: {type: Boolean | String, default: 'custom'},
    addButton: {type: Boolean, default: true},
    editButton: {type: Boolean, default: true},
    deleteButton: {type: Boolean, default: true},
    refreshButton: {type: Boolean, default: true},
    tableHeaderList: {type: Array, required: true}, // 表头数据
    tablePK: {default: 'id'}, // 表的主键
    hidePagination: {type: Boolean, default: false}, // 是否隐藏页码
    deleteRecordUrl: {type: String, default: ''},
    funcBtn: {
      default () {
        return {
          isShow: false,
          fixed: 'right',
          width: 200,
          buttons: []
        }
      }
    } // 右侧操作栏
  },
  data () {
    return {
      tableData: [], // 表数据
      defaultSort: {prop: 'id', order: 'ascending'},
      selectRow: null, // 当前选中行
      tableDataIndex: -1, // 当前选中行的序号，用于编辑、详情页中的上一条下一条读取数据。如无该变量，直接使用indexOf(selectRow)查行号，则编辑后无法回到正确的行数上。
      selectRecord: [], // 列表中选中的多行数据
      lastUrl: '', // 查询和刷新页面用的Url
      lastObject: {}, // 查询和刷新页面用的Object
      recordTotal: 0, // 数据的总条数
      currentPageNumber: 1, // 当前页
      pageSize: 10, // 每页显示条数
      sortField: 'id', // 排序的字段
      sortMethod: 'ascending', // 排序方法(升序、降序、不排序)
      tableLoading: false, // 表格显示loading
      addDialogVisible: false, // 添加窗口
      editDialogVisible: false, // 编辑窗口
      detailDialogVisible: false, // 查看详情窗口
      importExcelDialogVisible: false // 上传Excel窗口
    }
  },
  methods: {
    // 打开新增页面
    openAddDialog () {
      this.addDialogVisible = true
    },
    // 打开编辑页面
    openEditDialog () {
      if (this.selectRow !== null) {
        this.editDialogVisible = true
      } else {
        this.$message.warning('请选择一条记录')
      }
    },
    // 添加记录
    addRecord () {
      this.$emit('add-record')
    },
    // 添加并关闭窗口
    addAndClose () {
      this.addRecord()
      this.addDialogVisible = false
    },
    // 具体的新增记录的方法
    createMethod (url, param) {
      let JsonParam = JSON.stringify(param)
      console.log(url + JsonParam)
      this.$api.http.postJson(url, JsonParam)
        .then(
          this.refreshRecord()
        )
        .catch(err => {
          console.log(err)
        })
    },
    // 编辑记录
    editRecord () {
      this.$emit('edit-record')
    },
    // 编辑并关闭窗口
    editAndClose () {
      this.editRecord()
      this.editDialogVisible = false
    },
    // 具体的修改记录的方法
    updateMethod (url, param) {
      let JsonParam = JSON.stringify(param)
      this.$api.http.postJson(url, JsonParam)
        .then(
          this.refreshRecord()
        )
        .catch(err => {
          console.log(err)
        })
    },
    // 关闭详情页面
    closeDetailDialog () {
      this.detailDialogVisible = false
    },
    // 删除记录(批量删除)
    async deleteRecord () {
      const selectMultipleId = this.selectRecord.map(item => item[this.tablePK])
      console.log(this.deleteRecordUrl)
      console.log(selectMultipleId)
      await this.$confirm('确认删除 "选中的 ' + selectMultipleId.length + ' 条" 记录吗？', '提示', {type: 'warning'})
        .then(() => {
          this.tableLoading = true
          this.$api.http.postJson(this.deleteRecordUrl, selectMultipleId)
            .then(res => {
              this.tableLoading = false
              this.refreshRecord()
            })
            .catch(err => {
              console.log(err)
              this.$message.error('网络请求失败')
            })
        })
        .catch(() => {})
    },
    // 刷新记录
    refreshRecord () {
      this.getRecord(null)
    },
    // 打开上传Excel页面
    openImportExcelDialog () {
      this.importExcelDialogVisible = true
    },
    // 上传Excel表
    uploadExcel () {
      this.$emit('upload-excel')
      this.importExcelDialogVisible = false
    },
    // 关闭上传Excel页面
    closeImportExcelFormDialog () {
      this.importExcelDialogVisible = false
    },
    // 驼峰转下划线
    toLine (name) {
      return name.replace(/([A-Z])/g, '_$1').toLowerCase()
    },
    // 排序
    sortChange (data) {
      // 由于后端排顺序，故在此处将sort排序中的null值排除。
      if (data.order === null) {
        data.column.order = this.sortMethod === 'descending' ? data.order = 'ascending' : data.order = 'descending'
        this.sortMethod = data.prop
      }
      this.sortField = data.prop
      this.sortMethod = data.order
      this.refreshRecord()
    },
    // 获取记录
    getRecord (url) {
      this.selectRecord = []
      let obj = {}
      if (url === null) {
        url = this.lastUrl
        obj = this.lastObject
      }
      obj.currentPageNumber = this.currentPageNumber
      obj.pageSize = this.pageSize
      obj.sort = this.toLine(this.sortField) + ' ' + this.sortMethod.replace('descending', ' desc').replace('ascending', ' asc')
      let objJson = JSON.stringify(obj)
      this.tableLoading = true
      this.$api.http.postJson(url, objJson)
        .then(res => {
          console.log(res.data)
          this.tableLoading = false
          this.tableData = res.data.list
          this.recordTotal = res.data.total // 总条数
          this.$emit('record-processing') // 其他的刷新事件，通过此处返还
          this.lastUrl = url
          this.lastObject = JSON.parse(objJson)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 点击某一行
    rowClick (row, column, event) {
      // assign 使后者的值赋到前者中。
      this.$emit('click-row', Object.assign({}, row))
      this.selectRow = row
      this.tableDataIndex = this.tableData.indexOf(this.selectRow)
    },
    // 双击某行时的事件
    rowDoubleClick (row, column, event) {
      this.$emit('click-row-double', Object.assign({}, row))
    },
    // 选中多行数据
    selectChange (selects) {
      this.selectRecord = selects
    },
    // 右侧操作按钮点击事件
    btnClick (value, index) {
      this.$emit('btn-click', value, index)
    },
    sizeChange (val) {
      this.pageSize = val
      this.refreshRecord()
    },
    currentChange (val) {
      this.currentPageNumber = val
      this.refreshRecord()
    },
    // 编辑界面中的上一条按钮
    previousRecord () {
      if (this.tableDataIndex - 1 === -1) {
        this.tableDataIndex = this.tableData.length - 1
      } else {
        this.tableDataIndex -= 1
      }
      this.selectRow = this.tableData[this.tableDataIndex]
      this.$emit('click-row', Object.assign({}, this.tableData[this.tableDataIndex]))
    },
    // 编辑页面中的下一条按钮
    nextRecord () {
      if (this.tableDataIndex + 1 === this.tableData.length) {
        this.tableDataIndex = 0
      } else {
        this.tableDataIndex += 1
      }
      this.selectRow = this.tableData[this.tableDataIndex]
      this.$emit('click-row', Object.assign({}, this.tableData[this.tableDataIndex]))
    }
  }
}
</script>

<style lang="less" scoped>

  .title-style {
    position: relative;
    background-color: white;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #000000;
    font-size: 28px;
  }

  .table-tools-area {
    width: 100%;
    background-color: rgb(200, 221, 255)
  }

  .button {
    color: #fff;
    background: inherit;
    border: none inherit;
  }

  .button:hover {
    background-color: #49c7ff;
  }

  .button:active {
    background-color: #49c7ff;
  }

  .button:focus {
    background-color: #49c7ff;
  }

  .button-icon {
    margin: 5px;
  }

  .table-footer {
    background: rgba(255, 255, 255, 0.7);
    height: 40px;
  }
</style>
