import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import store from '../store/index'
console.log(store.getters.getDarkMode)
Vue.use(Vuetify);
export default new Vuetify({
   
});
