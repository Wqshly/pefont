<template>
  <div>
  <div id="particles"> </div>
    <div class="normal_page">
      <n-header1></n-header1>
      <div style="margin-top: 80px;">
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
    height: 100%;
    background-color: #dcdfe6;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: 50% 50%;
  }
  /*
.normal_page{
  background-image: url("../assets/img/activity/cool-background.png");
}*/
</style>
