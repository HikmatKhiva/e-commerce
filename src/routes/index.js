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
    {
      path: "/contact",
      component: () => import("../pages/ContactPage.vue"),
      meta: { layout: Default },
    },
    {
      path: "/about",
      component: () => import("../pages/AboutPage.vue"),
      meta: { layout: Default },
    },
    {
      path: "/wishlist",
      component: () => import("../pages/WishListPage.vue"),
      meta: { layout: Default },
    },
    {
      path: "/register",
      component: () => import("../pages/auth/RegisterPage.vue"),
      meta: { layout: Default },
    },
    {
      path: "/login",
      component: () => import("../pages/auth/LoginPage.vue"),
      meta: { layout: Default },
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/404Page.vue"),
      meta: { layout: Default },
    },
  ],
});
