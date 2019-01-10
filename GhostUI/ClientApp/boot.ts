import './assets/style/scss/main.scss';
import './prototype';
import Vue from 'vue';
import { App } from './pages';
import router from './router';
import store from './store/store';
import Snotify from 'vue-snotify';
import vClickOutside from './plugins/vue-click-outside';
import { snotifyOptions } from './config/vue-snotify.config';

// Install NPM modules/Plugins
Vue.use(vClickOutside);
Vue.use(Snotify, snotifyOptions);

// Vue debug options (Vue.config.devtools also needs setting in './store/store' - to pick up vuex stores)
Vue.config.devtools = false;
Vue.config.performance = false;
Vue.config.productionTip = false;

// Mount app to Vue instance
new Vue({
    router: router,
    store: store,
    render: h => h(App)
}).$mount('#app-root');
