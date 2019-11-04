<template>
  <section class="section section-login">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title">Login</h3>
        <p class="subtitle">Please login to proceed</p>
        <div class="box">
          <img
            id="login-img"
            src="../../assets/image/based-ghost-main.png"
            alt="based-ghost-logo"
            width="180"
          />
          <form @submit.prevent="handleLogin">
            <user-name-input :isInputInvalid="invalidInputs" />
            <password-input :isInputInvalid="invalidInputs" />
            <remember-me-input />
            <button class="button is-info is-large is-fullwidth" type="submit">
              <span>Login</span>
              <span class="icon">
                <font-awesome-icon icon="sign-in-alt" />
              </span>
            </button>
            <authenticator
              :authStatus="authStatus"
              @success="onAuthSuccess"
              @fail="onAuthFailure"
            />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { SignalRApi } from "../../api";
import { Authenticator } from "../../components";
import { AuthModule, AuthStatusEnum } from "../../store/modules/auth";
import { UserNameInput, PasswordInput, RememberMeInput } from "./child-components";

@Component({
  components: {
    Authenticator,
    UserNameInput,
    PasswordInput,
    RememberMeInput,
  }
})
export default class Login extends Vue {
  public invalidInputs: boolean = false;
  public authStatus: string = AuthStatusEnum.None;

  get isUserNameOrPasswordEmpty(): boolean {
    return AuthModule.isUserNameOrPasswordEmpty;
  }

  public mounted(): void {
    SignalRApi.startConnection();
  }

  public handleLogin(): void {
    if (this.authStatus === AuthStatusEnum.Process) {
      return;
    }

    if (this.isUserNameOrPasswordEmpty) {
      this.invalidInputs = true;
      this.$snotify.error("Enter user name/password", "Login Error");
      return;
    } 

    this.$snotify.clear();
    this.invalidInputs = false;
    this.authStatus = AuthStatusEnum.Process;

    setTimeout(() => {
      AuthModule.LoginUser()
        .then(() => {
          this.authStatus = AuthStatusEnum.Success;
        })
        .catch(() => {
          this.authStatus = AuthStatusEnum.Fail;
        });
    }, 2500);
  }

  public onAuthSuccess(): void {
    this.$router.push("/dashboard");
  }

  public onAuthFailure(): void {
    this.authStatus = AuthStatusEnum.None;
    this.$snotify.error("Could not authenticate user", "Login Error");
  }
}
</script>