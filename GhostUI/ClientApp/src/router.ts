import Vue from 'vue';
import Router from 'vue-router';
import { RoutesConfig } from './config/routes.config';
import { Dashboard, FetchData, Form, Login } from './views';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
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
