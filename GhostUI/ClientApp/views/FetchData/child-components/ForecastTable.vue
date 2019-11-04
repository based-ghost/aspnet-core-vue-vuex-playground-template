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
      <tr
        v-for="forecast in forecasts"
        :key="forecast.ID"
      >
        <td>{{forecast.DateFormatted}}</td>
        <td>{{forecast.TemperatureC}}</td>
        <td>{{forecast.TemperatureF}}</td>
        <td>{{forecast.Summary}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWeatherForecast } from "../../../store/modules/weather-forecasts";

@Component
export default class ForecastTable extends Vue {
  @Prop({
    default: []
  }) public readonly forecasts: IWeatherForecast[];
}
</script>