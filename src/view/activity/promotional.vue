<template>
  <div class="activity-promotional">
    <div style="margin: 0 auto; width: 700px;background-color: #ffffff">
      <p style="text-align: center;font-size: 30px; padding: 20px;">发起活动</p>
      <el-form style="padding-bottom: 20px;" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item label="活动名称：" prop="activityName">
          <el-input v-model="ruleForm.activityName" placeholder="请输入活动名称"></el-input>
        </el-form-item>
        <el-form-item label="活动简介：" prop="activityContent">
          <el-input v-model="ruleForm.activityContent" placeholder="请输入活动简介(简介字数不要超过规定字数)"
                    type="textarea" maxlength="250" :autosize="{ minRows: 3, maxRows: 5}" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="活动地点：" prop="activityArea">
          <el-input v-model="ruleForm.activityArea" placeholder="活动地点" clearable></el-input>
        </el-form-item>
        <el-form-item label="报名起止：" prop="signUpTime">
          <el-date-picker v-model="ruleForm.signUpTime" type="daterange"
                          start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="活动起止：" prop="activityTime">
          <el-date-picker v-model="ruleForm.activityTime" type="daterange"
                          start-placeholder="开始日期" range-separator="至" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="活动缴费：" prop="costDescription">
          <el-input v-model="ruleForm.costDescription" placeholder="补充说明(缴费用途等说明性文字)">
            <el-select v-model="ruleForm.cost" slot="prepend">
              <el-option v-for="(item, index) in options.fee"
                         :key="index"
                         :label="item.value"
                         :value="item.value"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="人数限制：">
          <el-input-number v-model="ruleForm.peopleNum" :min="1"/>
        </el-form-item>
        <el-form-item label="联系方式：">
          <el-input v-model="ruleForm.contactPhone" placeholder="输入联系人电话号码">
          </el-input>
        </el-form-item>
        <el-form-item label="活动海报：">
          <div style="height:fit-content;width:fit-content">
            <el-upload
              class="avatar-uploader"
              ref="upload"
              :show-file-list="false"
              :auto-upload="false"
              :on-success="handleAvatarSuccess"
              :on-change="onchange"
              :before-upload="beforeAvatarUpload">
              <img width="100%" v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar" alt="">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button style="float: right;" type="primary" @click="submitForm('ruleForm')">创建活动</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {api} from '@/api/ajax'

export default {
  name: 'activity-promotional',

  data () {
    return {
      notifyPromise: Promise.resolve(),
      ruleForm: {
        activityName: '', // 活动名称
        activityContent: '', // 活动简介
        activityArea: '', // 活动地点
        signUpTime: '', // 报名起讫时间
        registrationStartTime: '', // 报名开始时间
        registrationClosingTime: '', // 报名结束时间
        activityTime: '', // 活动起讫时间
        startTime: '', // 活动开始时间
        endTime: '', // 活动结束时间
        cost: '', // 活动花费
        costDescription: '', // 花费说明
        peopleNum: 1, // 人数限制
        contactPhone: '', // 联系方式
        pictureFile: {}, // 上传的图片
        imageUrl: ''
      },
      options: {
        fee: [
          { value: '免费' },
          { value: '50元以下' },
          { value: '20-200元' },
          { value: '200-500元' },
          { value: '500-1000元' },
          { value: '1000元以上' }
        ]
      },
      rules: {
        activityName: [
          {required: true, message: '请输入活动名称', trigger: 'blur'},
          {min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur'}
        ],
        activityContent: [
          {required: true, message: '请输入活动简介', trigger: 'change'}
        ],
        activityArea: [
          {required: true, message: '请指定活动地点', trigger: 'change'}
        ],
        class: [
          {required: true, message: '请选择活动性质', trigger: 'change'}
        ],
        signUpTime: [
          {required: true, message: '请选择起止日期', trigger: 'blur'}
        ],
        activityTime: [
          {required: true, message: '请选择起止日期', trigger: 'blur'}
        ],
        costDescription: [
          {required: true, message: '请输入费用说明', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    notify (msg) {
      this.notifyPromise = this.notifyPromise.then(this.$nextTick).then(() => {
        this.$notify({
          title: msg
        })
      })
    },

    // 表单提条按钮,填写合法逻辑=>上传图片逻辑
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.submitUpload()
        } else {
          this.notify('error submit!!')
          return false
        }
      })
    },

    // 上传图片逻辑=>beforeAvatarUpload=>handleAvatarSuccess
    submitUpload () {
      this.$refs.upload.submit()
    },
    remote_api (file) {
      let url = '/api/activity/addActivity/'
      this.ruleForm.publisherId = this.$store.state.user.id
      this.ruleForm.registrationStartTime = this.ruleForm.signUpTime[0]
      this.ruleForm.registrationClosingTime = this.ruleForm.signUpTime[1]
      this.ruleForm.startTime = this.ruleForm.activityTime[0]
      this.ruleForm.endTime = this.ruleForm.activityTime[1]
      this.ruleForm.pictureFile = file
      // 将json转为formData
      const formData = new FormData()
      Object.keys(this.ruleForm).forEach((item) => {
        formData.append(item, this.ruleForm[item])
      })
      api.upload(url, formData).then(res => {
        let _this = this
        if (res.code === 0) {
          _this.$message.success('成功!')
          _this.$alert('您已成功创建活动，点击确认将跳转到活动首页！', '提示', {
            confirmButtonText: '确认',
            callback: action => {
              _this.$router.push('/activity/management')
            }
          })
        } else {
          _this.$message.error(res.msg)
        }
      })
    },
    // 上传前对图片类型和大小进行判断
    beforeAvatarUpload (file) {
      console.log(this.ruleForm.signUpTime)
      // const isJPG = file.type === 'image/jpeg';
      let isLt2M = file.size / 1024 / 1024 < 2
      let _URL = window.URL || window.webkitURL

      if (!isLt2M) {
        this.$notify.error({
          title: '请更换图片',
          message: '上传图片大小不能超过 2MB!',
          duration: 0
        })
      }
      new Promise((resolve, reject) => {
        let img = new Image()
        img.src = _URL.createObjectURL(file)
        img.onload = function () {
          if (this.width > this.height) {
            resolve(true)
          } else {
            resolve(false)
          }
        }
      }).then((res) => {
        if (!res) {
          this.$notify.error({
            title: '请更换图片',
            message: '上传图片的宽度必须大于高度!',
            duration: 0
          })
        } else {
          this.remote_api(file)
        }
      })
      return false
    },

    handleAvatarSuccess (res, file) {
      this.notify('永远不会到达的代码 因为before返回的false')
      // 图片上传完毕，开始传输表单
      this.notify('上传成功')
    },
    // 选择了新的图片
    onchange (file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw)
    }

  }
}
</script>

<style>

  .activity-promotional .el-select > .el-input {
    width: 130px !important;
  }

  .activity-promotional .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .activity-promotional .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .activity-promotional .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .activity-promotional .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .activity-promotional .el-form {
    width: 100%;
    max-width: 660px;

  }

</style>
