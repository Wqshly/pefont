<template>
  <div>
    <div style="height: 100%;width: 100%" class="video_page">
      <v-header></v-header>
      <div>
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>

<script>
import vHeader from '@/components/activityHeader'
import vFooter from '@/components/footer'
export default {
  name: 'videoPage',
  data () {
    return {
        mounted(){

        }
    }
  },
  components: {
      vFooter,
      vHeader
  }
}
</script>

<style scoped>

</style>
