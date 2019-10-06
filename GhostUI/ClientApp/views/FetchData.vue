<template>
  <section class="section">
    <div class="container is-centered box">
      <h3 class="title is-3">Weather forecast</h3>
      <h5 class="subtitle is-5">
        This component demonstrates fetching data from the server - Start Date Index:
        <code>{{currentStartDateIndex}}</code>
      </h5>
      <spinner :show="loading"/>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="forecast in forecasts" :key="forecast.ID">
            <td>{{forecast.DateFormatted}}</td>
            <td>{{forecast.TemperatureC}}</td>
            <td>{{forecast.TemperatureF}}</td>
            <td>{{forecast.Summary}}</td>
          </tr>
        </tbody>
      </table>
      <p class="buttons is-pagination-group">
        <a class="button is-info" @click="paginateForecastData('prev')">
          <font-awesome-icon icon="chevron-left"/>Previous
        </a>
        <a class="button is-info" @click="paginateForecastData('next')">
          Next
          <font-awesome-icon icon="chevron-right"/>
        </a>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Spinner } from "../components/loaders";
import {
  WeatherForecastModule,
  IWeatherForecast
} from "../store/modules/weather-forecasts";

@Component({
  components: {
    Spinner
  }
})
export default class FetchData extends Vue {
  private loading: boolean = false;

  get currentStartDateIndex(): number {
    return WeatherForecastModule.startDateIndex;
  }

  get forecasts(): IWeatherForecast[] {
    return WeatherForecastModule.forecasts;
  }

  private created(): void {
    if (!this.forecasts || this.forecasts.length === 0) {
      this.handleGetWeatherForecasts();
    }
  }

  private paginateForecastData(pageDirection: string): void {
    const newStartDateIndex = (!pageDirection || pageDirection === "prev")
      ? this.currentStartDateIndex - 5
      : this.currentStartDateIndex + 5;

    this.handleGetWeatherForecasts(newStartDateIndex);
  }

  private handleGetWeatherForecasts(startDateIndex: number = 0): void {
    this.loading = true;
    WeatherForecastModule.GetWeatherForecasts(startDateIndex)
      .finally(() => {
        setTimeout(() => { // setTimeout to show loading animation
          this.loading = false;
        }, 50);
      });
  }
}
</script>