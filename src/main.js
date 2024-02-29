/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import Particles from "vue3-particles";

const app = createApp(App);
app.use(Particles);

registerPlugins(app);

app.mount("#app");
