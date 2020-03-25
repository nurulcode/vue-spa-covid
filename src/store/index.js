import Vue from "vue";
import Vuex from "vuex";

import slide from "./slide";
import info from "./info";
import pb from "./papua_barat";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    slide,
    info,
    pb
  }
});
