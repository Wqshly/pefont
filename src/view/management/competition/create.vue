<template>
  <div id="competition_container">
    <competition-create/>
  </div>
</template>

<script>
import competitionCreate from '../../../components/competition/create'

export default {
  components: {
    competitionCreate
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  created () {

  }
}
</script>

<style scoped>
  #competition_container {
    width: 100%;
    margin: 0 auto;
  }

</style>
