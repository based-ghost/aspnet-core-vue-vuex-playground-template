import { Component, Prop, Vue } from 'vue-property-decorator';
import { RoutesConfig } from '../../../router/routes-config';

@Component
export default class NavBar extends Vue {
    readonly routesConfig = RoutesConfig;

    @Prop({ default: false })
    showNavigation: boolean;
}