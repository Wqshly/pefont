<template>
  <div  class="main-nav">
    <v-pie></v-pie>
    <br>
    <v-rank></v-rank>
    <br>

  </div>
</template>

<script>
    import vPie from '@/components/fenshu_pie'
    import vRank from '@/components/rank'

    import {api} from "@/api/ajax"
export default {
  name: 'home_page',
    components: {
        vRank,
        vPie,
    },
    data() {
        return {
            headers:[
                {
                    name:'早操',
                    link:'/home'
                },
                {
                    name:'课外活动',
                    link:'/home2'
                },
            ]
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
