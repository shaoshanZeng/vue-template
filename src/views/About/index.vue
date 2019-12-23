<template>
  <div class="about-container">
    <Search />
  </div>
</template>

<script>
import Search from "@/components/About/Search";
export default {
  name: 'about',
  components: {
    Search
  }
};
</script>


<style lang="scss">
.about-container {
  text-align: center;
}
</style>