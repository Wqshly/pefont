<template>
  <div class="main-nav">
    <v-rank></v-rank>
    <br>
    <v-pie></v-pie>
    <br>
    <n-fitness></n-fitness>
  </div>
</template>

<script>
    import nFitness from '@/components/fitness'
    import vRank from "@/components/rank"
    import vPie from "@/components/pie"
export default {
    components:{
        vRank,
        nFitness,
        vPie
    },
    data() {
        return {

        }
    },
    methods: {


    },
    mounted() {

    },
    created() {

    },
}
</script>

<style scoped>

  .main-nav {
    padding: 0;
    margin: 0;
    height: 100%;
    overflow: hidden;
  }
</style>
