<template>
  <div>
    <div id="particles"></div>
    <div id="container">
      <div class="form-container" v-show="!VRCODE">
        <div class="form-row title">
          <p>用&nbsp;&nbsp;户&nbsp;&nbsp;登&nbsp;&nbsp;录</p>
        </div>
        <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
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
        </el-form>
        <div class="form-row">
          <el-button style="width: 100px;" @click="login('loginForm')" type="success" :disabled="loginDisable">登录</el-button>
          <p class="login-for-code" @click="show">扫码登录</p>
        </div>
      </div>
      <div class="form-container" v-show="VRCODE">
        <div class="form-row title">
          <p>扫&nbsp;码&nbsp;登&nbsp;录</p>
        </div>
        <div class="form-row">
          <img src="../assets/img/login/app_icon.png" alt="">
        </div>
        <p class="form-row login-for-code" @click="show">返回账号登录</p>
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
            this.$api.http.post(url, this.loginForm)
              .then(res => {
                this.loginDisable = false
                console.log(res.data)
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
    // 会造成内存泄漏，需要beforeDestroy中销毁
    particlesJS.load('particles', '/static/particles.json')
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

<style scoped>
  #particles {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dcdfe6;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  #container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }

  .form-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    height: fit-content;
    width: 500px;
  }

  .form-row {
    padding: 10px 0;
    display: flex;
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

  .el-form-row__content {
    display: flex !important;
    width: 100% !important;
    justify-content: space-around !important;
  }

  .login-for-code {
    cursor: pointer;
    font-size: 15px;
    color: #409eff;
  }

  img {
    width: 350px;
    height: 350px
  }

  @media screen and (max-width: 351px) {
    img {
      width: 100%;
      height: 100%;
    }

    .form-container {
      width: 100%;
    }
  }
</style>
