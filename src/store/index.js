import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default  new Vuex.Store({
  state: {
      activityId:0,
      activityClass:'',
      competitionClass:'',
      ruleForm: {
        title: '',
        signUp_time_start:'',
        signUp_time_end:'',
        activity_time_start:'',
        activity_time_end:'',
        college_checkAll: true,
        college:['学院1','学院2','学院3','学院4','学院5','学院6','学院7','学院8','学院9','学院10'],
        activity_grade_checkAll: true,
        activity_grade:['2015','2016','2017','2018','2019','2020','2021'],
        contact_name:'',
        contact_method:'',
        imageUrl:'',
      },
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
      user: {
        id: -1,
        userNumber: "",
        username: "",
        password: "",
        age: 22,
        sex: "",
        unit: "",
        identity: "学生",
        phone: "",
        email: "",
        schoolId: ""
    }
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setActivityId(state, activityId){
      state.activityId = activityId;
    },
    setActivityClass(state, activityClass){
      state.activityClass = activityClass;
    },
    setCompetitionClass(state, competition){
      state.competitionClass = competition;
    },
    setRuleForm(state, ruleForm){
      state.ruleForm = ruleForm;
    },
    setEditableTabs(state, editableTabs){
      state.editableTabs = editableTabs;
    }
  }
});

