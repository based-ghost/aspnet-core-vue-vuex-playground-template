import { AxiosRequestConfig } from "axios";
import { BaseService } from "./base.service";
import { IWeatherForecast } from "../store/modules/weather-forecasts";

/**
 * SampleData API abstraction layer communication via Axios (typescript singleton pattern)
 */
class SampleService extends BaseService {
  private static _sampleService: SampleService;

  private constructor(controllerName: string) {
    super(controllerName);
  }

  public static get Instance(): SampleService {
    return (
      this._sampleService || (this._sampleService = new this("SampleData"))
    );
  }

  public async getWeatherForecastsAsync(startDateIndex: number): Promise<IWeatherForecast[]> {
    const config: AxiosRequestConfig = {
      params: {
        startDateIndex,
      },
    };
    const { data } = await this.$http.get<IWeatherForecast[]>("GetWeatherForecasts", config);
    return data;
  }
}

export const SampleApi = SampleService.Instance;
