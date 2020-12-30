<template>
    <div>
    </div>
</template>

<script>
export default {
  name: 'notSchoolAdmin',
  mounted () {
    this.$confirm('您不是管理员，无权访问该页面！', '提示', {
      confirmButtonText: '确认',
      cancelButtonText: '关闭'
    }).then(() => {
    })
  }
}
</script>

<style scoped>

</style>
