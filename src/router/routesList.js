import Home from "../views/HomeView.vue";
import About from "../views/AboutView.vue";

export const routesList = [
  { name: "Home", path: "/", component: Home, icon: "mdi-home" },
  { name: "About", path: "/about", component: About, icon: "mdi-apps" },
];
