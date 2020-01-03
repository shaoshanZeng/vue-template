<template>
  <div class="layout-header-title-container">
    <img src="../../../../assets/images/logo.jpg" alt />
    <span>项目名</span>
  </div>
</template>

<script>
export default {
  name: "LayoutHeaderTitle"
};
</script>

<style lang="scss">
.layout-header-title-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 20px;
  box-sizing: border-box;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  span {
    margin-left: 10px;
    font-size: 20px;
  }
}
</style>