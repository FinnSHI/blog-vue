import Vue from "vue";
import Router from "vue-router";
import Home from '../views/home/Home'


Vue.use(Router);

const routes = [
  {
    path: "/home",
    component: Home
  }
];

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
