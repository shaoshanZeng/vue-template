<template>
  <div class="login-main-container">
    <div class="login-register-btn" @click="$store.dispatch('login/loginDrawerToggle')">
      <i class="el-icon-d-arrow-left"></i>
    </div>
    <el-drawer
      :visible.sync="login.loginFormDrawer"
      size="30%"
      direction="rtl"
      :before-close="loginDrawerClose"
    >
      <loginForm v-if="login.loginFormDrawer" class="login-form" />
      <el-drawer
        :append-to-body="true"
        :visible.sync="login.registerFormDrawer"
        size="25%"
        :before-close="registerDrawerClose"
      >
        <RegisterForm v-if="login.registerFormDrawer" class="register-form" />
      </el-drawer>
    </el-drawer>
  </div>
</template>

<script>
import loginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { mapState } from "vuex";
export default {
  name: "LoginMain",
  components: {
    loginForm,
    RegisterForm
  },
  methods: {
    loginDrawerClose(done) {
      this.$store
        .dispatch("login/loginDrawerToggle")
        // eslint-disable-next-line no-unused-vars
        .then(_ => {
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => {});
    },
    registerDrawerClose(done) {
      this.$store
        .dispatch("login/registerDrawerToggle")
        // eslint-disable-next-line no-unused-vars
        .then(_ => {
          done();
        })
        // eslint-disable-next-line no-unused-vars
        .catch(_ => {});
    }
  },
  computed: {
    ...mapState(["login"])
  }
};
</script>

<style lang="scss">
.login-main-container {
  width: 100%;
  height: 100%;
  background: #000;
  position: relative;
  .login-register-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 20px;
    height: 80vh;
    background: #fff;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px 0 0 20px;
  }
}
</style>