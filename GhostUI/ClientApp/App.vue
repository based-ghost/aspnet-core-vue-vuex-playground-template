<template>
  <div id="app-root">
    <vue-snotify />
    <nav-bar />
    <settings />
    <transition :name="$route.meta.transitionName" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppFooter, NavBar, Settings } from "./components";

@Component({
  components: {
    NavBar,
    Settings,
    AppFooter
  }
})
export default class App extends Vue {}
</script>