import './assets/style/scss/main.scss';
import './config/fa.config';
import './prototype';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './config/vue-snotify.config';
import { configureAxiosInterceptors } from './api';
import vClickOutside from './plugins/vue-click-outside';

// Install custom plugins
Vue.use(vClickOutside);

// Execute any base Axios configurations (e.g. request interceptors)
configureAxiosInterceptors();

// Vue debug options (Vue.config.devtools also needs setting in './store/store' - to pick up vuex stores)
Vue.config.devtools = false;
Vue.config.productionTip = (process.env.NODE_ENV === 'production');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-root');
