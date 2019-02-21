import './assets/style/scss/main.scss';
import './config/fa.config';
import './prototype';
import Vue from 'vue';
import router from './router';
import { App } from './views';
import store from './store/store';
import './config/vue-snotify.config';
import vClickOutside from './plugins/vue-click-outside';

// Install custom plugins
Vue.use(vClickOutside);

// Vue debug options (Vue.config.devtools also needs setting in './store/store' - to pick up vuex stores)
Vue.config.devtools = false;
Vue.config.productionTip = (process.env.NODE_ENV === 'production');

// Mount app to Vue instance
new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app-root');
