<template>
  <div
    v-if="isAuthenticated"
    :class="['fixed-plugin', { 'fixed-plugin-active': open }]"
  >
    <div class="dropdown">
      <a
        role="button"
        @click="open = !open"
        v-click-outside="closeSettingsMenu"
      >
        <font-awesome-icon icon="cog" size="3x" />
      </a>
      <ul v-if="open" class="dropdown-menu">
        <li class="header-title">Settings</li>
        <li>
          <a
            role="button"
            target="_blank"
            class="dropdown-item"
            rel="noopener noreferrer"
            :href="nugetUrls.HEALTH_UI"
          >
            <font-awesome-icon icon="heart" />Health Checks
          </a>
        </li>
        <li>
          <a
            role="button"
            target="_blank"
            class="dropdown-item"
            rel="noopener noreferrer"
            :href="nugetUrls.SWAGGER_DOCS"
          >
            <font-awesome-icon icon="file" />Swagger API
          </a>
        </li>
        <li>
          <a
            role="button"
            class="dropdown-item"
            @click="handleLogout"
          >
            <font-awesome-icon :icon="routesConfig.Login.meta.icon" />
            {{routesConfig.Login.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthModule } from "@/store/modules/auth";
import { nugetUrlConfig } from "@/config/constants";
import { Route, RoutesConfig } from "@/config/routes.config";

@Component
export default class Settings extends Vue {
  public open: boolean = false;

  public readonly nugetUrls: Record<string, string> = nugetUrlConfig;
  public readonly routesConfig: Record<string, Route> = RoutesConfig;

  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }

  public closeSettingsMenu(): void {
    this.open = false;
  }

  public handleLogout(): void {
    AuthModule.LogoutUser().then(() => {
      this.$snotify.clear();
      this.$router.push(this.routesConfig.Login.path);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/scoped/settings.scss";
</style>