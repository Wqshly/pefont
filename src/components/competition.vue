<template>
  <div class="competition-promotional">
    <div class="competition-header"><h1>{{this.$store.state.competitionClass}}</h1></div>

    <el-form :model="ruleForm" label-width="120px" class="demo-form">
      <el-form-item label="比赛名称" prop="title">
        <el-input
          placeholder="比赛名称"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="参赛院系">
        <el-switch active-text="全选" v-model="ruleForm.college_checkAll"></el-switch>
        <transition name="el-zoom-in-top">
          <el-checkbox-group class="transition-box" v-model="ruleForm.college" v-show="!ruleForm.college_checkAll">
            <el-checkbox v-for="item in options.college "
                         :label="item"
                         :key="item"
                         :value="item"></el-checkbox>
          </el-checkbox-group>
        </transition>
      </el-form-item>

      <el-form-item label="参赛年级">
        <el-switch active-text="全选" v-model="ruleForm.activity_grade_checkAll"></el-switch>
        <transition name="el-zoom-in-top">
          <el-checkbox-group class="transition-box" v-model="ruleForm.activity_grade"
                             v-show="!ruleForm.activity_grade_checkAll">
            <el-checkbox v-for="item in options.activity_grade "
                         :label="item"
                         :key="item"
                         :value="item"></el-checkbox>
          </el-checkbox-group>
        </transition>
      </el-form-item>

      <el-form-item label="报名起止时间" prop="signUp_time_start">
        <el-date-picker
          v-model="ruleForm.signUp_time_start"
          type="datetime"
          placeholder="报名开始时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
        --
        <el-date-picker
          v-model="ruleForm.signUp_time_end"
          type="datetime"
          placeholder="报名结束时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="参赛起止时间" prop="activity_time_start">
        <el-date-picker
          v-model="ruleForm.activity_time_start"
          type="datetime"
          placeholder="比赛开始时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
        --
        <el-date-picker
          v-model="ruleForm.activity_time_end"
          type="datetime"
          placeholder="比赛结束时间"
          align="right"
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="比赛总负责人">
        <el-input
          placeholder="姓名"
          v-model="ruleForm.contact_name">
        </el-input>
      </el-form-item>

      <el-form-item label="负责人联系方式">
        <el-input
          placeholder="手机号等"
          v-model="ruleForm.contact_method">
        </el-input>
      </el-form-item>

      <el-form-item label="宣传海报">
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
    </el-form>

    <div style="width: 100%;"></div>

    <div class="competition-tabs">
      <div style="margin-bottom: 20px;">

      </div>
      <el-tabs v-model="editableTabsValue"
               type="card"
               :before-leave="beforeLeave"
               @tab-remove="removeTab">
        <el-tab-pane
          v-for="(item, index) in editableTabs"
          closable
          :key="item.name"
          :label="item.title + (index+1)"
          :name="item.name">

          <el-form :model="item.data" label-width="120px" class="demo-form2">
            <el-form-item label="项目名" prop="title">
              <el-input
                placeholder="比赛名称"
                v-model="item.data.projectName">
              </el-input>
            </el-form-item>

            <el-form-item label="是否为团队运动">
              <el-switch active-text="是"
                         inactive-text="否"
                         v-model="item.data.isTeam">
              </el-switch>
            </el-form-item>

            <el-form-item label="每个团队人数" v-if="item.data.isTeam">
              <el-input
                placeholder="最少"
                v-model="item.data.minTeamPeople"
                style="width:70px">
              </el-input>
              人&nbsp;&nbsp;&nbsp;至
              <el-input
                placeholder="最多"
                v-model="item.data.maxTeamPeople"
                style="width:70px">
              </el-input>
              人
            </el-form-item>

            <el-form-item :label="mappingCounts(item.data.isTeam)">
              <el-input
                v-model="item.data.maxNumberOfPartner">
              </el-input>
            </el-form-item>

            <el-form-item label="积分设置">
              <el-input
                v-model="item.data.mark">
              </el-input>
            </el-form-item>

            <el-form-item label="报名条件">
              <el-input v-model="item.data.registrationConditions"
                        type="textarea"
                        :rows="3"
                        maxlength="150"
                        placeholder="报名条件"
                        show-word-limit>
              </el-input>
            </el-form-item>

            <el-form-item label="比赛地点">
              <el-input v-model="item.data.competitionVenue"
                        type="textarea"
                        :rows="3"
                        maxlength="150"
                        placeholder="比赛地点"
                        show-word-limit>
              </el-input>
            </el-form-item>

            <el-form-item label="报名费">
              <el-switch active-text="有"
                         inactive-text="没有"
                         v-model="item.data.needMoney">
              </el-switch>
              <div v-if="item.data.needMoney">
                <el-input v-model="item.data.moneyEveryPeople"
                          style="width:100px">
                </el-input>
                元/人
              </div>
            </el-form-item>

            <el-form-item label="是否招裁判">
              <el-switch active-text="是"
                         inactive-text="否"
                         v-model="item.data.needReferee">
              </el-switch>
            </el-form-item>

            <el-form-item label="裁判条件" v-if="item.data.needReferee">
              <el-input v-model="registrationConditions"
                        type="textarea"
                        :rows="3"
                        maxlength="150"
                        placeholder="裁判条件"
                        show-word-limit>
              </el-input>
            </el-form-item>
          </el-form>

        </el-tab-pane>
        <el-tab-pane key="add" name="add">
          <span slot="label" style="padding: 8px;font-size:20px;font-weight:bold;">
            +
          </span>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="competition-footer">
      <el-button type="success" disabled @click="submitForm('ruleForm')">确认发起</el-button>
      <el-button type="primary" disabled @click="submitForm('ruleForm')">暂时保存</el-button>
    </div>
  </div>
</template>

<script>
  import {api} from '@/api/ajax'

  export default {

    data() {
      return {
        competitionClass: '田赛',
        havaPic: false,
        notifyPromise: Promise.resolve(),
        ruleForm: {
          title: '',
          signUp_time_start: '',
          signUp_time_end: '',
          activity_time_start: '',
          activity_time_end: '',
          college_checkAll: true,
          college: ['学院1', '学院2', '学院3', '学院4', '学院5', '学院6', '学院7', '学院8', '学院9', '学院10'],
          activity_grade_checkAll: true,
          activity_grade: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
          contact_name: '',
          contact_method: '',
          imageUrl: '',
        },

        editableTabsValue: '1',
        editableTabs: [
          {
            title: '比赛项目',
            name: '1',
            data: {
              projectName: '',
              isTeam: false,
              minTeamPeople: 4,
              maxTeamPeople: 4,
              maxNumberOfPartner: 15,
              mark: '',
              registrationConditions: '',
              competitionVenue: '',
              needMoney: false,
              moneyEveryPeople: 0,
              needReferee: '',
              refereeConditions: '',
            },
          },
        ],
        tabIndex: 1,
        pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '明天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周后',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        options: {
          college: ['学院1', '学院2', '学院3', '学院4', '学院5', '学院6', '学院7', '学院8', '学院9', '学院10'],
          activity_grade: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        },
      };
    },
    methods: {
      notify(msg) {
        this.notifyPromise = this.notifyPromise.then(this.$nextTick).then(() => {
          this.$notify({
            title: msg,
          });
        })
      },
      mappingCounts(e) {
        if (e) {
          return "最大参赛团队数";
        }
        return "最大参赛人数";
      },
      addTab() {
        this.tabIndex++;
        this.editableTabs.push({
          title: '比赛项目',
          name: this.tabIndex,
          data: {
            projectName: '',
            isTeam: false,
            minTeamPeople: 4,
            maxTeamPeople: 4,
            maxNumberOfPartner: 15,
            mark: '',
            registrationConditions: '',
            competitionVenue: '',
            needMoney: false,
            moneyEveryPeople: '',
            needReferee: '',
            refereeConditions: '',
          }
        });
        this.editableTabsValue = this.tabIndex;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      },
      beforeLeave(currentName, oldName) {
        if (currentName == "add") {
          this.addTab();
          return false
        }
      },
      //表单提条按钮,填写合法逻辑=>上传图片逻辑
      submitForm(formName) {
        if (this.havaPic == false) {
          this.$notify.error({
            title: '请上传一张海报',
            duration: 0
          });
        } else {
          if (1) {
            this.notify('正在提交，请稍后');
            this.submitUpload();
          } else {
            this.notify('error submit!!');
            return false;
          }
        }
      },

      //上传图片逻辑=>beforeAvatarUpload=>handleAvatarSuccess
      submitUpload() {
        this.$refs.upload.submit();
      },

      remote_api(file) {
        let url = '/api/activity/addActivity/' + this.$store.state.user.id;
        let data = new FormData();
        data.append('pictureFile', file);
        data.append('activityName', this.ruleForm.title);
        data.append('activityContent', this.ruleForm.description);
        data.append('publisherId', this.$store.state.user.id);
        data.append('publishData', new Date());
        data.append('contact', this.ruleForm.contact_name);
        data.append('contactPhone', this.ruleForm.contact_method);
        data.append('registrationClosingTime', this.ruleForm.signUp_time_end);
        data.append('registrationStartTime', this.ruleForm.signUp_time_start);
        data.append('startTime', this.ruleForm.activity_time_start);
        data.append('endTime', this.ruleForm.activity_time_end);
        data.append('activityClassification', this.ruleForm.class);
        data.append('eventLocation', this.ruleForm.position);
        data.append('participationFee', this.ruleForm.fee);

        api.upload(url, data).then(res => {
          if (res.code === 0) {
            this.$message.success('成功!');
            this.$router.push('/activity');
          } else {
            this.$message.error(res.msg);
          }
        })
      },

      //上传前对图片类型和大小进行判断
      beforeAvatarUpload(file) {
        // const isJPG = file.type === 'image/jpeg';
        let isLt2M = file.size / 1024 / 1024 < 2;
        let _URL = window.URL || window.webkitURL;

        if (!isLt2M) {
          this.$notify.error({
            title: '请更换图片',
            message: '上传图片大小不能超过 2MB!',
            duration: 0
          });
        }

        new Promise((resolve, reject) => {
          let img = new Image();
          img.src = _URL.createObjectURL(file)
          img.onload = function () {

            if (this.width > this.height) {
              resolve(true);
            } else {
              resolve(false);
            }
          };
        }).then((res) => {
          if (!res) {
            this.$notify.error({
              title: '请更换图片',
              message: '上传图片的宽度必须大于高度!',
              duration: 0
            });
            this.havaPic = false;
          } else {
            this.remote_api(file);
          }
        });
        return false;
      },

      handleAvatarSuccess(res, file) {
        this.notify('永远不会到达的代码 因为before返回的false');
        this.notify('上传成功');
      },
      //选择了新的图片
      onchange(file) {
        this.havaPic = true;
        this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
      },


    },
    mounted() {
      this.competitionClass = this.$store.state.competitionClass;
      this.ruleForm = this.$store.state.ruleForm;
      this.editableTabs = this.$store.state.editableTabs;
    },
    beforeDestroy() {
      this.$store.commit('setRuleForm', this.ruleForm);
      this.$store.commit('setEditableTabs', this.editableTabs);
    }
  }
</script>

<style scoped>
  .competition-promotional {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .competition-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    font-weight: 300;
  }

  .competition-header h1 {
    font-weight: 300;
  }

  .competition-tabs {
    width: 100%;
    margin-bottom: 150px;
    max-width: 860px;
  }

  .competition-promotional .el-select > .el-input {
    width: 130px !important;
  }

  .competition-promotional .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .competition-promotional .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .competition-promotional .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 316px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .competition-promotional .avatar {
    width: 316px;
    height: 178px;
    display: block;
  }

  .competition-promotional .demo-form {
    width: 100%;
    max-width: 660px;
  }

  .competition-promotional .demo-form2 {
    width: 90%;
    margin: 0 auto;
  }

  .competition-footer {
    background-color: white;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    padding-right: 100px;
  }

</style>
