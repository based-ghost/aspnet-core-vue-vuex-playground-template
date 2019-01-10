import { Component, Vue } from 'vue-property-decorator';
import { WeatherForecast, WeatherForecastsActions } from '../../store/modules/weather-forecasts/types';
import { Spinner } from '../../components/loaders';
import { Dispatcher } from 'vuex-type-helper';
import { mapGetters } from 'vuex';

@Component({
    components: {
        Spinner
    },
    computed: mapGetters({
        allForecastData: 'allForecastData',
        currentStartDateIndex: 'currentStartDateIndex'
    })
})
export default class FetchData extends Vue {
    loading: boolean = false;
    currentStartDateIndex: number;
    allForecastData: WeatherForecast[];

    mounted(): void {
        if (!this.allForecastData || this.allForecastData.length === 0) {
            this.handleGetWeatherForecasts();
        }
    }

    paginateForecastData(pageDirection: string): void {
        const newStartDateIndex = (!pageDirection || pageDirection === 'prev')
            ? (this.currentStartDateIndex - 5)
            : (this.currentStartDateIndex + 5);

        this.handleGetWeatherForecasts(newStartDateIndex);
    }

    handleGetWeatherForecasts(startDateIndex: number = 0): void {
        this.loading = true;

        this.$store.dispatch<Dispatcher<WeatherForecastsActions>>({ type: 'getWeatherForecasts', startDateIndex: startDateIndex }).then(() => {
            // success
        }).catch(() => {
            // failed
        })
        .then(() => {
            setTimeout(() => {
                this.loading = false;
            }, 50);
        });
    }
}