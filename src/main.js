import { createApp } from "vue";
import "./assets/css/style.css";
import { router } from "./routes";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import App from "./App.vue";
createApp(App).use(router).mount("#app");
