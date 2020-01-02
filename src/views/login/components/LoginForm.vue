<template>
  <div class="login-form-container">
    <div class="login-form-body">
      <div class="login-form-header">
        <div class="logo">
          <i class="el-icon-s-custom"></i>
        </div>
        <div class="title">
          <span>用户登录</span>
        </div>
      </div>
      <el-form :model="loginForm" :rules="rules" ref="loginForm">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-s-custom" placeholder="用户名" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="rememberMe">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item></el-form-item>
        <el-form-item></el-form-item>
      </el-form>
    </div>
    <div class="login-form-footer">
      <el-button style="width: 100%;" type="warning" @click="submitForm('loginForm')">登录</el-button>
      <el-button
        style="width: 100%;"
        type="primary"
        @click="$store.dispatch('login/registerDrawerToggle')"
      >注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      rememberMe: false,
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-form-container {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 0 30px 30px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .login-form-body {
    display: flex;
    flex-direction: column;
    .login-form-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 22px;
      .logo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #c0c4cc;
        color: #fff;
        font-size: 40px;
      }
      .title {
        color: #666;
        margin-top: 10px;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
  .login-form-footer {
    display: flex;
  }
}
</style>