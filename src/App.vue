<template>
  <div id="app">
    <NavBar />
    <v-main>
      <router-view
        style="
          min-height: calc(100vh - 120px);
          padding: 120px 36px 0px 36px;
          background-color: #f8f8f8;
        "
      />
    </v-main>
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
  color: #2c3e50;
  background-color: #f8f8f8;
}
</style>
