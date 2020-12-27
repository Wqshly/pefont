<template>
  <div class="subscribe-container">
    <div style="width: 100%;display: flex;justify-content: center;margin-bottom: 20px;align-items: center">
      <p style="color: blue;font-size: 18px;margin: 0 10px">日期：</p>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="subscribe_venue">
      <div class="left-container">
        <table class="pure-table pure-table-horizontal table2">
          <thead>
          <tr>
            <th>&nbsp;</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for="tr in time">
            <td>
              <div class="item">{{tr}}</div>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="table-container">
          <table class="pure-table pure-table-horizontal table1">
            <thead>
            <tr>
              <th v-for="t in title">{{t}}</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(tr, rowIndex) in table">
              <td v-for="(td, columnIndex) in tr">
                <div class="item"
                     :class="[{'subscribe-active': find(td, rowIndex, columnIndex)}, {'subscribe-disable': td.disable}]"
                     @click="handleClick(td, rowIndex, columnIndex)">￥{{td.money}}
                </div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>


      <div class="right-container">
        <div class="right-container-row"
             style="border-bottom: 1px solid #bbbbbb;padding: 10px 0;display: flex;flex-wrap: nowrap">
          <div class="color-block" style="background-color: white;"></div>
          可预订
          <div class="color-block" style="background-color: #868686;margin-left: 10px"></div>
          不可预订
          <div class="color-block" style="background-color: #409EFF;margin-left: 10px"></div>
          已选中
        </div>
        <div class="right-container-row">
          项目：羽毛球
        </div>
        <div class="right-container-row">
          日期：2020年
        </div>
        <div class="right-container-row">
          场次：
        </div>
        <div class="right-container-row subscribe-info-container">

          <div v-for="e in this.choose" class="subscribe-info">
            {{e.position}}
            {{e.time}}
            {{e.money}}元
          </div>
        </div>

        <div class="right-container-row" style="padding: 10px 0;display: flex;flex-wrap: nowrap">
          已选择<p style="color: blue;font-size: 18px;margin: 0 10px">{{choose.length}}</p>场地，再次单击取消
        </div>

        <div class="right-container-row">
          联系人：
          <el-input v-model="contact_name"/>
        </div>
        <div class="right-container-row" style="margin-top: 10px">
          联系方式：
          <el-input v-model="contact_method"/>

        </div>

        <div class="right-container-row" style="padding: 10px 0;display: flex;flex-wrap: nowrap;font-size: 18px">
          共计：<p style="color: blue;font-size: 20px;margin: 0 5px">{{sumMoney}}</p>元 （含手续费）
        </div>
        <div class="right-container-row">
          <el-button type="primary">提交订单</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        contact_name: null,
        contact_method: null,
        value1: null,
        time: ["08:00", "09:00"],
        title: [],
        table: [],
        choose: [],
      }
    },
    created() {
      for (let i = 0; i < 20; ++i) {
        this.title.push(i + "号场");
      }

      for (let i = 10; i < 24; ++i) {
        this.time.push(i + ":00");
      }
      this.time.push("00:00");

      for (let i = 0; i < this.time.length - 1; ++i) {
        let tr = [];
        for (let j = 0; j < 20; ++j) {
          let td = {
            money: 50 + j,
            disable: false
          };
          if (i === 0 || i === 1 && j % 2) {
            td.disable = true;
          }

          tr.push(td);
        }
        this.table.push(tr);
      }
    },
    computed: {
      sumMoney() {
        let sum = 0;
        this.choose.forEach(e => {
          sum += e.money;
        });
        return sum;
      }
    },
    methods: {
      handleClick(td, rowIndex, columnIndex) {
        if (td.disable) {
          return;
        }
        let e = {
          money: td.money,
          time: this.time[rowIndex] + '-' + this.time[rowIndex + 1],
          position: this.title[columnIndex]
        };
        let findIndex = this.choose.findIndex(i => {
          if (
            i.money === e.money
            && i.time === e.time
            && i.position === e.position
          ) {
            return true;
          }
        });
        if (findIndex === -1) {
          this.choose.push(e)
        } else {
          this.choose.splice(findIndex, 1);
        }

      },
      // 用来设置活跃状态
      find(td, rowIndex, columnIndex) {
        let e = {
          money: td.money,
          time: this.time[rowIndex] + '-' + this.time[rowIndex + 1],
          position: this.title[columnIndex]
        };
        let findIndex = this.choose.findIndex(i => {
          if (
            i.money === e.money
            && i.time === e.time
            && i.position === e.position
          ) {
            return true;
          }
        });
        return findIndex !== -1;

      }
    }
  }
</script>
<style scoped>
  .subscribe-container {
    background-color: white;
    width: fit-content;
    height: fit-content;
  }

  .subscribe_venue {
    display: flex;
    flex-wrap: wrap;
  }

  .left-container {
    display: flex;
    width: 90%;
    min-width: 362px;
    max-width: 1000px;
    flex-wrap: nowrap;
    font-size: 12px;
    font-weight: 400;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td, th {
    padding: 0;
  }

  .pure-table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #cbcbcb;
  }

  .pure-table caption {
    color: #000;
    font: italic 85%/1 arial, sans-serif;
    padding: 1em 0;
    text-align: center;
  }

  .pure-table td, .pure-table th {
    border-width: 0 0 0 1px;
    white-space: nowrap;
    font-size: inherit;
    margin: 0;
    overflow: visible;
  }

  .pure-table thead {
    background-color: #ebebeb;
    text-align: center;
    vertical-align: center;
  }

  thead th {
    color: black;
    padding: 7px !important;
    font-weight: 500;
  }

  .pure-table td {
    background-color: transparent;
  }

  .table-container {
    max-width: 1000px;
    overflow: auto;
    flex-wrap: nowrap;
    display: flex;
  }

  .table2 {
    width: fit-content !important;
    border: none;
  }

  .table2 thead {
    background-color: transparent !important;
  }

  .table2 .item {
    border: transparent 2px solid;
    display: flex;
    align-items: start;
    height: 30px;
    padding: 0 !important;
    margin: -8px 4px 16px 4px !important;
  }

  .item {
    margin: 4px !important;
    padding: 7px 15px;
    border: black 2px solid;
    border-radius: 5px;
    background-color: white;
    transition: 0.3s all;
  }

  .table1 .item {
    cursor: pointer;
  }

  .table1 .item:hover {
    background-color: #409EFF;
    border: #409EFF 2px solid;
    color: white;
  }

  .table1 {
    background-color: #eeeeee;
  }

  .right-container {
    border: 1px solid #d6d6d6;
    width: fit-content;
    min-width: 320px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    font-size: 16px;
  }

  .right-container-row {
    width: 100%;
    text-align: left!important;
  }

  .color-block {
    border: 1px solid #d6d6d6;
    height: 20px;
    width: 20px;
    margin-right: 10px;
  }

  .subscribe-info {
    padding: 2px 15px;
    border: #d6d6d6 2px solid;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px 0;
  }

  .subscribe-active {
    background-color: #409EFF;
    border: #409EFF 2px solid;
    color: white;
  }

  .subscribe-disable {
    background-color: #868686;
    border: #868686 2px solid;
    color: #868686;
    cursor: not-allowed !important;
  }

  .subscribe-disable:hover {
    background-color: #868686 !important;
    border: #868686 2px solid !important;
    color: #868686 !important;
  }

  .subscribe-info-container {
    max-height: 300px;
    overflow: auto;
    margin-bottom: 30px;
  }

</style>
