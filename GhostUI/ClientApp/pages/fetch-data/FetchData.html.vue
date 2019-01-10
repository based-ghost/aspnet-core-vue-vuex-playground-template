<template>
    <section class="section">
        <div class="container is-centered box">
            <h3 class="title is-3">Weather forecast</h3>
            <h5 class="subtitle is-5">This component demonstrates fetching data from the server. Start Date Index: {{currentStartDateIndex.toString()}}</h5>
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
                            <i class="fa fa-chevron-left"></i>
                        </span>
                        <span>Previous</span>
                    </a>
                </p>
                <p class="control">
                    <a class="button is-info" @click="paginateForecastData('next')">
                        <span>Next</span>
                        <span class="icon">
                            <i class="fa fa-chevron-right"></i>
                        </span>
                    </a>
                </p>
            </div>
        </div>
    </section>
</template>

<script lang="ts" src="./FetchData.ts"></script>