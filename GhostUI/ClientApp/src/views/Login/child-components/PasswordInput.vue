<template>
  <div class="field">
    <div class="control has-icons-left has-icons-right">
      <input
        placeholder="Password"
        v-model.trim="password"
        autocomplete="password"
        :type="!showPassword ? 'password' : 'text'"
        :class="['input is-medium', { 'is-danger': isPasswordInvalid }]"
      />
      <span class="icon is-left">
        <font-awesome-icon icon="lock" />
      </span>
      <span
        class="icon is-right icon-clickable"
        @click="showPassword = !showPassword"
        :data-tooltip="!showPassword ? 'Show password' : 'Hide password'"
      >
        <font-awesome-icon :icon="!showPassword ? 'eye' : 'eye-slash'" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AuthModule } from "../../../store/modules/auth";

@Component
export default class PasswordInput extends Vue {
  public showPassword = false;

  @Prop() public readonly isInputInvalid: boolean;

  get isPasswordInvalid(): boolean {
    return this.isInputInvalid && !this.password;
  }

  get password(): string {
    return AuthModule.password;
  }
  set password(value: string) {
    AuthModule.UPDATE_PASSWORD(value);
  }
}
</script>