<template>
  <section class="section">
    <div class="container">
      <h3 class="title is-3">Fetch Data</h3>
      <div class="box container-box">
        <h3 class="title is-4">Weather forecast</h3>
        <h5 class="subtitle is-5">
          This component demonstrates fetching data from the server - Start Date Index:
          <code>{{currentStartDateIndex}}</code>
        </h5>
        <Spinner :isLoading="isLoading" />
        <ForecastTable :forecasts="forecasts" />
        <p class="buttons is-pagination-group">
          <a
            class="button is-info"
            @click="paginateForecastData(-5)"
          >
            <font-awesome-icon icon="angle-double-left" size="2x" />
          </a>
          <a
            class="button is-info"
            @click="paginateForecastData(5)"
          >
            <font-awesome-icon icon="angle-double-right" size="2x" />
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Spinner } from "../../components";
import { isArrayWithLength } from "../../utils";
import { ForecastTable } from "./child-components";
import { WeatherForecastModule, IWeatherForecast } from "../../store/modules/weather-forecasts";

@Component({
  components: {
    Spinner,
    ForecastTable
  }
})
export default class FetchData extends Vue {
  public isLoading: boolean = false;

  get forecasts(): IWeatherForecast[] {
    return WeatherForecastModule.forecasts;
  }

  get currentStartDateIndex(): number {
    return WeatherForecastModule.startDateIndex;
  }

  public created(): void {
    if (!isArrayWithLength(this.forecasts)) {
      this.handleGetWeatherForecasts();
    }
  }

  public paginateForecastData(paginateNo: number): void {
    const newStartDateIndex = (this.currentStartDateIndex + paginateNo);
    this.handleGetWeatherForecasts(newStartDateIndex);
  }

  public handleGetWeatherForecasts(startDateIndex: number = 0): void {
    this.isLoading = true;

    // setTimeout to show loading animation
    WeatherForecastModule.GetWeatherForecasts(startDateIndex)
      .then(() => {
        setTimeout(() => {
          this.isLoading = false;
        }, 50);
      });
  }
}
</script>