<template>
    <div>
      <v-sidebar></v-sidebar>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import vSidebar from '@/components/topSidebar'
export default {
  name: 'homePage',
  data () {
    return {}
  },
  components: {
    vSidebar
  }
}
</script>

<style scoped>

</style>
