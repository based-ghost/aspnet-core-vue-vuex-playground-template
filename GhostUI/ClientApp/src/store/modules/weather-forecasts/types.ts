export type IWeatherForecast = {
  readonly id: number;
  readonly dateFormatted: string;
  readonly temperatureC: number;
  readonly temperatureF: number;
  readonly summary: string;
};

export type IWeatherForecastsState = {
  startDateIndex: number;
  forecasts: IWeatherForecast[];
};
