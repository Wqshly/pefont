<template>
  <div>
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
              });
              this.$store.commit('setUserId', -1);
              this.$router.push('/login');
          }
        },
        mounted() {

        },
    }
</script>

<style>

</style>
