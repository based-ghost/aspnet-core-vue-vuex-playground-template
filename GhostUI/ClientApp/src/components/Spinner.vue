<template>
  <div v-show="isLoading" id="load-spinner">
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Spinner extends Vue {
  @Prop() public readonly isLoading: boolean;
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/scoped/spinner.scss";
</style>