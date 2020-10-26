import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default  new Vuex.Store({
  state: {
      userId:0,
      activityId:0,
      activityClass:'',
      user: {
        id: -1,
        userNumber: "234",
        username: "李四",
        password: "123456",
        age: 22,
        sex: "男",
        unit: "软件2班",
        identity: "学生",
        phone: "09876543211",
        email: "1223qq.com",
        schoolId: "山东科技大学"
    }
  },
  mutations: {

    setUserId(state, userId){
      state.userId = userId;
    },
    setUser(state, user){
      state.user = user;
    },
    setActivityId(state, activityId){
      state.activityId = activityId;
    },
    setActivityClass(state, activityClass){
      state.activityClass = activityClass;
    }
  }
});

