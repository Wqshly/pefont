<template>
    <div class="container">
      <basic-table-temp table-title="设置签到员"
                        table-tools="false"
                        sortable="false"
                        :table-header-list="tableHeaderList"
                        :func-btn="funcBtn"
                        @btn-click="btnClick()"></basic-table-temp>
    </div>
</template>

<script>
export default {
  name: 'setCheckStaff',
  data () {
    return {
      tableHeaderList: [
        {value: 'studentNumber', label: '学生学号', width: '220'},
        {value: 'studentName', label: '学生姓名', minWidth: '160'}
      ],
      funcBtn: {
        isShow: true,
        width: 200,
        fixed: 'right',
        buttons: [
          {
            name: '设置签到员',
            value: 'setCheckInStaff'
          }
        ]
      }
    }
  },
  methods: {
    btnClick (value, index) {
      if (value === 'setCheckInStaff') {
        var id = this.$refs[this.refName].tableData[index].id
        this.$router.push({name: 'questionnaireFilling', query: {id: id}})
      }
    }
  }
}
</script>

<style scoped>

  .container {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }
</style>
