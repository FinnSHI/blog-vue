import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/home/Home";
import ArticlePage from "@/views/article/ArticlePage";
import Article from "@/views/article/Article";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/articles',
    component: ArticlePage,
  },
  {
    path: '/articles/:articleId',
    component: Article,
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
