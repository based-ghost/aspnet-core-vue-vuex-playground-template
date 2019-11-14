<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <img 
          src="@/assets/image/bulma.io-logo.png" 
          alt="bulma.io-logo" 
          width="155"
        />
      </div>
      <div class="navbar-routes">
        <router-link
          v-if="isAuthenticated"
          v-for="route in navRoutes"
          :key="route.path"
          :to="route.path"
          class="navbar-item"
        >
          <font-awesome-icon :icon="route.meta.icon"/>
          {{route.name}}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RoutesConfig, Route } from "@/config/routes.config";
import { AuthModule } from "@/store/modules/auth";

@Component
export default class Navbar extends Vue {
  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }

  public navRoutes: Route[] = Object
    .keys(RoutesConfig)
    .map((key: string) => RoutesConfig[key])
    .filter((route: Route) => !!route.meta.showInNav);
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/scoped/navbar.scss";
</style>
