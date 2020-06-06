<template>
  <div>
  <div id="particles"></div>
  <div> <!--class="fill-contain background-pic"-->
    <div class="logo ">
      <img src="../assets/brand.png" alt="">
    </div>
    <transition name="el-fade-in-linear">
      <div class="form-container transition-box" v-show="!VRCODE">
        <section class="main-form">
          <div class="l-QR-login" style="" @click="show">
            <img src="../assets/img/login/QR_1.png" alt="">
            <img src="../assets/img/login/QR_2.png" alt="">
          </div>
          <div class="title">
            <p>学&nbsp;&nbsp;号&nbsp;&nbsp;登&nbsp;&nbsp;录</p>
          </div>
          <el-form :model="loginForm" style="padding-top: 50px" :rules="rules" ref="loginForm">
            <el-form-item prop="phone">
              <template>
                <el-select style="width: 100%;" v-model="loginForm.school" placeholder="请选择学校">
                  <el-option-group
                    v-for="group in options"
                    :key="group.label"
                    :label="group.label">
                    <el-option
                      v-for="item in group.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-option-group>
                </el-select>
              </template>
            </el-form-item>
            <el-form-item prop="phone">
              <el-input v-model="loginForm.phone" placeholder="请输入学号"
                        prefix-icon="el-icon-s-custom"
                        clearable>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 10px" prop="password">
              <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-key"
                        show-password clearable>
              </el-input>
            </el-form-item>
            <el-form-item style="margin-bottom: 5px;">
              <el-link :underline="false" style="float: right;margin-right: 20px" href="https://element.eleme.io" target="_blank">忘记密码</el-link>
              <el-checkbox style="float: left;margin-left: 20px" v-model="loginForm.remember">记住密码</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button style="float: left;width: 100px;" @click="login('loginForm')">登录</el-button>
              <el-button style="float: right;width: 100px;" @click="register">注册</el-button>
            </el-form-item>
          </el-form>
          <div class="QRcode">
            <div class="QRcode_app">
              <img style="width: 80px" src="../assets/img/login/app_icon.png" alt="">
              <p>扫码下载APP</p>
            </div>
            <div class="QRcode_weixin">
              <img style="width: 80px" src="../assets/img/login/wenxin_icon.png" alt="">
              <p>扫码关注微信</p>
            </div>
          </div>
        </section>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <div class="form-container transition-box" v-show="VRCODE">
        <section class="main-form">
          <div class="l-QR-login" style="" @click="show">
            <img src="../assets/img/login/AD_1.png" alt="">
            <img src="../assets/img/login/AD_2.png" alt="">
          </div>
          <div class="title">
            <p>扫&nbsp码&nbsp登&nbsp录</p>
          </div>
          <div class="QRcode">
            <div class="QRcode_app " style="margin: auto auto">
              <img style="width: 350px;height: 350px" src="../assets/img/login/app_icon.png" alt="">
              <p>扫码下载APP</p>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
  </div>
</template>

<script>
    import {api}  from '@/api/ajax'
    import particles from 'particles.js'
export default {
    data() {
      return {
        VRCODE:false,
        loginForm: {
          school: null,
          phone: null,
          password: null,
          remember: false,
        },
        options: [{
            label: '热门城市',
            options: [{
                value: 'Shanghai',
                label: '上海'
            }, {
                value: 'Beijing',
                label: '北京'
            }]
        }, {
            label: '城市名',
            options: [{
                value: 'Chengdu',
                label: '成都'
            }, {
                value: 'Shenzhen',
                label: '深圳'
            }, {
                value: 'Guangzhou',
                label: '广州'
            }, {
                value: 'Dalian',
                label: '大连'
            }]
        }],
        value: '',
        rules: {
          phone: [
            {required: true, message: '请输入员工编号或手机号', trigger: 'blur'},
            {min: 2, max: 11, message: '请输入正确的手机号或员工编号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      show(){
        this.VRCODE=!this.VRCODE;
      },
      login (formName) {
          this.$refs[formName].validate((valid) => {
          // console.log(this[formName].password)
            if (valid) {
              const url = '/user/login';
              api.post(url, this.loginForm).then(res => {
                  console.log(res.data);
                  let _this = this;
                  if (res.data.code === 0) {/*
                    sessionStorage.setItem('save_user_id', res.data.data.id)
                    sessionStorage.setItem('save_username', res.data.data.name)*/
                    _this.$router.push('/home')
                  } else {
                    this.$message({
                      message: '账号或密码错误！请重试！',
                      type: 'error'
                    });
                  }
              })
            }
        });
      },
      register () {
        api.get('/staff/staffCount').then(res => {
            console.log(res.data)
            if (res.data.data === 0) {
              this.$router.push('/initRegister')
            } else {
              this.$router.push('/register')
            }
          });
      }
    },
    mounted(){
        particlesJS.load('particles','/static/particles.json');
    }

}
</script>

<style lang="less" scoped>
  @import "../style/style";

  #particles{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dcdfe6;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
/*
  .background-pic {
    .background-img("../assets/img/login/login-bg.jpg");
  }*/

  .form-container {
    .global-centre(450px, 580px);
    .width-and-height(450px, 580px);
    box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .form-container2 {
    .global-centre(450px, 300px);
    .width-and-height(450px, 300px);

  }
  .QRcode {
    text-align: center;
    margin-top: 50px;
  }
  .QRcode div:nth-of-type(1) {
    margin-right: 90px;
  }
  .QRcode div {
    display: inline-block;
  }
  .l-QR-login {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .logo {
    .global-centre(120px, 750px);
    z-index: 999;
  }
  .logo img{
    border-radius: 12px;
    box-shadow:  12px 12px 23px #489dcf,
      -12px -12px 23px #dcdcdc;
    width: 120px;
    height: 120px;
    z-index: 999;
  }
</style>
