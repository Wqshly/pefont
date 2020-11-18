<template>
  <div id="container">
    <div id="home-left-container">
      <v-rank class="left-itme"/>

    </div>

    <div class="score">
      <v-score/>
    </div>
  </div>
</template>

<script>
  import vRank from "../../components/rank"
  import vScore from "../../components/myScore"

  export default {
    components: {
      vRank,
      vScore
    },
    data() {
      return {}
    },
    methods: {},
    mounted() {

    },
    created() {

    },
  }
</script>

<style scoped>
  #container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  #home-left-container {
  }

  .left-itme {
    margin: 20px auto;
  }

  .score {
    width: 300px;
    margin-right: 20px;
  }
</style>
