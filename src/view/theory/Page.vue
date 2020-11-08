<template>
  <div>
    <div class="home_page">
      <v-header></v-header>
      <div class="home_main">
        <n-header :headers="items"></n-header>
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
    import nHeader from '@/components/routerByMenu'
    export default {
        components: {
            nHeader
        },
        data () {
            return {
                items: [
                    {
                        link: '/theory/home',
                        name: '理论学习',
                        secondLink:'/theory/theory'
                    },
                    {
                        link: '/theory/exam',
                        name: '理论考试',

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
