export interface IWeatherForecast {
    DateFormatted: string;
    TemperatureC: number;
    TemperatureF: number;
    Summary: string;
}

export interface IWeatherForecastsState {
    startDateIndex?: number;
    forecasts?: IWeatherForecast[];
}