<template>
    <div style="height: 100%;width: 100%">
      <n-header1></n-header1>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import nHeader1 from '@/components/normalHeader'
export default {
  name: 'homePage',
  data () {
    return {

    }
  },
  components: {
      nHeader1
  }
}
</script>

<style scoped>

</style>
