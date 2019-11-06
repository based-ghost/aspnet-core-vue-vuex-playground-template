<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <img 
          src="../assets/image/bulma.io-logo.png" 
          alt="bulma.io-logo" 
          width="155"
        />
      </div>
      <div class="navbar-routes">
        <div v-if="isAuthenticated" class="routes-wrapper">
          <router-link
            v-for="routeKey in navRouteKeys"
            :key="routeKey"
            class="navbar-item"
            :to="routesConfig[routeKey].path"
          >
            <font-awesome-icon :icon="routesConfig[routeKey].meta.icon"/>
            {{routesConfig[routeKey].displayName}}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RoutesConfig } from "../config/routes.config";
import { AuthModule } from "../store/modules/auth";

@Component
export default class NavBar extends Vue {
  public readonly routesConfig: RoutesConfig = RoutesConfig;

  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }

  get navRouteKeys(): string[] {
    return Object
      .keys(RoutesConfig)
      .filter((key: string) => !!RoutesConfig[key].meta.showInNav);
  }
}
</script>