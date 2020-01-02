<template>
  <div class="layout-sidebar-title-container">
      <img src="../../../../assets/images/logo.jpg" alt="">
      <span>项目名</span>
  </div>
</template>

<script>
export default {
  name: "LayoutSidebarTitle",
};
</script>

<style lang="scss">
.layout-sidebar-title-container {
    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    span {
        font-size: 20px;
    }
}
</style>