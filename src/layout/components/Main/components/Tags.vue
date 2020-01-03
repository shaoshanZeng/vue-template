<template>
  <div class="layout-main-tags-container" v-if="dynamicTags && dynamicTags.length > 1">
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      @close="handleClose(tag)"
      @click="handleClick(tag)"
    >{{tag}}</el-tag>
  </div>
</template>

<script>
export default {
  name: "LayoutMainTags",
  data() {
    return {
      dynamicTags: []
    };
  },
  created() {
    let dynamicTags = [];
    for (let index = 0; index < 10; index++) {
      dynamicTags.push("标签" + index);
    }
    this.dynamicTags = dynamicTags;
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags = this.dynamicTags.filter(item => item != tag);
    },
    handleClick() {}
  }
};
</script>

<style lang="scss">
.layout-main-tags-container {
  width: 100%;
  padding: 8px 15px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: auto;
  box-shadow: 5px 5px 10px #ccc;
  .el-tag + .el-tag {
    margin-left: 10px;
  }
}
</style>