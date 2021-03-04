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
        v-for="fc in forecasts"
        :key="fc.id"
      >
        <td>{{fc.dateFormatted}}</td>
        <td>{{fc.temperatureC}}</td>
        <td>{{fc.temperatureF}}</td>
        <td>{{fc.summary}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IWeatherForecast } from "../../../store/modules/weather-forecasts";

@Component
export default class ForecastTable extends Vue {
  @Prop() public readonly forecasts: IWeatherForecast[];
}
</script>