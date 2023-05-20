import Vue from "vue";
import Vuex from "vuex";
import { counterStore } from "./modules/counterStore";
import { homeStore } from "./modules/homeStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counterStore: counterStore,
    homeStore: homeStore,
  },
});
