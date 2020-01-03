<template>
  <div class="layout-header-container">
    <Title class="layout-header-title" />
    <Menu class="layout-header-menu" />
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import Menu from "./components/Menu.vue";
export default {
  name: "LayoutHeader",
  components: {
    Title,
    Menu
  }
};
</script>

<style lang="scss">
.layout-header-container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  .layout-header-title {
    width: 220px;
    height: 100%;
  }
  .layout-header-menu {
    flex: 1;
  }
}
</style>