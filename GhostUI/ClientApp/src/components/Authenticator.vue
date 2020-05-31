<template>
  <div v-if="isLoading" :class="['fingerprint-spinner', authStatus]">
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthStatus, AuthStatusEnum } from "@/store/modules/auth";

@Component
export default class Authenticator extends Vue {
  @Prop() public readonly authStatus: AuthStatus;
  @Prop({ default: 1500 }) public readonly delay: number;

  get isLoading(): boolean {
    return [
      AuthStatusEnum.FAIL,
      AuthStatusEnum.SUCCESS,
      AuthStatusEnum.PROCESS,
    ].includes(this.authStatus);
  }

  @Watch('authStatus')
  public onStatusChange(newAuthStatus: AuthStatus): void {
    if ([AuthStatusEnum.FAIL, AuthStatusEnum.SUCCESS].includes(newAuthStatus)) {
      setTimeout(() => {
        this.$emit(newAuthStatus);
      }, this.delay);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/style/scss/scoped/authenticator.scss";
</style>
