import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from '@/routes';
const router = new VueRouter({
  mode: process.env.VUE_APP_ROUTER_MODE,
  routes
});

export default router;