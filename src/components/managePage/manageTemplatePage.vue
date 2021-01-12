<template>
  <div>
    <manage-header></manage-header>
    <div class="main-style">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import manageHeader from '@/components/managePage/managerHeader'
export default {
  name: 'manageTemplatePage',
  components: {
    manageHeader
  }
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
