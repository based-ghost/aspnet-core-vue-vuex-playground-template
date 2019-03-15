﻿import Vue from 'vue';
import VueRouter from 'vue-router';
import { RoutesConfig } from './config/routes.config';
import { Dashboard, FetchData, Form, Login } from './views';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
	base: process.env.BASE_URL,
    linkExactActiveClass: 'is-active',
    routes: [
        {
            path: RoutesConfig.Login.path,
            name: RoutesConfig.Login.displayName,
            component: Login,
            meta: RoutesConfig.Login.meta
        },
        {
            path: RoutesConfig.Form.path,
            name: RoutesConfig.Form.displayName,
            component: Form,
            meta: RoutesConfig.Form.meta
        },
        {
            path: RoutesConfig.Dashboard.path,
            name: RoutesConfig.Dashboard.displayName,
            component: Dashboard,
            meta: RoutesConfig.Dashboard.meta
        },
        {
            path: RoutesConfig.FetchData.path,
            name: RoutesConfig.FetchData.displayName,
            component: FetchData,
            meta: RoutesConfig.FetchData.meta
        },
    ]
});