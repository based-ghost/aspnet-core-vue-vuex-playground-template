import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './modules/auth/auth.store';
import formModule from './modules/form/form.store';
import forecastsModule from './modules/weather-forecasts/weather-forecasts.store';
import { AuthMutations } from './modules/auth/types';
import { FormMutations } from './modules/form/types';
import { WeatherForecastsMutations } from './modules/weather-forecasts/types';
import { Committer } from 'vuex-type-helper';

Vue.use(Vuex);
Vue.config.devtools = false;

export default new Vuex.Store({
    modules: {
        authStore: authModule,
        formStore: formModule,
        forecastsStore: forecastsModule
    },
    actions: {
        clearAllStores({ commit }) {
            commit<Committer<AuthMutations>>({ type: 'CLEAR_AUTH_STATE' });
            commit<Committer<FormMutations>>({ type: 'CLEAR_FORM_STATE' });
            commit<Committer<WeatherForecastsMutations>>({ type: 'CLEAR_WEATHER_STATE' });
        }
    }
});