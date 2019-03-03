import Vue from 'vue';
import Vuex from 'vuex';
import { IAuthState } from './modules/auth.store';
import { IFormState } from './modules/form.store';
import { IWeatherForecastsState } from './modules/weather-forecasts.store';

Vue.use(Vuex);

export interface IRootState {
    auth: IAuthState;
    form: IFormState;
    forecasts: IWeatherForecastsState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({});