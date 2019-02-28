import { Component, Vue } from 'vue-property-decorator';
import { RoutesConfig } from '../../../config/routes.config';
import { mapGetters } from 'vuex';

@Component({
    computed: mapGetters({
        isAuthenticated: 'isAuthenticated'
    })
})
export default class NavBar extends Vue {
    readonly routesConfig = RoutesConfig;
}