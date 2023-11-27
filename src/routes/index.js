import { createRouter, createWebHistory } from "vue-router";
import Default from "../layouts/Default.vue";
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../pages/HomePage.vue"),
      meta: { layout: Default },
    },
  ],
});
