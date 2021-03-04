import store from '@/store';
import { SampleApi } from '@/api';
import { IWeatherForecast, IWeatherForecastsState } from './types';
import { Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators';

const initialState: IWeatherForecastsState = {
  forecasts: [],
  startDateIndex: 0
};

@Module({
  store,
  dynamic: true,
  name: 'forecasts'
})
class WeatherForecast extends VuexModule implements IWeatherForecastsState {
  public startDateIndex: number = initialState.startDateIndex;
  public forecasts: IWeatherForecast[] = initialState.forecasts;

  @MutationAction<IWeatherForecastsState>({ mutate: ['forecasts', 'startDateIndex'] })
  public async GetWeatherForecasts(index: number | null): Promise<IWeatherForecastsState> {
    try {
      const startDateIndex = index || 0;
      const forecasts = await SampleApi.getWeatherForecastsAsync(startDateIndex);

      return {
        forecasts,
        startDateIndex
      };
    } catch (e) {
      return { ...initialState };
    }
  }
}

export const WeatherForecastModule = getModule(WeatherForecast);
