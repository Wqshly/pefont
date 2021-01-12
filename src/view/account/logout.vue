<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    logout () {
      this.$api.http.get('/login/logout').then(res => {
        if (res.code === 0) {
          sessionStorage.removeItem('userInfo')
        }
      })
      this.$router.push('/login')
    }
  },
  mounted () {
    this.logout()
  }
}
</script>

<style>

</style>
