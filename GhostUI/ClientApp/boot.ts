import './assets/style/scss/main.scss';
import './config/fa.config';
import './prototype';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './config/vue-snotify.config';
import vClickOutside from './plugins/vue-click-outside';
import { configureAxiosInterceptors } from './config/axios.config';

// Install custom plugins
Vue.use(vClickOutside);

// Execute any base Axios configurations (e.g. request interceptors)
configureAxiosInterceptors();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-root');
