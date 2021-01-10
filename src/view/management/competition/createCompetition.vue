<template>
  <div class="container">
    <div class="form-style">
      <div class="title-style">
        <h1>{{step === 1 ? '创建比赛' : '添加比赛项'}}</h1>
      </div>
      <div v-show="step === 1">
        <el-form :model="ruleForm" label-width="100px" :rules="rules" ref="ruleForm">
          <el-form-item label="比赛名称：" prop="activityName">
            <el-input v-model="ruleForm.activityName" placeholder="请输入比赛名称"></el-input>
          </el-form-item>
          <el-form-item label="参赛院系：" prop="college">
            <el-checkbox-group class="transition-box" v-model="ruleForm.college">
              <el-checkbox v-for="(item,index) in college"
                           :key="index"
                           :label="item.collegeName"
                           :value="item.id">{{item.collegeName}}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="报名时间：" prop="signUpTime">
            <el-date-picker v-model="ruleForm.signUpTime" type="datetimerange"
                            start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="参赛时间：" prop="activityTime">
            <el-date-picker v-model="ruleForm.activityTime" type="datetimerange"
                            start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期"></el-date-picker>
          </el-form-item>
          <el-form-item label="比赛地点：" prop="activityArea">
            <el-input v-model="ruleForm.activityArea" placeholder="活动地点" clearable></el-input>
          </el-form-item>
          <el-form-item label="总负责人：">
            <el-input v-model="ruleForm.contact" placeholder="输入负责人姓名">
            </el-input>
          </el-form-item>
          <el-form-item label="联系方式：">
            <el-input v-model="ruleForm.contactPhone" placeholder="输入联系人电话号码">
            </el-input>
          </el-form-item>
          <el-form-item label="宣传海报：">
            <img-upload ref="imgUpload" v-on:upload-pic="uploadPic" :options="picOptions"
                        img-width="240px" img-height="120px"></img-upload>
          </el-form-item>
          <el-button type="primary" style="float: right;" @click.native="submitGame('ruleForm')">保存信息</el-button>
        </el-form>
      </div>
      <div v-show="step !== 1" class="competition-tabs">
        <el-tabs v-model="tabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane v-for="(item,index) in projects"
                       :key="index"
                       :name="item.name"
                       :label="item.title + (index+1)">
            <el-form :model="item" label-width="140px">
              <el-form-item label="项目名：" prop="title" required>
                <el-input placeholder="比赛名称" v-model="item.projectName"></el-input>
              </el-form-item>
              <el-form-item label="是否为团队运动：">
                <el-switch active-text="是" inactive-text="否" v-model="item.team"></el-switch>
              </el-form-item>
              <el-form-item label="每个团队人数：" v-if="item.team">
                <el-input placeholder="最少" v-model="item.minmum" style="width:70px">
                </el-input>&nbsp;&nbsp;-&nbsp;&nbsp;
                <el-input placeholder="最多" v-model="item.maximum" style="width:70px">
                </el-input>&nbsp;&nbsp;人
              </el-form-item>
              <el-form-item :label="item.team ? '最大参赛团队数：' : '最大参赛人数：'">
                <el-input
                  v-model="item.teamPeope">
                </el-input>
              </el-form-item>
              <el-form-item label="积分设置：">
                <el-input v-model="item.integralSet"></el-input>
              </el-form-item>
              <el-form-item label="报名条件：">
                <el-input v-model="item.signingCondition"
                          type="textarea"
                          :rows="3"
                          maxlength="150"
                          placeholder="报名条件"
                          show-word-limit>
                </el-input>
              </el-form-item>
              <el-form-item label="报名费用：">
                <div>
                  <el-input v-model="item.moneyEveryPeople" style="width:100px"></el-input>
                  元/人
                </div>
              </el-form-item>
              <el-form-item label="是否招裁判">
                <el-switch active-text="是"
                           inactive-text="否"
                           v-model="item.judge">
                </el-switch>
              </el-form-item>
              <el-form-item label="裁判条件" v-if="item.judge">
                <el-input v-model="item.refereeConditions"
                          type="textarea"
                          :rows="3"
                          maxlength="150"
                          placeholder="裁判条件"
                          show-word-limit>
                </el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <el-button type="primary" style="float: right;" @click.native="submit()">完成添加</el-button>
        <el-button type="primary" style="float: right;" @click.native="release()">发起比赛</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import imgUpload from '@/components/ImgUpload'

export default {
  name: 'createCompetition',
  components: {
    imgUpload
  },
  data () {
    return {
      gameID: -1,
      step: 1,
      ruleForm: {
        college: []
      },
      projects: [
        {
          title: '比赛项目',
          name: 1
        }
      ],
      projectTest: [
        {
          activityId: 98,
          projectName: '测试1',
          team: true
        },
        {
          activityId: 98,
          projectName: '测试2',
          team: false
        }
      ],
      tabIndex: 1,
      tabsValue: 1,
      college: [],
      picOptions: {
        fixedNumber: [5, 3]
      },
      rules: {
        activityName: [
          {required: true, message: '请输入比赛名称', trigger: 'blur'},
          {min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur'}
        ],
        college: [
          {required: true, message: '请勾选参赛学院', trigger: 'blur'}
        ],
        activityArea: [
          {required: true, message: '请指定活动地点', trigger: 'blur'}
        ],
        signUpTime: [
          {required: true, message: '请选择起止日期', trigger: 'blur'}
        ],
        activityTime: [
          {required: true, message: '请选择起止日期', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // 查询是否有未发布的比赛
    checkUnpublishedCompetition () {
      this.$api.http.get('/activity/getPreActivity/')
        .then(res => {
          if (res.data.length !== 0) {
            this.$message.warning('您有未发布的活动!')
          }
        })
        .catch()
    },
    getCollege () {
      this.$api.http.get('/college/queryCollegeList')
        .then(res => {
          this.college = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    // tabs的动态增加实现
    handleTabsEdit (targetName, action) {
      if (action === 'add') {
        this.tabIndex++
        this.projects.push({
          title: '比赛项目',
          name: this.tabIndex
        })
        this.tabsValue = this.tabIndex
      }
      if (action === 'remove') {
        if (this.tabIndex !== 1) {
          let tabs = this.projects
          let activeName = this.tabsValue
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }
          this.tabIndex--
          this.tabsValue = activeName
          this.ruleForm.projects = tabs.filter(tab => tab.name !== targetName)
        }
      }
    },
    // 将图片赋到表单中
    async uploadPic (data) {
      let arr = data.file.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bytes = atob(arr[1]) // 解码base64
      let n = bytes.length
      let ia = new Uint8Array(n)
      while (n--) {
        ia[n] = bytes.charCodeAt(n)
      }
      this.ruleForm.pictureFile = new File([ia], data.name, {type: mime})
      // this.ruleForm.pictureFile = data.file
    },
    // 创建比赛
    submitGame (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var collegeList = ''
          this.ruleForm.college.forEach((item) => {
            collegeList += item
            collegeList += ','
          })
          this.ruleForm.collegeList = collegeList
          this.ruleForm.registrationStartTime = this.ruleForm.signUpTime[0]
          this.ruleForm.registrationClosingTime = this.ruleForm.signUpTime[1]
          this.ruleForm.startTime = this.ruleForm.activityTime[0]
          this.ruleForm.endTime = this.ruleForm.activityTime[1]
          // 将json转为formData
          const formData = new FormData()
          Object.keys(this.ruleForm).forEach((item) => {
            formData.append(item, this.ruleForm[item])
          })
          let url = '/activity/preAddActivity/'
          this.$api.http.upload(url, formData)
            .then(res => {
              let _this = this
              if (res.code === 0) {
                this.gameID = res.data
                _this.$message.success('成功!')
                _this.$confirm('您已成功创建活动，点击确认，并添加具体比赛项目！', '提示', {
                  confirmButtonText: '确认',
                  cancelButtonText: '取消'
                }).then(() => {
                  this.step++
                }).catch(() => {
                })
              } else {
                _this.$message.error(res.msg)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        }
      })
    },
    // 给比赛添加具体项
    submit () {
      this.projects.forEach(item => {
        item.activityId = this.gameID
        console.log(item)
      })
      this.$api.post_JSON('/api/project/addProject', this.projects)
        .then(res => {
          let _this = this
          if (res.code === 0) {
            _this.$message.success('成功!')
            _this.$confirm('您已成功为比赛添加了比赛项！', '提示', {
              confirmButtonText: '确认',
              cancelButtonText: '取消'
            })
          } else {
            _this.$message.error(res.msg)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 发布比赛
    release () {
      this.$api.get('/api/project/queryProjectByActivityId/' + this.gameID)
        .then(res => {
          if (res.data.length !== 0) {
            let url = '/api/activity/release/' + this.gameID
            this.$api.get(url)
              .then(res => {
                let _this = this
                if (res.code === 0) {
                  _this.$message.success('成功!')
                  _this.$confirm('比赛已正式发布，运动员可参加报名！', '提示', {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消'
                  })
                } else {
                  _this.$message.error(res.msg)
                }
              })
              .catch((err) => {
                console.log(err)
              })
          } else {
            this.$message.warning('您尚未为比赛添加比赛项，不能发布!')
          }
        })
        .catch()
    }
  },
  mounted () {
    this.checkUnpublishedCompetition()
    this.getCollege()
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

  .form-style {
    margin: 0 auto;
    width: 700px;
    background-color: #ffffff;
    padding: 20px 0;
  }

  .title-style {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 20px 0;
  }

  .competition-tabs {
    width: 100%;
    margin-bottom: 150px;
    max-width: 860px;
  }

</style>

<style>
  .avatar-uploader {
    float: left;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    background: rgba(255, 255, 255, 0.5);
    border: 2px dashed #8c939d;
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
</style>
