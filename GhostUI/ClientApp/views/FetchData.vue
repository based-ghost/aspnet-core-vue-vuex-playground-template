<template>
    <section class="section">
        <div class="container is-centered box">
            <h3 class="title is-3">Weather forecast</h3>
            <h5 class="subtitle is-5">This component demonstrates fetching data from the server - Start Date Index: <strong>{{currentStartDateIndex.toString()}}</strong></h5>
            <spinner :show="loading" />
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
                    <tr v-for="(forecast, index) in allForecastData" :key="index">
                        <td>{{forecast.DateFormatted}}</td>
                        <td>{{forecast.TemperatureC}}</td>
                        <td>{{forecast.TemperatureF}}</td>
                        <td>{{forecast.Summary}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="field is-grouped is-pagination-group">
                <p class="control">
                    <a class="button is-info" @click="paginateForecastData('prev')">
                        <span class="icon">
                            <font-awesome-icon icon="chevron-left" />
                        </span>
                        <span>Previous</span>
                    </a>
                </p>
                <p class="control">
                    <a class="button is-info" @click="paginateForecastData('next')">
                        <span>Next</span>
                        <span class="icon">
                            <font-awesome-icon icon="chevron-right" />
                        </span>
                    </a>
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { WeatherForecastModule, IWeatherForecast } from '../store/modules/weather-forecasts.store';
    import { Spinner } from '../components/loaders';

    @Component({
        components: {
            Spinner
        }
    })
    export default class FetchData extends Vue {
        private loading: boolean = false;

        get currentStartDateIndex(): number {
            return WeatherForecastModule.currentStartDateIndex;
        }

        get allForecastData(): IWeatherForecast[] {
            return WeatherForecastModule.allForecastData;
        }

        private mounted(): void {
            if (!this.allForecastData || this.allForecastData.length === 0) {
                this.handleGetWeatherForecasts();
            }
        }

        private paginateForecastData(pageDirection: string): void {
            const newStartDateIndex = (!pageDirection || pageDirection === 'prev')
                ? (this.currentStartDateIndex - 5)
                : (this.currentStartDateIndex + 5);

            this.handleGetWeatherForecasts(newStartDateIndex);
        }

        private handleGetWeatherForecasts(startDateIndex: number = 0): void {
            this.loading = true;
            WeatherForecastModule.GetWeatherForecasts(startDateIndex).then(() => {
                // success
            }).catch(() => {
                // failed
            })
            .then(() => {
                // setTimeout added since the request completes so quickly - gives a change to show loading animation spinner for demonstration purposes
                setTimeout(() => {
                    this.loading = false;
                }, 50);
            });
        }
    }
</script>