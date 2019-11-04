<template>
  <div
    v-if="show"
    :class="['fingerprint-spinner', authStatus]"
  >
    <div /><div /><div />
    <div /><div /><div />
    <div /><div /><div />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import { AuthStatusEnum } from "../store/modules/auth";

@Component
export default class Authenticator extends Vue {
  public show: boolean = false;

  @Prop({ default: 1500 }) public readonly emitTimeout: number;
  @Prop({ default: AuthStatusEnum.None }) public readonly authStatus: string;

  @Watch("authStatus")
  public onStatusChange(newValue: string): void {
    if (this.authStatusIsSuccessOrFail(newValue)) {
      setTimeout(() => {
        this.$emit(newValue);
      }, this.emitTimeout);
    } else {
      this.show = !!(newValue === AuthStatusEnum.Process);
    }
  }

  public authStatusIsSuccessOrFail(authStatus: string): boolean {
    return [
      String(AuthStatusEnum.Fail),
      String(AuthStatusEnum.Success)
    ].includes(authStatus);
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style/scss/scoped/authenticator.scss";
</style>