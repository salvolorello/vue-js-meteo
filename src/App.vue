<template>
  <v-app class="app">
    <SideNav />
  </v-app>
</template>

<script>
import SideNav from "./components/SideNav/SideNav.vue";

export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    SideNav,
  },
};
</script>
<style scoped>
.app{
  /* background-color: red; */
height: 100%;
}
</style>
