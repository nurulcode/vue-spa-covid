import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";
import moment from "vue-moment";

Vue.config.productionTip = false;
Vue.use(moment);
Vue.use(Chartkick.use(Chart));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
