<template>
  <div id="particles"></div>
</template>

<script>
    //vue单文件
    import particles from 'particles.js'
    export default {
        mounted(){
            particlesJS.load('particles','/static/particles.json');
        }
    }
</script>

<style scoped>

  #particles{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dcdfe6;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

</style>
