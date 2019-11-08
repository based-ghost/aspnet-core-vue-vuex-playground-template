<template>
  <section class="section">
    <div class="container is-centered box">
      <h3 class="title is-3">Weather forecast</h3>
      <h5 class="subtitle is-5">
        This component demonstrates fetching data from the server - Start Date Index:
        <code>{{currentStartDateIndex}}</code>
      </h5>
      <spinner :isLoading="isLoading"/>
      <forecast-table :forecasts="forecasts" />
      <p class="buttons is-pagination-group">
        <a class="button is-info" @click="paginateForecastData('prev')">
          <font-awesome-icon icon="chevron-left"/>Previous
        </a>
        <a class="button is-info" @click="paginateForecastData('next')">
          Next<font-awesome-icon icon="chevron-right"/>
        </a>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Spinner } from "@/components";
import { isArrayWithLength } from "@/utils";
import { ForecastTable } from "./child-components";
import { WeatherForecastModule, IWeatherForecast } from "@/store/modules/weather-forecasts";

@Component({
  components: {
    Spinner,
    ForecastTable,
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

  public paginateForecastData(pageDirection: string): void {
    const indexMod: number = (pageDirection === 'prev') ? -5 : 5;
    const newStartDateIndex: number = (this.currentStartDateIndex + indexMod);
    this.handleGetWeatherForecasts(newStartDateIndex);
  }

  public handleGetWeatherForecasts(startDateIndex: number = 0): void {
    this.isLoading = true;
    WeatherForecastModule.GetWeatherForecasts(startDateIndex).then(() => {
      setTimeout(() => { // setTimeout to show loading animation
        this.isLoading = false;
      }, 50);
    });
  }
}
</script>