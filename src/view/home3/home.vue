<template>
  <div >

  </div>
</template>

<script>

export default {
    data() {
        return {
          options:['足球','排球','网球','羽毛球','乒乓球','篮球']
        }
    },
    mounted() {
      let cl = '本地比赛';
      if(this.$route.path != '/home3'){
          cl = this.options[parseInt(this.$route.path.split('/')[2])-1];
      }
      this.$store.commit('setActivityClass',cl);
      this.$router.push('/promotion');
    },
    created() {

    },
}
</script>

<style scoped>

</style>
