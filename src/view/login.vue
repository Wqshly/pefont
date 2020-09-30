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
            <p>账&nbsp;&nbsp;号&nbsp;&nbsp;登&nbsp;&nbsp;录</p>
          </div>
          <el-form :model="loginForm" style="padding-top: 50px" :rules="rules" ref="loginForm">
            <el-form-item >
              <template>
                <el-select style="width: 100%;" v-model="loginForm.schoolId" filterable  placeholder="请选择学校">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </template>
            </el-form-item>
            <el-form-item prop="usernumber">
              <el-input v-model="loginForm.usernumber" placeholder="请输入学号"
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
              <el-checkbox style="float: left;margin-left: 20px" v-model="loginForm.remember">记住我的登录状态</el-checkbox>
            </el-form-item>
            <el-form-item>
              <el-button style="float: left;width: 100px;" @click="login('loginForm')">登录</el-button>
              <el-button style="float: right;width: 100px;" @click="register('loginForm')">注册</el-button>
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
    import {clone} from "../api/clone";
export default {
    data() {
      return {
        VRCODE:false,
        loginForm: {
            schoolId: null,
            usernumber: null,
            password: null,
            "username" : "未设置",
            remember: false,
            identity:'学生',
        },
        registerForm: {
            userNumber : "未设置",
            username : "未设置",
            password : "123456",
            age : 0,
            sex : "未设置",
            unit : "未设置",
            identity : "学生",
            phone : "未设置",
            email : "未设置",
            schoolId : null
        },
        options: [
            {
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
            }
        ],
        value: '',
        rules: {
          usernumber: [
            {required: true, message: '请输入学号或邮箱', trigger: 'blur'},
            {min: 2, max: 20, message: '请输入正确的学号或邮箱', trigger: 'blur'}
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

      requestSchoolList(){
          let url = '/api/school/querySchoolList';
          api.get(url).then(res => {
              let _this = this;
              if (res.code === 0) {
                  _this.options=[];
                  if(res.data != null){
                      let data = {};
                      if(res.data.length === undefined){
                          data.label = res.data.schoolName;
                          data.value = res.data.id;
                          _this.options.push(res.data);
                      }else{
                          for(let i = 0;i < res.data.length; ++i){
                              data.label = res.data[i].schoolName;
                              data.value = res.data[i].id;
                              _this.options.push(clone.deepClone(data));
                          }
                      }

                  }
              }
          })
      },
      login (formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              let url = '/api/login/login';
              api.post(url, this.loginForm).then(res => {
                  let _this = this;
                  if (res.code === 0) {
                    _this.$router.push('/home');
                    _this.$store.commit('setUser',res.data);
                    console.log(_this.$store.state.user);
                  } else {
                    this.$message.error(res.msg);
                  }
              })
            }

        });
      },
      register(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  this.registerForm.password = this.loginForm.password;
                  this.registerForm.schoolId = this.loginForm.schoolId;
                  this.registerForm.userNumber = this.loginForm.usernumber;
                  let url = '/api/user/addUser';
                  api.post_JSON(url, this.registerForm).then(res => {
                      if (res.code === 0) {
                          this.$message.success('成功!');
                      } else {
                          this.$message.error(res.msg);
                      }
                  });
              }
          });
      },
    },
    mounted(){
        particlesJS.load('particles','/static/particles.json');
    },
    created() {
        this.requestSchoolList();
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
