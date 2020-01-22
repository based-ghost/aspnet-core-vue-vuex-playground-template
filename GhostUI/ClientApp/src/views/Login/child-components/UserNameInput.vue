<template>
  <div class="field">
    <div class="control has-icons-left">
      <input
        autofocus
        type="text"
        placeholder="Username"
        v-model.trim="userName"
        :class="['input is-medium', { 'is-danger': isUserNameInvalid }]"
      />
      <span class="icon is-left">
        <font-awesome-icon icon="user" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { AuthModule } from "@/store/modules/auth";

@Component
export default class UserNameInput extends Vue {
  @Prop() public readonly isInputInvalid: boolean;

  get isUserNameInvalid(): boolean {
    return (this.isInputInvalid && !this.userName);
  }

  get userName(): string {
    return AuthModule.userName;
  }
  set userName(value: string) {
    AuthModule.UPDATE_USER_NAME(value);
  }
}
</script>