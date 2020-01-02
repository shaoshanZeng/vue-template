<template>
  <div class="login-container">
    <loginHeader class="login-header" />
    <loginMain class="login-main" />
    <loginFooter class="login-footer" />
  </div>
</template>

<script>
import loginHeader from "./components/LoginHeader.vue";
import loginMain from "./components/LoginMain.vue";
import loginFooter from "./components/LoginFooter.vue";
export default {
  name: "login",
  components: {
    loginHeader,
    loginMain,
    loginFooter
  }
};
</script>

<style lang="scss">
.login-container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #f3f3f3;
  .login-header {
    flex: 1;
  }
  .login-main {
    flex: 3;
  }
  .login-footer {
    flex: 1;
  }
}
</style>