<template>
  <div>
    <v-header></v-header>
    <div class="home_main">
      <!--<router-menu :headers="headers"></router-menu>-->
      <router-view></router-view>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headers: [
          {
            name: '本地比赛',
            link: '/competition/localCompetition'
          },
          {
            name: '区域联赛',
            link: '/competition/regionalLeague'
          },
          {
            name: '我的比赛',
            link: '/competition/myCompetition'
          },

        ]
      }
    },
  }
</script>

<style scoped>
  .home_main {
    width: 100%;
    background-color: #f3f3f3;
  }

</style>
