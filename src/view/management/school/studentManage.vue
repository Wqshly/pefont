<template>
    <div class="container">
      <basic-table-temp :ref="refName"
                        :delete-record-url="deleteUrl"
                        :title-show="false"
                        :table-header-list="tableHeaderList"
                        @click-row="clickRow"
                        @add-record="addRecord"
                        @edit-record="editRecord">
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
        {value: 'college', label: '学院', width: '160'},
        {value: 'classes', label: '班级', width: '160'},
        {value: 'number', label: '学号', width: '180'},
        {value: 'name', label: '姓名', width: '140'},
        {value: 'sex', label: '性别', width: '140'}
      ],
      addForm: {college: '', classes: '', number: '', name: '', sex: ''}, // 新增
      collegeList: [],
      classList: []
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
    }
  },
  mounted () {
    this.$refs[this.refName].getRecord(this.refreshUrl, this.refreshObj)
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
</style>
