<template>
  <el-carousel :type="type"
               :trigger="trigger"
               :indicator-position="position"
               :interval="interval"
               :direction="direction"
               :autoplay="autoplay"
               :height="bannerHeight+'px'"
               @change="$emit('change', $event)"
               ref="carousel">
    <el-carousel-item v-for="(item, index) in data" :key="index" :name="index">
      <p v-if="showName">{{item.name}}</p>
      <div class="item">
        <img ref="bannerHeight"
             :src="item.url"
             class="bannerImg"
             @load="imgLoad"/>
        <div class="bottom-title">
          <h3>{{item.name}}</h3>
        </div>

      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

  export default {
    props: {
      showName: {
        default: false
      },
      direction: {
        default: null
      },
      autoplay: {
        default: false
      },
      data: {
        default: [
          {
            name: "1",
            url: "http://www.xiaoyuanpe.com/1.png"
          }
        ]
      },
      type: {
        default: ''
      },
      position: {
        default: 'outside'
      },
      trigger: {
        default: 'click'
      },
      interval: {
        default: 5000
      },
      activeIndex: {
        default: 0
      }
    },
    watch: {
      activeIndex(index) {
        this.$refs.carousel.setActiveItem(index);
      }
    },
    data() {
      return {
        bannerHeight: "",
      };
    },
    methods: {
      imgLoad() {
        this.$nextTick(() => {
          let height = this.showName ? 40 : 0;
          this.bannerHeight = this.$refs.bannerHeight[0].height + height;
          this.$emit("height", this.bannerHeight);
        });
      },
      resizeCarousel() {
        let height = this.showName ? 40 : 0;
        this.bannerHeight = this.$refs.bannerHeight[0].height + height;
        this.imgLoad();
      }

    },
    mounted() {
      this.imgLoad();
      window.addEventListener('resize', this.resizeCarousel, false);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.resizeCarousel, false);
    }


  }
</script>

<style scoped>
  .bannerImg {
    width: 100%;
  }

  .item {
    position: relative;
  }

  p {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 300;
  }

  .bottom-title {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: grey;
    opacity: 0.8;
    display: flex;
    align-items: center;
    color: white;
    padding-left: 10px;
  }
</style>
