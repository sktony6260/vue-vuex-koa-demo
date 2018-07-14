<template>
  <div id="app">
    <Loading v-if="loading" />
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loading from "@/components/Loading";
export default {
  name: "App",
  components: {
    Loading
  },
  mounted() {},
  computed: {
    ...mapGetters(["loading"])
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
