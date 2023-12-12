import { createApp } from "vue";
import "./assets/css/style.css";
import { router } from "./routes";
import { plugin, defaultConfig } from "@formkit/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import App from "./App.vue";
createApp(App).use(router).use(plugin, defaultConfig).mount("#app");
