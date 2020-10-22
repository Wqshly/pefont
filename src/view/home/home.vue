<template>
  <div  class="main-nav">
    <v-pie></v-pie>
  </div>
</template>

<script>
    import vPie from '@/components/fenshu_pie'
    import {api} from "@/api/ajax"
export default {
  //活动中心的父级组件
  name: 'home_page',
    components: {
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
