<template>
  <div id="app">
    <NavBar />
    <router-view class="main-view" />
  </div>
</template>

<script>
import NavBar from "@/components/global/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  background-color: #f8f8f8;
}

.main-view {
  min-height: calc(100vh - 120px);
  padding: 120px 36px 0;
  background-color: #f8f8f8;
}
</style>
