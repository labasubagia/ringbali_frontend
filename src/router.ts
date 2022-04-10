import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/products/:id",
      name: "Product",
      component: () => import("@/pages/Product.vue"),
    },
  ],
});

export default router;
