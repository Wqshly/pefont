<template>
  <div class="venue-detail-container">
    <div>
      <div class="row">
        <el-button plain type="primary" icon="el-icon-arrow-left" @click="$emit('back')">返回</el-button>
      </div>

      <div class="row">
        <div class="item_left">
          <div class="item_img">
            <carousel v-if="items1.length !==0" :data="items1"/>
          </div>
          <div class="item_description">
            <div class="inner">
              <h2 class="font">山东科技大学东场馆</h2>
              <span class="font">场馆地址：{{ remoteData.position }}</span>
              <span class="font">场馆电话：{{ remoteData.description }}</span>
              <span class="font">开放时间：{{ remoteData.description }}</span>
              <span class="font">人均价格：{{ remoteData.others }}</span>
            </div>
          </div>
        </div>
        <div class="item_map">
          <n-map/>
        </div>
      </div>

      <div class="row">
        <p style="width: 100%;">温馨提示：本场馆属于学校用地，所订场地可能因为学校临时征用等原因导致订单取消。</p>
        <p>所订场地限打球所用，如有培训或其他商业活动需求，请提前致电球馆协商。</p>
      </div>

      <div class="row">
        <el-tabs @tab-click="handleClick"
                 type="border-card"
                 style="width:80%">
          <el-tab-pane v-for="item in remoteData.subs"
                       :key="item"
                       :label="item.name">
            <div style="width: 100%">
              <carousel v-if="items1.length !== 0" :type="'card'" :data="items1" style="width: 100%;"/>
              <div class="inner2">
                <div>
                  <normal-table style="margin: 10px 20px 15px 0" :title="'交通信息'" :table="table1"/>
                  <normal-table :title="'场地设施'" :table="table2"/>
                </div>

                <normal-table :title="'场馆服务'" :table="table3"/>
              </div>
              <div class="row" style="position: relative">
                <el-date-picker
                  v-model="value1"
                  type="datetimerange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
                </el-date-picker>
                <el-button type="primary" plain @click="query(item.name)">查询可预约场地</el-button>
                <div v-if="isQueryed" style="position: absolute;bottom: 0;right: 0">
                  <el-button type="success" plain @click="open">我要预约</el-button>
                </div>
              </div>


              <div class="inner2" v-if="isQueryed">
                <el-tag
                  style="margin-right: 10px"
                  v-for="item in ['A-1','A-3']"
                  :key="item"
                  effect="dark">
                  {{ item }}
                </el-tag>
              </div>

            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>


    <el-dialog @close="dialogFormVisible = false"
               v-show="dialogFormVisible"
               fullscreen="true"
               style="z-index: 100001;display: flex;justify-content: center;align-items: center">
      <n-subscribe slot="footer"/>
    </el-dialog>
  </div>


</template>

<script>
  import carousel from "../common/carousel";
  import nMap from "../map";
  import normalTable from "../normalTable";
  import nSubscribe from "./subscribe";
  export default {
    components: {
      carousel,
      nMap,
      normalTable,
      nSubscribe
    },
    data() {
      return {
        isQueryed: false,
        //现在 至 两小时后
        value1: [new Date(), new Date().setTime(new Date().getTime() + 3600 * 1000 * 2)],
        /*轮播图 走马灯*/
        items1: [
          {
            name: "1",
            url: "http://www.xiaoyuanpe.com/1.png"
          },
          {
            name: "2",
            url: "http://www.xiaoyuanpe.com/2.png"
          },
          {
            name: "3",
            url: "http://www.xiaoyuanpe.com/3.png"
          },
        ],
        table1: [
          ["公交","赤岗路口，步行约5分钟"],["地铁","客村地铁D出口，步行约10-15分钟"],
        ],
        table2: [
          ["地板","塑胶地板、木质地板"],["灯光","侧灯"],["休息区","风扇"]
        ],
        table3: [
          ["器材租赁","储物柜、球拍，租拍5块钱一只，不限时间"],
          ["器材维护","拉线"],
          ["更多服务","WIFI、支持刷卡、会员卡、专业培训、羽毛球培训"],
          ["洗浴设施","更衣室、提供洗浴、热水供应、免费热水淋浴"],
          ["场馆卖品","饮料、羽毛球、球拍、球鞋、球衣、拍线"],
          ["发票","趣运动提供发票，仅限发票套餐"],
          ["停车","工业园停车（5块钱一小时，30元封顶）"],
        ],

        dialogFormVisible: false,
        currentPage: 1,
        pageSize: 10,
        total: 0,
        remoteData: {
          name: '',
          position: '',
          description: '',
          others: '',
          subs: [
            {
              name: '足球',
              startTime: '',
              endTime: '',
            },
            {
              name: '篮球',
              startTime: '',
              endTime: '',
            },

          ],
        },

        dialogForm: {
          venueName: '',
          areaName: '',
          name: '1',
          method: '88888888',
          area: [],
          time: [],
        }

      }
    },
    methods: {
      open() {
        this.dialogForm.time = this.value1;
        this.dialogForm.venueName = '山科大东馆';
        this.dialogForm.name = this.$store.state.user.username;
        this.dialogFormVisible = true;
      },
      query(val) {
        this.isQueryed = true;
        this.dialogForm.areaName = val;
      },
      handleClick(tab, event) {
        this.isQueryed = false;
        this.dialogForm.areaName = tab.label;
      },

      chooseArea(val) {
        let findIndex = this.dialogForm.area.findIndex(e => {
          if (e === val) {
            return true
          }
        });

        if (findIndex >= 0) {
          this.dialogForm.area.splice(findIndex, 1);
        } else {
          this.dialogForm.area.push(val);
        }
      },

      mappingEffect(val) {
        for (let i = 0; i < this.dialogForm.area.length; ++i) {
          if (this.dialogForm.area[i] === val) {
            return "dark";
          }
        }
      },
      back() {
        window.scroll(0, 100);
        this.dialogFormVisible = false;
      }
    },
    mounted() {

    },
    created() {

    },
    watch: {
      value1(val) {
        this.isQueryed = false;
      }
    }
  }
</script>

<style scoped>

  .venue-detail-container {
    width: 100%;
    padding-left: 30px;
    background-color: #f2f5f6;
    padding-top: 30px;
    position: relative;
  }

  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;
  }

  .item_left {
    min-width: 320px;
    width: calc(100% - 400px);
    display: flex;
    flex-wrap: wrap;
  }

  .item_img {
    width: 50%;
    min-width: 300px;
  }

  .item_map {
    width: 300px;
    height: 300px;
  }

  .item_description {
    width: fit-content;
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
  }

  .item_description .inner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .inner .font {
    margin-bottom: 15px;
    font-weight: 500;
  }

  .inner2 {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    width: 100%;
  }

  .inner2 .font {
    color: grey;
    margin: 9px;
    width: 40%;
  }

</style>
