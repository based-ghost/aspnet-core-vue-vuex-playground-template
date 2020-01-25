<template>
  <div id="app">
    <vue-snotify />
    <navbar />
    <settings />
    <transition mode="out-in" :name="$route.meta.transitionName">
      <router-view />
    </transition>
    <app-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppFooter, Navbar, Settings } from "@/components";

@Component({
  components: {
    Navbar,
    Settings,
    AppFooter
  }
})
export default class App extends Vue {}
</script>