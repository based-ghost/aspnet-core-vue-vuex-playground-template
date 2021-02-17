export type IWeatherForecast = Readonly<{
  id: number;
  summary: string;
  temperatureC: number;
  temperatureF: number;
  dateFormatted: string;
}>;

export type IWeatherForecastsState = {
  startDateIndex: number;
  forecasts: IWeatherForecast[];
};
