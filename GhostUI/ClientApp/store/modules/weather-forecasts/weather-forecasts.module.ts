import store from "../../../store";
import { SampleApi } from "../../../api";
import { IWeatherForecast, IWeatherForecastsState } from "./types";
import { Module, VuexModule, MutationAction, getModule } from "vuex-module-decorators";

@Module({ dynamic: true, store, name: "forecasts" })
class WeatherForecast extends VuexModule implements IWeatherForecastsState {
  public startDateIndex: number = 0;
  public forecasts: IWeatherForecast[] = [];

  @MutationAction<IWeatherForecastsState>({ mutate: ["forecasts", "startDateIndex"] })
  public async GetWeatherForecasts(index: number | null): Promise<IWeatherForecastsState> {
    try {
      const forecasts = await SampleApi.getWeatherForecastsAsync(index || 0);
      return {
        forecasts: forecasts,
        startDateIndex: index || 0
      };
    } catch (e) {
      return {
        forecasts: [],
        startDateIndex: 0
      };
    }
  }
}

export const WeatherForecastModule = getModule(WeatherForecast);
