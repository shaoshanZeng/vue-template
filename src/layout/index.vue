<template>
  <div class="layout-container">
    <Header class="layout-header" />
    <Sidebar class="layout-sidebar" :style="app.collapse? 'width:64px;' : 'width: 220px;'" />
    <div class="layout-body" :style="app.collapse? 'margin-left:64px;' : 'margin-left: 220px;'">
      <Main class="layout-main" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/index.vue";
import Main from "./components/Main/index.vue";
import Sidebar from "./components/Sidebar/index.vue";
import { mapState } from "vuex";
export default {
  name: "Layout",
  components: {
    Header,
    Main,
    Sidebar
  },
  computed: {
    ...mapState(["app"])
  }
};
</script>

<style lang="scss">
.layout-container {
  width: 100vw;
  height: 100vh;

  .layout-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 9998;
  }

  .layout-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 60px;
    background: #f3f3f3;
    z-index: 9999;
  }

  .layout-body {
    padding-top: 60px;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    .layout-main {
      flex: 1;
    }
  }
}
</style>