<template>
  <div class="layout-sidebar-collapse-toggle-container" @click="$store.dispatch('app/collapseToggle')">
    <i :class="{'el-icon-arrow-right': app.collapse, 'el-icon-arrow-left': !app.collapse}"></i>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutSidebarCollapseToggle",
  computed: {
    ...mapState(["app"])
  }
};
</script>

<style lang="scss">
.layout-sidebar-collapse-toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-top: 1px solid #ccc;
  box-sizing: border-box;
}
</style>