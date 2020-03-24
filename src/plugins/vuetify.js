import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ee44aa",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#c0392b",
        info: "#2196F3",
        success: "#16a085",
        success1: "#1abc9c",
        warning: "#FFC107",
        orange: "#e67e22",
        wet: "#34495e",
        mid: "#2c3e50",
        silver: "#95a5a6"
      }
    }
  }
});
