import { RouteConfig } from 'vue-router';
import { Dashboard, FetchData, Form, Login } from '../pages';

export const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {
            transitionName: 'fade'
        }
    },
    {
        path: '/form',
        name: 'form',
        component: Form,
        meta: {
            transitionName: 'pageSlideLeft'
        }
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            transitionName: 'fade'
        }
    },
    {
        path: '/fetchdata',
        name: 'fetchdata',
        component: FetchData,
        meta: {
            transitionName: 'pageSlideRight'
        }
    },
];