<template>
  <el-carousel :type="type"
               :trigger="trigger"
               :indicator-position="position"
               :interval="interval"
               :height="bannerHeight+'px'">
    <el-carousel-item v-for="item in data" :key="item">
      <img ref="bannerHeight"
           :src="item.url"
           class="bannerImg"
           @load="imgLoad"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script >

export default {
  props: {
    data: [
      {
        name: "1",
        url: "http://www.xiaoyuanpe.com/1.png"
      }
    ],
    type:'',
    position:'outside',
    trigger:'click',
    interval:5000,
  },
  data () {
    return{
      bannerHeight: "",
    };
  },
  methods: {
    imgLoad() {
      this.$nextTick(() => {
        this.bannerHeight = this.$refs.bannerHeight[0].height;
      });
    }

  },
  mounted() {
    this.imgLoad();
    window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.bannerHeight[0].height;
      this.imgLoad();
    }, false);
  },


}
</script>

<style scoped>
  .bannerImg {
    width: 100%;
  }
</style>
