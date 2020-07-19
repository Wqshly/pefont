<template>
    <div>
      <v-sidebar></v-sidebar>
      <div>
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
import vSidebar from '@/components/indexHeader'
import vFooter from '@/components/footer'
export default {
  name: 'homePage',
  data () {
    return {}
  },
  components: {
      vFooter,
      vSidebar
  }
}
</script>

<style scoped>

</style>
