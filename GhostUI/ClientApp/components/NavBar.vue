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
            v-for="route in navRoutes"
            :key="route.path"
            class="navbar-item"
            :to="route.path"
          >
            <font-awesome-icon :icon="route.meta.icon"/>
            {{route.displayName}}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RoutesConfig, Route } from "../config/routes.config";
import { AuthModule } from "../store/modules/auth";

@Component
export default class NavBar extends Vue {
  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }

  public navRoutes: Route[] = Object
    .keys(RoutesConfig)
    .map((key) => RoutesConfig[key])
    .filter((route) => !!route.meta.showInNav);
}
</script>

<style lang="scss" scoped>
@import "../assets/style/scss/scoped/navbar.scss";
</style>