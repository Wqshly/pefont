<template>
  <div>
    <div class="venue-container" v-if="!detail">
      <div class="card-container">
        <div v-for="item in handleData()" @click="handleClick(item)" class="card">
          <el-card shadow="hover" style="width: fit-content;">
            <div class="item">
              <el-image class="item_img"
                        :src="url"
                        :fit="'scale-down'">
              </el-image>

              <div class="item_right">
                <div class="inner">
                  <span class="font">场馆名：{{ item.name }}</span>
                  <span class="font">开放时间：{{ item.date }}</span>
                  <span class="font">地点：{{ item.position }}</span>
                  <span class="font">场馆类型：{{ item.date }}</span>
                  <span class="font">可开展运动：
                    <el-tag
                      style="margin-right: 10px"
                      v-for="type in item.type"
                      :key="type"
                      effect="dark">
                    {{ type }}
                  </el-tag>
                  </span>
                  <span class="font">人均消费：{{ item.date }}</span>
                </div>
              </div>

              <div style="position: absolute;bottom: 0;right: 0">
                <el-button type="primary" plain @click="open(item)">查询详情</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <el-pagination
          class="pagination"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="total, prev, pager, next, jumper, sizes"
          :total="total">
        </el-pagination>
      </div>

      <div class="right-container">
        <n-map style="margin-bottom: 30px"/>
        <n-advertisement/>
      </div>
    </div>
    <venue_detail
      @back="back"
      v-else/>
  </div>

</template>

<script>
  import venue_detail from "./venue_detail";
  import nMap from "../map";
  import nAdvertisement from "../advertisement";
  export default {
    components: {
      venue_detail,
      nMap,
      nAdvertisement,
    },
    props: {
      search: String
    },
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        search2: '',
        detail: false,
        currentPage: 1,
        pageSize: 10,
        total: 0,
        tableData: [{
          date: '',
          name: '',
          position: '',
          type: []
        }],
      }
    },
    methods: {
      //每页条数
      handleSizeChange(val) {
        this.pageSize = val;
      },

      //当前页数
      handleCurrentChange(val) {
      },

      //处理表格数据
      handleData() {
        let temp_data = this.tableData.filter(data => this.filter(data));
        this.total = temp_data.length;
        return temp_data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      },

      //搜索筛选
      filter(val) {
        return (
          (!this.search || val.name.toLowerCase().includes(this.search.toLowerCase()))
          && (!this.search2 || (val.type.indexOf(this.search2) != -1))
        );
      },

      handleClick(item) {

      },

      open() {
        window.scroll(0, 500);
        this.detail = !this.detail;
      },
      back() {
        window.scroll(0, 100);
        this.detail = false;
      }

    },
    created() {
      let e = {
        date: '11月22日',
        name: '山科大体育馆',
        position: '山科大体育馆',
        type: ['足球', '篮球']
      };
      for (let i = 0; i <= 18; ++i) {
        this.tableData.push(e);
      }

    }
  }
</script>

<style scoped>

  .venue-container {
    width: 100%;
    background-color: #f2f5f6;
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    position: relative;
  }

  .card-container {
    width: calc(100% - 325px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .right-container {
    width: 300px;
    padding-left: 15px;
    padding-right: 10px;
    position: sticky;
    top:0;
    right: 0;
  }

  .card {
    margin: 10px 0;
  }

  .item {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    position: relative;
  }

  .item_img {
    max-width: 37.5%;
    min-width: 300px;
  }

  .item_right {
    width: fit-content;
    margin: 0 0 0 30px;
  }

  .item_right .inner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .inner .font {
    margin: 6px 0;
    font-weight: 500;
  }

  .pagination {
    margin: 10px 0;
  }
</style>
