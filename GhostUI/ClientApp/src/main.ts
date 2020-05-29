import Vue from 'vue';
import App from '@/App.vue';
import '@/assets/style/scss/main.scss';
import store from '@/store';
import router from '@/router';
import Snotify from 'vue-snotify';
import vClickOutside from '@/plugins/vue-click-outside';
import { snotifyDefaults } from '@/config/vue-snotify.config';
import { configureAxiosInterceptors } from '@/config/axios.config';
import '@/config/fa.config';
import '@/registerServiceWorker';

// Execute any base Axios configurations (e.g. request interceptors)
configureAxiosInterceptors();

// Install custom plugins
Vue.use(vClickOutside);

// Install node packages
Vue.use(Snotify, snotifyDefaults);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
