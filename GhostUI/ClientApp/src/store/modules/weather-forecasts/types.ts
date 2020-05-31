export type IWeatherForecast = {
  readonly id: number;
  readonly summary: string;
  readonly temperatureC: number;
  readonly temperatureF: number;
  readonly dateFormatted: string;
};

export type IWeatherForecastsState = {
  startDateIndex: number;
  forecasts: IWeatherForecast[];
};
