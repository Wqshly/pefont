<template>
  <div>
    <v-header></v-header>
    <div class="home_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods:{

        },
        created() {

        },
    }
</script>

<style scoped>
  .home_main{
    width: 100%;
    padding-top: 5px;
  }
</style>
