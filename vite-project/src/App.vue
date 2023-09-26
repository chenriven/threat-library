<template>
  <div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang='ts' setup>
</script>
<style scoped lang="scss">
.container {
  width: $pagewidth;
  margin: 0 calc(50% - 600px);

}
</style>