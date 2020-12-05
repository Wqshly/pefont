<template>
  <div class="competition-promotional">
    <div class="competition-header"><h1>{{this.competitionClass}}</h1></div>

    <el-form :model="ruleForm" label-width="120px" class="demo-form">
      <el-form-item label="比赛名称" prop="title">
        <el-input
          placeholder="比赛名称"
          v-model="ruleForm.title">
        </el-input>
      </el-form-item>

      <el-form-item label="比赛类别">
        <el-select v-model="ruleForm.subclass" placeholder="请选择">
          <el-option
            v-for="item in subClass[competitionClass]"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
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

      <el-form-item label="报名起止时间" prop="signUp_time">
        <el-date-picker
          v-model="ruleForm.signUp_time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="报名开始时间"
          end-placeholder="报名结束时间">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="参赛起止时间" prop="activity_time">
        <el-date-picker
          v-model="ruleForm.activity_time"
          type="datetimerange"
          range-separator="至"
          start-placeholder="比赛开始时间"
          end-placeholder="比赛结束时间">
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
        <div :class="[{'avatar-uploader': !ruleForm.imageUrl},'avatar-container']">
          <input ref="upload" type="file" accept="image/*" class="avatar-input" @change="changeAvatar"/>
          <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" alt="">
          <i v-if="!ruleForm.imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
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
              <div>
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
      <el-button type="success" :disabled="this.isQuerying" @click="submitForm('ruleForm')">确认发起</el-button>
      <el-button type="primary" :disabled="this.isQuerying" @click="submitForm('ruleForm')">暂时保存</el-button>
    </div>
  </div>
</template>

<script>
  import {api} from '@/api/ajax'

  export default {

    data() {
      return {
        notifyPromise: Promise.resolve(),
        isQuerying: false,
        competitionClass: '综合类比赛',
        subClass: {
          "综合类比赛": ['田径运动会', '综合性运动会', '其他'],
          "田径比赛": ['田赛', '竞赛', '全能'],
          "球类比赛": ['足球', '排球', '篮球', '网球', '乒乓球', '其他'],
          "水上运动": ['游泳比赛', '帆船比赛', '其他'],
          "其他比赛": ['自行车赛', '跆拳道赛', '柔道赛', '拳击赛', '其他'],
        },
        ruleForm: {
          title: '',
          subclass: '',
          college_checkAll: true,
          college: ['学院1', '学院2', '学院3', '学院4', '学院5', '学院6', '学院7', '学院8', '学院9', '学院10'],
          activity_grade_checkAll: true,
          activity_grade: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
          activity_time: [],
          signUp_time: [],
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
            moneyEveryPeople: 0,
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
        if (currentName === "add") {
          this.addTab();
          return false
        }
      },

      checkImg(file){
        let errorMsg;
        if (file.type.split('/')[0] !== 'image') {
          errorMsg = '不支持的图片格式';
        }

        if (file.size / 1024 / 1024 > 10) {
          errorMsg = '上传图片大小不能超过 10MB!';
        }

        if(errorMsg) {
          this.$notify.error({
            title: '请更换图片',
            message: errorMsg,
            duration: 10000
          });
          return false;
        }
        return true;
      },

      changeAvatar() {
        let previewFile = this.$refs.upload.files[0];
        if(this.checkImg(previewFile)) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.ruleForm.imageUrl = e.target.result;
          };
          reader.readAsDataURL(previewFile);
        }
      },

      checkForm() {
        let errorMsg;
        if (!this.ruleForm.imageUrl) {
          errorMsg = "没有选择海报"
        }

        if(this.ruleForm.activity_time.length === 0){
          errorMsg = "请选择活动时间"
        }

        if(this.ruleForm.signUp_time.length === 0){
          errorMsg = "请选择报名时间"
        }

        if (errorMsg) {
          this.$notify.error({
            title: '错误的提交',
            message: errorMsg,
            duration: 10000
          });
          return false
        }
        return true;
      },

      submitForm(formName) {
        this.$confirm('确认提交？').then(_ => {
          if (this.checkForm()) {
            this.isQuerying = true;
            this.$notify('正在提交，请稍后');
            this.remote_api();
          }
        }).catch(_ => {
        });
      },

      mappingProjects() {
        let projects = [];
        this.editableTabs.forEach(e => {
          let project = {};
          project.projectName = e.data.projectName;
          project.team = e.data.isTeam;
          project.maximum = e.data.maxNumberOfPartner;
          project.integralSet = e.data.mark;
          project.signinagCondition = e.data.registrationConditions;
          project.venue = e.data.competitionVenue;
          project.teamSize = e.data.minTeamPeople + "至" + e.data.maxTeamPeople + "人";
          project.entryFee = e.data.moneyEveryPeople;
          project.judge = e.data.needReferee;
          project.refereeConditions = e.data.refereeConditions;
          projects.push(project);
        });
        console.log(projects);
        return projects;
      },

      remote_api() {
        let url = '/api/activity/addActivity';
        let data = new FormData();
        data.append('activityClassification', this.ruleForm.subclass);
        data.append('pictureFile', this.$refs.upload.files[0]);
        data.append('activityName', this.ruleForm.title);
        data.append('publisherId', this.$store.state.user.id);
        data.append('publishData', new Date());
        data.append('contact', this.ruleForm.contact_name);
        data.append('contactPhone', this.ruleForm.contact_method);
        data.append('registrationClosingTime', this.ruleForm.signUp_time[1]);
        data.append('registrationStartTime', this.ruleForm.signUp_time[0]);
        data.append('startTime', this.ruleForm.activity_time[0]);
        data.append('endTime', this.ruleForm.activity_time[1]);

        data.append('projects', this.mappingProjects());

        this.$api.upload(url, data).then(res => {
          if (res.code === 0) {
            this.$message.success('成功!');
          } else {
            this.$message.error(res.msg);
          }
          this.isQuerying = false;
        })
      },

      changeClass(val) {
        this.competitionClass = val;
      },

      badRequest() {
        this.isQuerying = false;
        this.alert("BAD REQUEST");
      }
    },

    mounted() {
      this.competitionClass = this.$store.state.competitionClass || '综合类比赛';
      this.ruleForm = this.$store.state.ruleForm;
      this.editableTabs = this.$store.state.editableTabs;
      this.$eventBus.on("setCompetitionClass", this.changeClass);
      this.$eventBus.on("bad", this.badRequest);
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

  .avatar-container {
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    max-width: 100%;
  }

  .avatar-container img{
    max-width: 100%;
  }

  .avatar-input {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  .competition-promotional .avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
  }

  .competition-promotional .avatar-uploader:hover {
    border-color: #409EFF;
  }

  .competition-promotional .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    text-align: center;
    width: 316px;
    height: 178px;
    line-height: 178px;
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
