import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/coin/:id",
    name: "coin-detail",
    component: () => import(/* webpackChunkName: "about" */ "../views/CoinDetail.vue")
  },
  {
    path: "*",
    name: "Error",
    component: () => import(/* webpackChunkName: "about" */ "../views/Error.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
