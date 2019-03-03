<template>
    <div :class="['fixed-plugin', { 'fixed-plugin-active': open }]">
        <div class="dropdown">
            <a role="button"
               @click="toggleSettingsMenu"
               v-click-outside="closeSettingsMenu">
                <font-awesome-icon icon="cog" size="3x" />
            </a>
            <ul v-if="open" class="dropdown-menu">
                <li class="header-title">Settings</li>
                <li>
                    <a class="dropdown-item" 
                       target="_blank" 
                       rel="noopener" 
                       :href="nugetURLs.HEALTH_UI" 
                       role="button">
                        <span class="icon">
                            <font-awesome-icon icon="heart" />
                        </span>
                        <span>Health Checks</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item"
                       target="_blank"
                       rel="noopener"
                       :href="nugetURLs.SWAGGER_DOCS"
                       role="button">
                        <span class="icon">
                            <font-awesome-icon icon="file" />
                        </span>
                        <span>Swagger API</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" 
                       role="button" 
                       @click="logout">
                        <span class="icon">
                            <font-awesome-icon :icon="routesConfig.Login.meta.icon" />
                        </span>
                        <span>{{routesConfig.Login.displayName}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { AuthActions } from '../../store/modules/auth/types';
    import { RoutesConfig } from '../../config/routes.config';
    import { spaNugetUrls } from '../../config/constants';
    import { Dispatcher } from 'vuex-type-helper';

    @Component
    export default class Settings extends Vue {
        public readonly nugetURLs = spaNugetUrls;
        public readonly routesConfig = RoutesConfig;

        public open: boolean = false;

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
</script>