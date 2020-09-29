import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { Dashboard, FetchData, Form, Login } from '@/views';

Vue.use(Router);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      showInNav: false,
      transitionName: 'fade',
      icon: 'sign-out-alt'
    }
  },
  {
    path: '/form',
    name: 'Form',
    component: Form,
    meta: {
      showInNav: true,
      transitionName: 'page-slide-left'
    }
  },
  {
    path: '/dashboard',
    name: 'Home',
    component: Dashboard,
    meta: {
      showInNav: true,
      transitionName: 'fade'
    }
  },
  {
    path: '/fetchdata',
    name: 'Fetch',
    component: FetchData,
    meta: {
      showInNav: true,
      transitionName: 'page-slide-right'
    }
  }
];

export default new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'is-active',
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 250); // Timout delay set to match animation duration of from-page
    });
  }
});