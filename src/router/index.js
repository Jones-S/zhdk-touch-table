import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

// const ProjectView = = {
//   // make sure to add a prop named exactly like the route param
//   props: ['id'],
//   template: () => import("../views/ProjectView.vue"),
// }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/osc-test",
      name: "OSC",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProjectView.vue"),
    },
    {
      path: "/geotiff-p5-test",
      name: "Geotiff",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/GeotiffProject.vue"),
    },
  ],
});

export default router;
