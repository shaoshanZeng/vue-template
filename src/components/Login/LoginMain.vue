<template>
  <div class="login-main-container">
    <loginForm class="login-form" />
  </div>
</template>

<script>
import loginForm from "./LoginForm";
export default {
  name: "LoginMain",
  components: {
    loginForm
  }
};
</script>

<style lang="scss">
.login-main-container {
  width: 100%;
  height: 100%;
  background: #000;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  .login-form {
      width: 300px;
      margin-right: 200px;
  }
}
</style>