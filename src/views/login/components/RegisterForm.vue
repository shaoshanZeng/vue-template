<template>
  <div class="register-form-container">
    <div class="register-form-body">
      <div class="register-form-header">
        <div class="logo">
          <i class="el-icon-s-custom"></i>
        </div>
        <div class="title">
          <span>用户注册</span>
        </div>
      </div>
      <el-form :model="registerForm" :rules="rules" ref="registerForm">
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-s-custom"
            placeholder="用户名"
            v-model="registerForm.username"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            placeholder="密码"
            v-model="registerForm.password"
            show-password
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item prop="confirmPwd">
          <el-input
            type="password"
            prefix-icon="el-icon-unlock"
            placeholder="确认密码"
            v-model="registerForm.confirmPwd"
            show-password
            clearable
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="register-form-footer">
      <el-button style="width: 100%;" type="warning" @click="submitForm('registerForm')">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerForm",
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
        confirmPwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        confirmPwd: [
          { required: true, message: "请输入确认密码", trigger: "blur" }
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
.register-form-container {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 0 30px 30px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .register-form-body {
    .register-form-header {
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
  .register-form-footer {
    display: flex;
  }
}
</style>