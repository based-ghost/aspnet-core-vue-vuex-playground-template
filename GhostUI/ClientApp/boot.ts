import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vClickOutside from './plugins/vue-click-outside';
import { configureAxiosInterceptors } from './config/axios.config';
import './config/fa.config';
import './assets/style/scss/main.scss';
import './config/vue-snotify.config';

// Execute any base Axios configurations (e.g. request interceptors)
configureAxiosInterceptors();

// Install custom plugins
Vue.use(vClickOutside);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-root');
