import { Component, Vue } from 'vue-property-decorator';
import { AuthActions } from '../../../store/modules/auth/types';
import { RoutesConfig } from '../../../config/routes.config';
import { spaNugetUrls } from '../../../config/constants';
import { Dispatcher } from 'vuex-type-helper';

@Component
export default class Settings extends Vue {
    readonly nugetURLs = spaNugetUrls;
    readonly routesConfig = RoutesConfig;

    open: boolean = false;

    public closeSettingsMenu(): void {
        this.open = false;
    }

    public toggleSettingsMenu(): void {
        this.open = !this.open;
    }

    public logout(): void {
        this.$store.dispatch<Dispatcher<AuthActions>>({ type: 'authLogout' }).then(() => {
            this.$snotify.clear();
            this.$router.push(this.routesConfig.Login.path);
            this.$store.dispatch('clearAllStores');
        });
    }
}