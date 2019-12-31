<template>
  <div class="login-form-container">
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-s-custom" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="el-icon-lock" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="rememberMe">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%;" type="warning" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%;" type="primary">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      rememberMe: false,
      loginForm: {
        username: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ]
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
  background: #fff;
  box-shadow: 0 0 10px #fff;
  padding: 20px 20px 0;
  box-sizing: border-box;
  border-radius: 5px;
}
</style>