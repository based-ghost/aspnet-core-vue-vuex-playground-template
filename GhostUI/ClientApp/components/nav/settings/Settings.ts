import { Component, Vue, Prop } from 'vue-property-decorator';
import { AuthActions } from '../../../store/modules/auth/types';
import { spaNugetUrls } from '../../../config/constants';
import { Dispatcher } from 'vuex-type-helper';

@Component
export default class Settings extends Vue {
    readonly swaggerURL: string = spaNugetUrls.swagger_docs;
    readonly healthCheckURL: string = spaNugetUrls.health_ui;

    @Prop({ default: false })
    showSettings: boolean;

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
            this.$router.push('/');
            this.$store.dispatch('clearAllStores');
        });
    }
}