<template>
  <div v-if="show" :class="['fingerprint-spinner', authStatus]">
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
import { AuthStatusEnum } from "../../store/modules/auth";

@Component
export default class Authenticator extends Vue {
  @Prop({ default: 1500 }) private emitTimeout: number;
  @Prop({ default: AuthStatusEnum.None }) private authStatus: string;

  private show: boolean = false;

  @Watch("authStatus")
  private onStatusChange(newValue: string): void {
    if (newValue.isIn(AuthStatusEnum.Success, AuthStatusEnum.Fail)) {
      setTimeout(() => {
        this.$emit(newValue);
      }, this.emitTimeout);
    } else {
      this.show = newValue === AuthStatusEnum.Process;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/scss/components/authenticator.scss";
</style>