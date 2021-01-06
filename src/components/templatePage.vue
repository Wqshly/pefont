<template>
    <div>
      <v-header></v-header>
      <div class="main-style">
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </div>
</template>

<script>
export default {
  name: 'templatePage'
}
</script>

<style scoped>

  .main-style {
    width: auto;
    height: 100%;
    padding-top: 5px;
    overflow: hidden;
  }

</style>
