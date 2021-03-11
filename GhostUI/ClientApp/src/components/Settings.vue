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
            :href="nugetUrls.HealthUi"
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
            :href="nugetUrls.SwaggerDocs"
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
            <font-awesome-icon :icon="loginRoutConfig.meta.icon" />
            {{loginRoutConfig.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AuthModule } from "../store/modules/auth";
import { NUGET_URL_CONFIG } from "../config";
import { RouteConfig } from 'vue-router';

@Component
export default class Settings extends Vue {
  public open: boolean = false;
  public readonly nugetUrls = NUGET_URL_CONFIG;

  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }

  get loginRoutConfig(): RouteConfig | null {
    return this.$router.options.routes.find(({ name }) => name === 'Login');
  }

  public closeSettingsMenu(): void {
    this.open = false;
  }

  public async handleLogout(): Promise<void> {
    try {
      await AuthModule.LogoutUser();
      this.$snotify.clear();
      this.$router.push(this.loginRoutConfig.path);
    } catch (e) {
      console.error(e);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/scoped/settings.scss";
</style>