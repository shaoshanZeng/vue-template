<template>
    <div class="layout-main-container">
        <router-view />
    </div>
</template>

<script>
export default {
    name: "LayoutMain"
}
</script>

<style lang="scss">
.layout-main-container {
    padding: 10px;
    box-sizing: border-box;
}
</style>