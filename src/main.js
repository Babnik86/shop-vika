import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import Backendless from 'backendless'
import router from './router'
import VueLocalStorage from 'vue-ls'

Vue.use(VueLocalStorage);

Vue.use(Vuetify);
Backendless.initApp('CC614D4B-A8FF-57B9-FF33-DF67D0DEFC00', 'FDD743EA-8268-2C39-FFB9-858DF08CF500');

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
