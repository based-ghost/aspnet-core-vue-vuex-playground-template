export interface WeatherForecast {
    DateFormatted: string;
    TemperatureC: number;
    TemperatureF: number;
    Summary: string;
}

export interface WeatherForecastsState {
    startDateIndex?: number;
    forecasts?: WeatherForecast[];
}

export interface WeatherForecastsGetters {
    currentStartDateIndex: number,
    allForecastData: WeatherForecast[]
}

export interface WeatherForecastsActions {
    clearWeatherState: {},
    getWeatherForecasts: {
        startDateIndex: number
    }
}

export interface WeatherForecastsMutations {
    CLEAR_WEATHER_STATE: {},
    LOAD_NEW_FORECASTS: {
        newStartDateIndex: number,
        forecasts: WeatherForecast[]
    },
    UPDATE_START_DATE_INDEX: {
        index: number
    }
}