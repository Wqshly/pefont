<template>
  <div class="fill-contain">
    <vue-particles class="login-background"
                   color="#dedede"
                   :particleOpacity="0.7"
                   :particlesNumber="80"
                   shapeType="circle"
                   :particleSize="4"
                   linesColor="#dedede"
                   :linesWidth="1"
                   :lineLinked="true"
                   :lineOpacity="0.4"
                   :linesDistance="150"
                   :moveSpeed="3"
                   :hoverEffect="true"
                   hoverMode="grab"
                   :clickEffect="true"
                   clickMode="push"
    >
    </vue-particles>
    <div class="container">
      <div class="form-position">
        <div style="margin: 0 auto;text-align: center;margin-bottom: -15px;">
          <img class="logo-style" src="../assets/logo-pe.png" />
        </div>
        <div class="form-container">
          <div class="form-container-border">
            <div style="margin: 10px auto;text-align: center;">
              <p style="font-size: 24px;text-align: center">登&nbsp;&nbsp;&nbsp;录</p>
            </div>
            <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm"  v-show="!VRCODE">
              <el-form-item prop="schoolId">
                <el-select style="width: 100%;" v-model="loginForm.schoolId" filterable placeholder="请选择学校">
                  <el-option v-for="(item,index) in schoolList"
                             :key="index"
                             :label="item.schoolName"
                             :value="item.id">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="usernumber">
                <el-input v-model="loginForm.usernumber" placeholder="请输入学号" clearable></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" show-password clearable></el-input>
              </el-form-item>
              <el-form-item style="margin-bottom: 10px;">
                <p class="login-text-btn" style="float: left;" @click="show">扫码登录</p>
                <p class="login-text-btn" style="float: right;" @click="show">忘记密码？</p>
              </el-form-item>
              <el-form-item>
                <el-button style="width: 100%; float: left;" @click="login('loginForm')" :disabled="loginDisable">登录</el-button>
              </el-form-item>
            </el-form>
            <div v-show="VRCODE">
              <div class="form-row">
                <img src="../assets/img/login/app_icon.png" alt="">
              </div>
              <p class="form-row login-text-btn" @click="show">返回账号登录</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      VRCODE: false,
      loginForm: {
        schoolId: null,
        usernumber: null,
        password: null
      },
      loginFormRules: {
        schoolId: [
          {required: true, message: '请选择学校', trigger: 'blur'}
        ],
        usernumber: [
          {required: true, message: '用户名不能为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不能为空', trigger: 'blur'}
        ]
      },
      schoolList: [],
      loginDisable: false
    }
  },
  methods: {
    show () {
      this.VRCODE = !this.VRCODE
    },
    // 获取学校信息列表
    getSchoolList () {
      this.$api.http.get('/school/querySchoolList')
        .then(res => {
          this.schoolList = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.loginDisable) {
            this.loginDisable = true
            let url = '/login/login'
            console.log(this.loginForm)
            this.$api.http.post(url, this.loginForm)
              .then(res => {
                console.log(res.data)
                this.loginDisable = false
                var session = JSON.stringify(res.data)
                sessionStorage.setItem('userInfo', session)
                this.$router.push('/home')
              })
              .catch(err => {
                this.loginDisable = false
                console.log(err)
              })
          }
        }
      })
    },
    keyDown (e) {
      if (e.keyCode === 13) {
        this.login()
      }
    }
  },
  created () {
    window.addEventListener('keydown', this.keyDown)
  },
  // // 解决在mounted中创建的动画造成的内存泄露问题。
  // beforeDestroy () {
  //   // 销毁 particlesJS
  //   if (pJSDom && pJSDom.length > 0) {
  //     pJSDom.forEach(pJSDomItem => {
  //       pJSDomItem.pJS.fn.vendors.destroypJS()
  //     })
  //   }
  //   window.removeEventListener('keydown', this.keyDown)
  // },
  mounted () {
    this.getSchoolList()
  }
}
</script>

<style type="less" scoped>

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .form-position {
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
  }

  .form-container {
    /*margin: auto;*/
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    height: fit-content;
    width: 550px;
    /*-webkit-box-shadow:0 3px 3px #c8c8c8 ;*/
    /*-moz-box-shadow:0 3px 3px #c8c8c8 ;*/
    /*box-shadow:0 3px 3px #c8c8c8*/
  }

  .form-container-border {
    margin: 0 auto;
    width: 500px;
  }

  .login-background {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../assets/login-pic.jpg) no-repeat;
    background-size:100% 100%;;
  }

  .logo-style {
    width: auto;
    height: 40px;
  }

  .form-row {
    padding: 10px 0;
    /*display: flex;*/
    display: -webkit-flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }

  .title {
    font-size: 24px;
    font-weight: 400;
    padding-bottom: 20px;
  }

  .login-text-btn {
    cursor: pointer;
    font-size: 15px;
    color: #409eff;
    /*float: right;*/
  }

  img {
    width: 350px;
    height: 350px
  }

  @media screen and (max-width: 600px) {
    img {
      width: 100%;
      height: 100%;
    }

    .form-container {
      width: 100%;
    }
  }
</style>
