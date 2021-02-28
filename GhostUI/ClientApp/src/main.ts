import Vue from 'vue';
import '@/registerServiceWorker';
import '@/assets/style/scss/main.scss';
import '@/config/fa.config';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import { vClickOutside } from '@/plugins';
import { SignalRApi } from '@/api/signalr.service';
import { AxiosGlobalConfig, snotifyDefaults } from '@/config';
import Snotify from 'vue-snotify';

// Install custom plugins/third-party packages
Vue.use(vClickOutside);
Vue.use(Snotify, snotifyDefaults);

// In the mounted callback configure Signalr/Axios - wrap in this.$nextTick callback to ensure all children mount as well
new Vue({
  router,
  store,
  render: (h) => h(App),
  mounted() {
    this.$nextTick(() => {
      AxiosGlobalConfig.setup();
      SignalRApi.startConnection();
    });
  }
}).$mount('#app');
