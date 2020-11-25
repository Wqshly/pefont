<template>
  <div>
    <v-header></v-header>
    <div class="home_main">
      <router-menu :headers="headers" :center="true"></router-menu>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          {
            name: '本地比赛',
            link: '/competition/home'
          },
          {
            name: '发起比赛',
            link: '/competition/create'
          },
          {
            name: '管理比赛',
            link: '/competition/management'
          }
        ]
      }
    },
    methods: {},
    created() {

    },
  }
</script>

<style scoped>
  .home_main {
    width: 100%;
    padding-top: 5px;
  }
</style>
