<template>
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
      <tr v-for="forecast in forecasts" :key="forecast.id">
        <td>{{forecast.dateFormatted}}</td>
        <td>{{forecast.temperatureC}}</td>
        <td>{{forecast.temperatureF}}</td>
        <td>{{forecast.summary}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWeatherForecast } from "@/store/modules/weather-forecasts";

@Component
export default class ForecastTable extends Vue {
  @Prop() public readonly forecasts: IWeatherForecast[];
}
</script>