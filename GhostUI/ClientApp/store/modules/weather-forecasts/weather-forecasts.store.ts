import { SampleApi } from '../../../api';
import { WeatherForecastsActions, WeatherForecastsGetters, WeatherForecastsMutations, WeatherForecastsState } from './types';
import { DefineGetters, DefineMutations, DefineActions } from 'vuex-type-helper';

const initialState = () => {
    return {
        forecasts: [],
        startDateIndex: 0
    } as WeatherForecastsState;
};

const getters: DefineGetters<WeatherForecastsGetters, WeatherForecastsState> = {
    allForecastData: (state) => state.forecasts || [],
    currentStartDateIndex: (state) => state.startDateIndex || 0,
};

const actions: DefineActions<WeatherForecastsActions, WeatherForecastsState, WeatherForecastsMutations, WeatherForecastsGetters> = {
    clearWeatherState: ({ commit }) => {
        commit('CLEAR_WEATHER_STATE', {});
    },
    getWeatherForecasts: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            const newStartDateIndex = payload.startDateIndex || 0;
            SampleApi.getWeatherForecastsAsync(newStartDateIndex)
                .then(forecasts => {
                    commit('LOAD_NEW_FORECASTS', { forecasts, newStartDateIndex });
                    resolve(forecasts);
                })
                .catch(error => {
                    commit('CLEAR_WEATHER_STATE', {});
                    reject(error);
                });
        });
    },
};

const mutations: DefineMutations<WeatherForecastsMutations, WeatherForecastsState> = {
    LOAD_NEW_FORECASTS: (state, { forecasts, newStartDateIndex }) => {
        state.startDateIndex = newStartDateIndex;
        state.forecasts = forecasts || [];
    },
    UPDATE_START_DATE_INDEX: (state, { index }) => {
        state.startDateIndex = index || 0;
    },
    CLEAR_WEATHER_STATE: (state) => {
        Object.assign(state, initialState());
    }
};

const forecastsModule = {
    state: initialState(),
    getters,
    actions,
    mutations
};

export default forecastsModule;