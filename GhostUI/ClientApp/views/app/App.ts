import { Component, Vue } from 'vue-property-decorator';
import AppFooter from '../../components/footer/Footer.html.vue';
import { NavBar, Settings } from '../../components/nav';
import { sfcGlobalData } from '../../config/constants';
import { mapGetters } from 'vuex';

@Component({
    components: {
        NavBar,
        Settings,
        AppFooter
    },
    computed: mapGetters({
        isAuthenticated: 'isAuthenticated'
     })
})
export default class App extends Vue {
    readonly sfcData = sfcGlobalData;
}