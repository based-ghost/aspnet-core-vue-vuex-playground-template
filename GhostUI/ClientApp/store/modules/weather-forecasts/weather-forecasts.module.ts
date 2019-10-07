import store from "../../../store";
import { SampleApi } from "../../../api";
import { IWeatherForecast, IWeatherForecastsState } from "./types";
import { Module, VuexModule, MutationAction, getModule } from "vuex-module-decorators";

const initialState ={
  forecasts: [],
  startDateIndex: 0,
};

@Module({ dynamic: true, store, name: "forecasts" })
class WeatherForecast extends VuexModule implements IWeatherForecastsState {
   public startDateIndex: number = initialState.startDateIndex;
   public forecasts: IWeatherForecast[] = initialState.forecasts;

  @MutationAction<IWeatherForecastsState>({ mutate: ["forecasts", "startDateIndex"] })
  public async GetWeatherForecasts(index: number | null): Promise<IWeatherForecastsState> {
    try {
      const indexOrDefault = index || 0;
      const forecasts = await SampleApi.getWeatherForecastsAsync(indexOrDefault);
      return {
        forecasts,
        startDateIndex: indexOrDefault,
      };
    } catch (e) {
      return {
        ...initialState,
      };
    }
  }
}

export const WeatherForecastModule = getModule(WeatherForecast);
