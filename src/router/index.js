import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Layout from "@/layout/index.vue";

export const constantRoutes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/login")
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/error/404")
  },
  {
    path: "/500",
    name: "500",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/error/500")
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "home" */ "@/views/home/index.vue"),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
];

const createRouter = () => new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router;