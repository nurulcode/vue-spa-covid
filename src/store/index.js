import Vue from "vue";
import Vuex from "vuex";

import slide from "./slide";
import info from "./info";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    slide,
    info
  }
});
