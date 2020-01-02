<template>
  <div class="layout-container">
    <Sidebar class="layout-sidebar" />
    <div class="layout-body">
      <Header class="layout-header" />
      <Main class="layout-main" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
export default {
  name: "Layout",
  components: {
    Header,
    Main,
    Sidebar
  }
};
</script>

<style lang="scss">
.layout-container {
  .layout-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
  }
  .layout-body {
    .layout-header {
    }
    .layout-main {
    }
  }
}
</style>