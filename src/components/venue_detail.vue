<template>
  <div class="venue-detail-container">
    <div class="row">
      <div class="item_left">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in items1" :key="item">
            <div class="width_contro">
              <el-image :src="item.url" fil="'scale-down'"></el-image>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="item_right">
        <div class="inner">
          <span class="font">场馆名：{{ remoteData.name }}</span>
          <span class="font">地点：{{ remoteData.position }}</span>
          <span class="font">简介：{{ remoteData.description }}</span>
          <span class="font">其他描述：{{ remoteData.others }}</span>
        </div>
        <el-button type="success" round @click="open">查询可预约时间</el-button>
      </div>

    </div>

    <div class="row">
      <div>
        <el-date-picker
          v-model="value1"
          disable="true"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="success" round @click="open">搜索</el-button>
      </div>
    </div>

    <div class="row">
      <div v-for="item in handleData()" class="row">

      </div>
    </div>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next, jumper, sizes"
      :total="total">
    </el-pagination>

    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" label-position="top">
        <el-form-item label="联系人">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="dialogForm.method" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="预约时段">
          <el-date-picker
            v-model="dialogForm.time"
            type="datetimerange"
            range-separator="至"
            start-placeholder="预约时间"
            end-placeholder="预计结束时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="其他">
          <el-input v-model="dialogForm.ohters" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>


</template>

<script>

  export default {
    data() {
      return {
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
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        search: '',
        detail: false,
        dialogFormVisible: false,
        currentPage: 1,
        pageSize: 10,
        total: 0,
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        remoteData: {
          name: '',
          position: '',
          description: '',
          others: '',
          tableDate: [
            {
              startTime: '',
              endTime: '',
            },
            {
              startTime: '',
              endTime: '',
            },

          ],
        },
        dialogForm: {
          name: '1',
          method: '2',
          time: [],
          others: [],
        }
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
        let temp_data = this.remoteData.tableDate.filter(data => this.filter(data));
        this.total = temp_data.length;
        return temp_data.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
      },

      //搜索筛选
      filter(val) {
        return (!this.search || val.name.toLowerCase().includes(this.search.toLowerCase()));
      },

      open() {
        this.dialogFormVisible = true;
      }

    },
    created() {

    }
  }
</script>

<style scoped>

  .venue-detail-container {
    width: 100%;
    background-color: #f2f5f6;
    padding-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .item_left {
    width: 60%;
    max-width: 450px;
  }

  .item_right {
    width: fit-content;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }

  .item_right .inner {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .inner .font {
    color: grey;
    margin: 9px 0;
  }

</style>
