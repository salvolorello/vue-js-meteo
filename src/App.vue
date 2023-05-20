<template>
  <v-app>
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
