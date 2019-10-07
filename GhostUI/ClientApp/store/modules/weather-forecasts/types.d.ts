export interface IWeatherForecast {
  readonly ID: number;
  readonly DateFormatted: string;
  readonly TemperatureC: number;
  readonly TemperatureF: number;
  readonly Summary: string;
}

export interface IWeatherForecastsState {
  readonly startDateIndex?: number;
  readonly forecasts?: IWeatherForecast[];
}
