import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import colors from "vuetify/util/colors";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#0171E2",
          secondary: "#5CBBF6",
          background: "#f5f5f7", // Set your global background color here
          text: "#6e6e73",
        },
      },
    },
  },
});
