<template>
    <div class="login-header-container">
        <div class="login-header-logo"></div>
        <div class="login-header-title">项目名</div>
    </div>
</template>

<script>
export default {
    name: 'loginHeader'
}
</script>

<style lang="scss">
.login-header-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 50px;
    box-sizing: border-box;
    .login-header-logo {
        width: 50px;
        height: 50px;
        background: #000;
        border-radius: 50%;
    }
    .login-header-title {
        margin-left: 10px;
        font-size: 30px;
    }
} 
</style>