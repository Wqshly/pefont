<template>
  <div>
    <p> 当前班级:{{cl}}</p>
    <el-table
    @selection-change="handleSelectionChange"
    @cell-click="handleClick"
    :data="handleData()"
    style="width: 100%">
    <el-table-column
      type="selection"
      fixed="left"
      width="55">
    </el-table-column>
    <el-table-column
      :prop=tableProp
      label="名字">
      <template slot="header">
        <label>
          <input
            type="text"
            v-model="search"
            prefix-icon="el-icon-search"
            style="width: 150px;"
            placeholder="输入关键字搜索"
          />
        </label>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click.stop="handleEdit(scope.$index, scope.row)">编辑
        </el-button>

        <el-button
          size="mini"
          type="danger"
          @click.stop="handleDelete(scope.$index, scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>


    export default {
        data() {
            return {
                cl: '',
                headers: [
                    {
                        name: '签到表',
                        link: '/home/signIn'
                    },
                    {
                        name: '签退表',
                        link: '/home/signOut'
                    },
                ]
            }
        },
        methods: {
            //多选
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleData() {

            },
        },
        mounted() {
            this.cl = this.$store.state.user.unit;
        },
        created() {

        },
    }
</script>

<style scoped>
  p {
    padding: 8px 0;
    font-size: 15px;
  }
</style>
