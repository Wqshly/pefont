<template>
  <div class="container">
    <basic-table-temp :ref="refName"
                      :delete-record-url="deleteUrl"
                      :title-show="false"
                      :table-header-list="tableHeaderList"
                      @click-row="clickRow"
                      @add-record="addRecord"
                      @edit-record="editRecord"
                      @upload-excel="uploadExcelMethod">
      <el-form slot="addForm" :model="addForm" style="overflow: auto" label-width="100px" ref="addForm">
        <el-form-item label="学院：">
          <el-select v-model="addForm.college" placeholder="请选择" @click.native="getCollege">
            <el-option v-for="(item,index) in collegeList"
                       :key="index"
                       :label="item.collegeName"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级：">
          <el-select v-model="addForm.classes" placeholder="请选择" @click.native="getClass">
            <el-option v-for="(item,index) in classList"
                       :key="index"
                       :label="item.className"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学号：">
          <el-input v-model="addForm.number"></el-input>
        </el-form-item>
        <el-form-item label="姓名：">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="性别：">
          <el-radio v-model="addForm.sex" label="男">男</el-radio>
          <el-radio v-model="addForm.sex" label="女">女</el-radio>
        </el-form-item>
      </el-form>
      <div slot="excelForm">
        <div class="upload-excel-col">
          <div style="float: left;padding-right: 20px;">
            <p>1.下载导入模板: </p>
          </div>
          <el-button>
            下载&nbsp;<font-awesome-icon :icon="['fas', 'download']" class="button-icon"></font-awesome-icon>
          </el-button>
        </div>
        <div class="upload-excel-col">
          <div style="float: left;padding-right: 20px;">
            <p>2.上传导入文件: </p>
          </div>
          <el-upload ref="upload"
                     action
                     :auto-upload="false"
                     limit="1"
                     accept=".xls,.xlsx"
                     :file-list="fileList"
                     :before-upload="beforeUpload"
                     :on-change="handleChange"
                     :on-remove="handleRemove">
            <el-button>
              上传&nbsp;<font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="button-icon"></font-awesome-icon>
            </el-button>
          </el-upload>
        </div>
      </div>
    </basic-table-temp>
  </div>
</template>

<script>

export default {
  name: 'studentManage',
  data () {
    return {
      refName: 'studentForm',
      refreshObj: {},
      refreshUrl: '/student/queryStudentInfoBySchool',
      addUrl: '/student/addStudent',
      deleteUrl: '/student/deleteStudent',
      tableHeaderList: [
        {value: 'collegeName', label: '所属学院', width: '160'},
        {value: 'classesName', label: '所属班级', width: '160'},
        {value: 'studentName', label: '学生姓名', width: '160'},
        {value: 'studentNumber', label: '学生学号', width: '220'},
        {value: 'term', label: '当前学期', width: '120'},
        {value: 'sex', label: '性别', width: '80'},
        {value: 'birthday', label: '出生日期', width: '120'},
        {value: 'gradeNumber', label: '年级编号', width: '120'},
        {value: 'nationalCode', label: '民族编号', width: '140'},
        {value: 'idCard', label: '身份证号', width: '140'},
        {value: 'address', label: '家庭住址', width: '140'}
      ],
      addForm: {college: '', classes: '', number: '', name: '', sex: ''}, // 新增
      collegeList: [],
      classList: [],
      fileList: []
    }
  },
  methods: {
    async addRecord () {
      this.addForm.shcoolId = 1
      console.log(this.addForm)
      await this.$refs[this.refName].createMethod('/student/addStudent', this.addForm)
    },
    async editRecord () {
      await this.$refs[this.refName].updateMethod('/questionnaire/editQuestionInfo', this.editQuestionInfoForm)
    },
    // 点击将基本信息项的某一行信息付给编辑表
    clickRow (row) {
      this.editQuestionInfoForm = row
    },
    // 获取学院列表
    getCollege () {
      this.$api.http.get('/college/queryCollegeList')
        .then(res => {
          this.collegeList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // 获取班级列表
    getClass () {
      if (this.addForm.college !== '') {
        this.$api.http.get('/classes/queryClassesList/' + this.addForm.college)
          .then(res => {
            this.classList = res.data
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        this.$message.warning('请先选择学院!')
      }
    },
    async beforeUpload (file) {
      const extension = file.name.substring(file.name.lastIndexOf('.') + 1)
      console.log(extension)
      const size = file.size / 1024 / 1024
      if (extension !== 'xlsx' && extension !== 'xls') {
        this.$message.warning('只能上传后缀是.xls或.xlsx的文件')
      }
      if (size > 10) {
        this.$message.warning('文件大小不得超过10M')
      }
    },
    // 文件状态改变
    async handleChange (file, fileList) {
      if (file) {
        this.fileList = fileList.slice(-1)
      }
    },
    // 删除文件
    async handleRemove (file, fileList) {
      this.fileList = []
    },
    // 上传Excel方法
    uploadExcelMethod () {
      if (this.fileList.length === 0) {
        this.$message.warning('请上传文件')
      } else {
        const data = new FormData()
        const UploadExcel = this.fileList[0].raw
        data.append('excelFile', UploadExcel)
        this.$api.http.upload('/importFile/ImportFileClass', data)
          .then(res => {
            this.$message.success('导入成功！')
            this.$refs[this.refName].refreshRecord()
          })
      }
    }
  },
  mounted () {
    this.$refs[this.refName].getRecord(this.refreshUrl)
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    max-width: 1140px;
    min-height: 100px;
    margin: 0 auto;
    background-color: white;
    padding-bottom: 50px;
  }

  .upload-excel-col {
    align-items: center;
    display: flex;
    margin: 20px 0 20px 40px;
  }
</style>
