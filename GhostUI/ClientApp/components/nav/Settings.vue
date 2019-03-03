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
                       @click="handleLogout">
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
    import { RoutesConfig } from '../../config/routes.config';
    import { spaNugetUrls } from '../../config/constants';
    import { AuthModule } from '../../store/modules/auth.store'; 

    @Component
    export default class Settings extends Vue {
        private readonly nugetURLs = spaNugetUrls;
        private readonly routesConfig = RoutesConfig;

        private open: boolean = false;

        private closeSettingsMenu(): void {
            this.open = false;
        }

        private toggleSettingsMenu(): void {
            this.open = !this.open;
        }

        private handleLogout(): void {
            AuthModule.DoLogout().then(() => {
                this.$snotify.clear();
                this.$router.push(this.routesConfig.Login.path);
            });
        }
    }
</script>