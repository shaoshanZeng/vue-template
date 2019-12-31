<template>
  <div class="login-container">
    <div class="login-header">
      <loginHeader />
    </div>
    <div class="login-center">
      <loginCenter />
    </div>
    <div class="login-footer">
      <loginFooter />
    </div>
  </div>
</template>

<script>
import loginHeader from "@/components/Login/LoginHeader.vue";
import loginCenter from "@/components/Login/LoginCenter.vue";
import loginFooter from "@/components/Login/LoginFooter.vue";
export default {
  name: "login",
  components: {
    loginHeader,
    loginCenter,
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
  .login-header {
    flex: 1;
  }
  .login-center {
    flex: 3;
  }
  .login-footer {
    flex: 1;
  }
}
</style>