<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-wrapper">
      <div class="brand-wrapper">
        <bulma-logo
          role="img"
          width="135"
          height="66"
          aria-hidden="true"
        />
      </div>
      <div class="navbar-routes">
        <div v-if="isAuthenticated" class="navbar-items-group">
          <router-link
            v-for="route in validNavRoutes"
            :key="route.path"
            :to="route.path"
            class="navbar-item"
          >
            {{route.name}}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { RouteConfig } from 'vue-router';
import { AuthModule } from "../store/modules/auth";
import BulmaLogo from "@/assets/img/BulmaLogo.svg?inline";

@Component({
  components: {
    BulmaLogo
  }
})
export default class Navbar extends Vue {
  get isAuthenticated(): boolean {
    return AuthModule.isAuthenticated;
  }

  get validNavRoutes(): RouteConfig[] {
    return this.$router.options.routes.filter(({ meta }) => !!meta.showInNav);
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/scoped/navbar.scss";
</style>
