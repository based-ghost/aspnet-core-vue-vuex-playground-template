import Vue from 'vue';
import { routes } from './routes';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;