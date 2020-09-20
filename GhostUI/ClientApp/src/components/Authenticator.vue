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
import { AuthStatusEnum } from "@/store/modules/auth";

@Component
export default class Authenticator extends Vue {
  @Prop() public readonly authStatus: AuthStatusEnum;
  @Prop({ default: 1500 }) public readonly delay: number;

  private readonly authStatusEmitOnValues: AuthStatusEnum[] = [
    AuthStatusEnum.FAIL,
    AuthStatusEnum.SUCCESS,
  ];

  get isLoading(): boolean {
    return this.authStatus !== AuthStatusEnum.NONE;
  }

  @Watch('authStatus')
  public onStatusChange(newAuthStatus: AuthStatusEnum): void {
    if (this.authStatusEmitOnValues.includes(newAuthStatus)) {
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
