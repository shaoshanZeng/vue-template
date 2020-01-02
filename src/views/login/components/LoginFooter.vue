<template>
  <div class="login-footer-container">
    <ul class="login-footer-list">
      <li class="login-footer-item">公司名</li>
      <li class="login-footer-item">公司号码123456</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loginFooter"
};
</script>

<style lang="scss">
.login-footer-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .login-footer-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    .login-footer-item {
      padding: 2px 0;
      box-sizing: border-box;
    }
  }
}
</style>