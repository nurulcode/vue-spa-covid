import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#D43F8D",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#F82649",
        info: "#2196F3",
        success: "#16a085",
        warning: "#FFC107",
        orange: "#FC7303",
        wet: "#34495e",
        mid: "#2c3e50",
        silver: "#95a5a6"
      }
    }
  }
});
