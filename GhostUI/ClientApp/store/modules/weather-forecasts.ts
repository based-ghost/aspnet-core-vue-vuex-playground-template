import store from '../../store';
import { SampleApi } from '../../api';
import { Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators'

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

@Module({ dynamic: true, store, name: 'forecasts' })
class WeatherForecast extends VuexModule implements IWeatherForecastsState {
    public startDateIndex: number = 0;
    public forecasts: IWeatherForecast[] = [];

    @MutationAction({ mutate: ['forecasts', 'startDateIndex'] })
    public async GetWeatherForecasts(index: number | null): Promise<any> {
        const forecasts = await SampleApi.getWeatherForecastsAsync(index || 0);
        return {
            forecasts: forecasts,
            startDateIndex: index || 0,
        };
    }
}

export const WeatherForecastModule = getModule(WeatherForecast); 