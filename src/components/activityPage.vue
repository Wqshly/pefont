<template>
  <div>
  <div id="particles"> </div>
    <div class="normal_page">
      <n-header1></n-header1>
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import nHeader1 from '@/components/activityHeader'
//import particles from 'particles.js'
export default {

  name: 'homePage',
  data () {
    return {
        mounted(){
            //particlesJS.load('particles','/static/particles.json');
        }
    }
  },
  components: {
      nHeader1
  }
}
</script>

<style scoped>
  #particles{
    position: fixed;
    width: 100%;
    height: calc(100% - 80px);
    background-color: #dcdfe6;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
    margin-top:80px;
  }
  /*
.normal_page{
  background-image: url("../assets/img/activity/cool-background.png");
}*/
</style>
