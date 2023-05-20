import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { routesList } from "./routesList";

Vue.use(VueRouter);

const routes = routesList.map((i) => {
  return {
    name: i.name,
    path: i.path,
    component: i.component,
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
