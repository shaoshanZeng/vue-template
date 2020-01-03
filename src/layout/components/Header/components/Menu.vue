<template>
  <div class="layout-header-menu-container">
    <div class="layout-header-menu-left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="layout-header-menu-right">
      <el-dropdown split-button @click="handleClick">
        <i class="el-icon-user"></i>
        <span>admin</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutHeaderMenu",
  data() {
    return {
      search: "",
      showSearch: false
    };
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    handleClick() {
      alert("button click");
    }
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: (el, { value }) => {
        if (value) {
          el.focus();
        }
      }
    }
  }
};
</script>

<style lang="scss">
.layout-header-menu-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  .layout-header-menu-right {
    .search {
      display: flex;
      align-items: center;
      .search-icon {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        border-radius: 5px;
      }
      .search-input {
        height: 30px;
        border: none;
        background: transparent;
        outline: none;
        padding: 0 10px;
        box-sizing: border-box;
        border-bottom: 1px solid #000;
      }
    }
  }
}
</style>