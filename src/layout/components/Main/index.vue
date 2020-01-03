<template>
  <div class="layout-main-container">
    <Tags class="layout-main-tags" />
    <App class="layout-main-app" />
  </div>
</template>

<script>
import Tags from "./components/Tags.vue";
import App from "./components/App.vue";
export default {
  name: "LayoutMain",
  components: {
    Tags,
    App
  }
};
</script>

<style lang="scss">
.layout-main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-main-app {
    flex: 1;
  }
}
</style>