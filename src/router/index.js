import Vue from "vue";
import Router from "vue-router";



Vue.use(Router);

const routes = [
  {
    path: "/api/home",
    component: resolve => require(["../views/home/Home.vue"], resolve)
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
