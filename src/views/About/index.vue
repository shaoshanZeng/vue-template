<template>
  <div class="about-container">
    <HomeHeader />
    <Search />
  </div>
</template>

<script>
import Search from "@/components/About/Search";
import HomeHeader from "@/components/Home/Header";
export default {
  name: "about",
  components: {
    Search,
    HomeHeader
  }
};
</script>

<style lang="scss">
.about-container {
  text-align: center;
}
</style>