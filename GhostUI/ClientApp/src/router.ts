import Vue from "vue";
import VueRouter from "vue-router";
import { RoutesConfig } from "./config/routes.config";
import { Dashboard, FetchData, Form, Login } from "./views";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "is-active",
  routes: [
    {
      component: Login,
      ...RoutesConfig.Login
    },
    {
      component: Form,
      ...RoutesConfig.Form
    },
    {
      component: Dashboard,
      ...RoutesConfig.Dashboard
    },
    {
      component: FetchData,
      ...RoutesConfig.FetchData
    }
  ]
});
