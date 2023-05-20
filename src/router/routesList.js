import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";

export const routesList = [
  { name: "Home", path: "/", component: Home, icon: "mdi-home" },
  { name: "Counter", path: "/count", component: About, icon: "mdi-apps" },
];
