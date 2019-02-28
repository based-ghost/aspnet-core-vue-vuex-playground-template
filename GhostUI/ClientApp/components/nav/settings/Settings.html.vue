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

<script lang="ts" src="./Settings.ts"></script>

<style lang="scss" scoped>
    @import '../../../assets/style/scss/components/settings.scss';
</style>