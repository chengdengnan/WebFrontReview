import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";
import {
  javaScript,
  vue,
  react,
  engineer,
  nodejs,
  crossTerminal,
  algorithm,
  other
} from "./modules/navbar";

const routes: Array<RouteRecordRaw> = [
  ...javaScript,
  ...vue,
  ...react,
  ...engineer,
  ...nodejs,
  ...crossTerminal,
  ...algorithm,
  ...other,
  {
    path: "/",
    name: "Index",
    meta: {
      title: "Barry blog"
    },
    component: () =>
      import(/* webpackChunkName: "index" */ "@/views/index/index.vue")
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
