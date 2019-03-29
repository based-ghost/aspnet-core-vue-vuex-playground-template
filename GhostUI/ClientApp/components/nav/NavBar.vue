<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <img src="../../assets/image/bulma.io-logo.png" alt="Bulma Logo" width="165">
      </div>
      <div class="navbar-routes">
        <div v-if="isAuthenticated" class="routes-wrapper">
          <router-link :to="routesConfig.Form.path" class="navbar-item">
            <span class="icon">
              <font-awesome-icon :icon="routesConfig.Form.meta.icon"/>
            </span>
            <span>{{routesConfig.Form.displayName}}</span>
          </router-link>
          <router-link :to="routesConfig.Dashboard.path" class="navbar-item">
            <span class="icon">
              <font-awesome-icon :icon="routesConfig.Dashboard.meta.icon"/>
            </span>
            <span>{{routesConfig.Dashboard.displayName}}</span>
          </router-link>
          <router-link :to="routesConfig.FetchData.path" class="navbar-item">
            <span class="icon">
              <font-awesome-icon :icon="routesConfig.FetchData.meta.icon"/>
            </span>
            <span>{{routesConfig.FetchData.displayName}}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RoutesConfig } from "../../config/routes.config";
import { AuthModule } from "../../store/modules/auth";

@Component
export default class NavBar extends Vue {
  private readonly routesConfig = RoutesConfig;

  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }
}
</script>