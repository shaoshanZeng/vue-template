<template>
  <div class="home-container">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Home/Header";
import Main from "@/components/Home/Main";
import Footer from "@/components/Home/Footer";
export default {
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style lang="scss">
</style>