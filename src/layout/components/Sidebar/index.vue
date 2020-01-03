<template>
  <div class="layout-sidebar-container">
    <el-menu class="layout-sidebar-navmenu" :collapse="app.collapse" :collapse-transition="false">
      <SubMenu />
    </el-menu>
    <CollapseToggle class="layout-sidebar-collapse" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CollapseToggle from "./components/CollapseToggle.vue";
import SubMenu from "./components/SubMenu.vue";
export default {
  name: "LayoutSidebar",
  components: {
    CollapseToggle,
    SubMenu
  },
  data() {
    return {
      collapse: true
    };
  },
  computed: {
    ...mapState(["app"])
  }
};
</script>

<style lang="scss">
.layout-sidebar-container {
  padding-top: 60px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #ccc;
  .layout-sidebar-navmenu {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    &.el-menu {
      border: none;
    }
  }
  .layout-sidebar-collapse {
    height: 60px;
  }
}
</style>