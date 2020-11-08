<template>
  <div>
    <div class="home_page">
      <v-header></v-header>
      <div class="home_main">
        <router-menu :headers="options"></router-menu>
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                options:[
                    {
                        name:'管理首页',
                        link:'/management/home',
                    },


                ],
            }
        },
        methods:{

        },
        created() {

        },
    }
</script>

<style scoped>
  .home_page{

  }
  .home_main{
    margin: 0 auto;
    max-width: 1140px;
    width: 100%;
    padding-top: 5px;
    min-height: 500px;
  }

</style>
