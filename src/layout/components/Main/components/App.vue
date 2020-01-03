<template>
  <div class="layout-main-app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutMainApp"
};
</script>

<style lang="scss">
.layout-main-app {
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>