﻿import { BaseService } from './base.service';
import { IWeatherForecast } from '../../store/modules/weather-forecasts.store';

/**
 * SampleDataController endpoints
 */
const sampleService = {
    CONTROLLER_ID: 'SampleData',
    GET_FORECASTS_RQ: 'GetWeatherForecasts'
};

/**
 * SampleData API abstraction layer communication via Axios (typescript singleton pattern)
 */
class SampleService extends BaseService {
    private static _sampleService: SampleService;

    public static get Instance(): SampleService {
        return this._sampleService || (this._sampleService = new this(sampleService.CONTROLLER_ID));
    }

    private constructor(controllerName: string) {
        super(controllerName);
    }

    public async getWeatherForecastsAsync(startDateIndex: number): Promise<IWeatherForecast[]> {
        const { data } = await this.$http.get(sampleService.GET_FORECASTS_RQ, { params: { startDateIndex: startDateIndex } });
        return <IWeatherForecast[]> data;
    }
}

export const SampleApi = SampleService.Instance;