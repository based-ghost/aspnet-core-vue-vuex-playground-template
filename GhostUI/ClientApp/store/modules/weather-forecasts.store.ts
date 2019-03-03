import store from '../../store';
import { SampleApi } from '../../api';
import { Module, VuexModule, Mutation, MutationAction, getModule } from 'vuex-module-decorators'

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

    public get currentStartDateIndex(): number {
        return this.startDateIndex || 0;
    }

    public get allForecastData(): IWeatherForecast[] {
        return this.forecasts || [];
    }

    @MutationAction({ mutate: ['forecasts', 'startDateIndex'] })
    public async GetWeatherForecasts(index: number | null) {
        const normalizedStartDateIndex = index || 0;
        const forecasts = await SampleApi.getWeatherForecastsAsync(normalizedStartDateIndex);
        return {
            forecasts: forecasts,
            startDateIndex: normalizedStartDateIndex,
        };
    }

    @Mutation
    private SET_START_DATE_INDEX(index: number) {
        this.startDateIndex = index;
    }
}

export const WeatherForecastModule = getModule(WeatherForecast); 