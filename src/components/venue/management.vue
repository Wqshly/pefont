<template>
  <div class="venue-management-container">
    <div style="width:100%;margin-left: 20px">
      <el-input type="text"
                v-model="searchName"
                prefix-icon="el-icon-search"
                style="max-width: 200px;"
                placeholder="输入场馆名搜索">
      </el-input>
    </div>
    <div v-if="!edit" v-for="venue in handleData()" class="venue" @click="handleClick(venue)">
      <el-card shadow="always" style="width: fit-content;">
        <div class="card">
          <img :src="url"/>
          <br>
          <h3>{{venue}}</h3>
          <br>
          <el-button type="primary" icon="el-icon-edit" plain @click.stop="">添加运动馆</el-button>
          <el-button type="danger" icon="el-icon-delete" @click.stop="">删除</el-button>
        </div>
      </el-card>
    </div>

    <venue_edit @back="edit = false" v-if="edit"/>
  </div>
</template>

<script>
  import venue_edit from "./venue_edit";

  export default {
    components: {
      venue_edit
    },
    data() {
      return {
        searchName: '',
        edit: false,
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        venues: ['1', '2', '3', '4', '5', '6', '7']
      }
    },
    methods: {
      handleClick(venue) {
        this.edit = true;
      },

      //处理表格数据
      handleData() {
        return this.venues.filter(data => this.filter(data));
      },

      //搜索筛选
      filter(val) {
        return (
          (!this.searchName || val.toLowerCase().includes(this.searchName.toLowerCase()))
        );
      },
    },

    mounted() {

    },

  }
</script>

<style scoped>
  .venue-management-container {
    width: 100%;
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
  }

  .venue {
    max-width: 1140px;
    margin: 15px;
  }

  .venue .card {
    cursor: pointer;
    width: fit-content;
  }

  .venue .card h3 {
    font-weight: 350;
  }

  .venue .card:hover img {
    max-height: 220px !important;
  }

  .venue img {
    max-height: 200px;
    transition: 0.5s all;
  }
</style>
