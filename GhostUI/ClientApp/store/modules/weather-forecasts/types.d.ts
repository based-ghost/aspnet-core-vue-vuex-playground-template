export type IWeatherForecast = {
  readonly ID: number;
  readonly DateFormatted: string;
  readonly TemperatureC: number;
  readonly TemperatureF: number;
  readonly Summary: string;
};

export type IWeatherForecastsState = {
  startDateIndex: number;
  forecasts: IWeatherForecast[];
};
