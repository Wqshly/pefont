<template>
  <div style="">

    <el-button type="danger" @click="logout">退出登录</el-button>

  </div>
</template>

<script>
    import {api}  from '@/api/ajax'
    export default {
        data() {
            return {

            };
        },
        methods:{
          logout(){
              api.get('/api/login/logout').then(res => {
                  console.log(res);
                  if (res.code === 0) {
                      this.$store.commit('setUserId',-1);
                      console.log(this.$store.state.user.id);
                      this.$router.push('/login');
                      location.reload();
                  }
                  else{
                      this.$message.error(res.msg);
                  }
              })
          }
        },
        mounted() {

        },
    }
</script>

<style>

</style>
