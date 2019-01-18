import Vue from 'vue';
import Snotify, { SnotifyPosition, SnotifyDefaults, SnotifyStyle } from 'vue-snotify';

const snotifyOptions: SnotifyDefaults = {
    global: {
        newOnTop: true,
        maxAtPosition: 4,
        maxOnScreen: 4,
        oneAtTime: false,
        preventDuplicates: true
    },
    toast: {
        position: SnotifyPosition.centerTop,
        timeout: 2500,
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true
    },
    type: {
        [SnotifyStyle.async]: {
            closeOnClick: true,
            pauseOnHover: true,
            timeout: 7500
        }
    }
};

Vue.use(Snotify, snotifyOptions);