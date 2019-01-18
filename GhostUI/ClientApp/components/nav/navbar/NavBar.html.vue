<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="brand-wrapper">
            <img src="../../../assets/image/bulma.io-logo.png" alt="">
        </div>
        <div class="navbar-centered">
            <div v-if="showNavigation" class="navbar-start">
                <router-link :to="routesConfig.Form.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routesConfig.Form.meta.icon" />
                    </span>
                    <span>{{routesConfig.Form.displayName}}</span>
                </router-link>
                <div class="nav-divider"></div>
                <router-link :to="routesConfig.Dashboard.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routesConfig.Dashboard.meta.icon" />
                    </span>
                    <span>{{routesConfig.Dashboard.displayName}}</span>
                </router-link>
                <div class="nav-divider"></div>
                <router-link :to="routesConfig.FetchData.path" class="navbar-item">
                    <span class="icon">
                        <font-awesome-icon :icon="routesConfig.FetchData.meta.icon" />
                    </span>
                    <span>{{routesConfig.FetchData.displayName}}</span>
                </router-link>
            </div>
        </div>     
    </nav>
</template>

<script lang="ts" src="./NavBar.ts"></script>