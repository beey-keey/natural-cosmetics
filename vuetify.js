import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";

const vuetify = createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#f5ebe0", // Customize nude colors
          secondary: "#f5d3c8",
        },
      },
    },
  },
});

createApp(App).use(vuetify).mount("#app");
