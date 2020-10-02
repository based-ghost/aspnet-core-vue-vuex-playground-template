import Vue from 'vue';
import App from '@/App.vue';
import '@/registerServiceWorker';
import '@/assets/style/scss/main.scss';
import store from '@/store';
import router from '@/router';
import Snotify from 'vue-snotify';
import { vClickOutside } from '@/plugins';
import { SignalRApi } from '@/api/signalR.service';
import { snotifyDefaults } from '@/config/vue-snotify.config';
import AxiosGlobalConfig from '@/config/axios.config';
import '@/config/fa.config';

// Execute global Axios configurations (e.g. request interceptors)
AxiosGlobalConfig.setup();

// Install custom plugins/third-party packages
Vue.use(vClickOutside)
   .use(Snotify, snotifyDefaults);

// In the mounted callback configure Signalr - wrap in this.$nextTick callback to ensure all children mount as well
new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    this.$nextTick(() => SignalRApi.startConnection());
  }
}).$mount('#app');
