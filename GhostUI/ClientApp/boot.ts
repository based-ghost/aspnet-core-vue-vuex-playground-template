import './assets/style/scss/main.scss';
import './prototype';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import vClickOutside from './plugins/vue-click-outside';
import { configureAxiosInterceptors } from './config/axios.config';
import './config/fa.config'; // Configure fortawesome for vue
import './config/vue-snotify.config'; // Install/configure vue-snotify package (self-contained set-up in file)

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
