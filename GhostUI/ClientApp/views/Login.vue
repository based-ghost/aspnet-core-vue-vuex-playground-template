<template>
    <section class="section section-login">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title">Login</h3>
                <p class="subtitle">Please login to proceed</p>
                <div class="box">
                    <img id="login-img" src="../assets/image/based-ghost-crop.png" alt="" width="190">
                    <form @submit.prevent="handleLogin">
                        <div class="field">
                            <div class="control has-icons-left">
                                <input :class="['input is-large', { 'is-danger' : invalidInputs }]"
                                       type="text"
                                       v-model="credentials.userName"
                                       autofocus=""                                      
                                       placeholder="Username"
                                       name="LoginUser">
                                <span class="icon is-left">
                                    <font-awesome-icon icon="user" />
                                </span>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control has-icons-left has-icons-right">
                                <input :class="['input is-large', { 'is-danger' : invalidInputs }]"
                                       :type="!showPassword ? 'password' : 'text'"                                                                                                                   
                                       v-model="credentials.password"
                                       placeholder="Password"
                                       name="LoginPassword">
                                <span class="icon is-left">
                                    <font-awesome-icon icon="lock" />
                                </span>
                                <span class="icon is-right icon-clickable"
                                      :data-tooltip="!showPassword ? 'Show password' : 'Hide password'"
                                      @click="showPassword = !showPassword">
                                    <font-awesome-icon :icon="!showPassword ? 'eye' : 'eye-slash'" />
                                </span>
                            </div>
                        </div>
                        <v-checkbox trailingLabel="Remember me" 
                                    wrapperClass="remember-me-control" 
                                    :checked="credentials.rememberMe"
                                    @checked="isCheckedState => credentials.rememberMe = isCheckedState" />
                        <button class="button is-info is-large is-fullwidth" type="submit">
                            <span>Login</span>
                            <span class="icon">
                                <font-awesome-icon icon="sign-in-alt" />
                            </span>
                        </button>
                        <authenticator :authStatus="authStatus"                                    
                                       @success="onAuthSuccess"
                                       @fail="onAuthFailure" />
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import { Authenticator } from '../components/loaders';
    import VCheckbox from '../components/controls/checkbox/VCheckbox.render';
    import { AuthStatusEnum, Credentials, AuthActions } from '../store/modules/auth/types';
    import { Dispatcher } from 'vuex-type-helper';
    import { SignalRApi } from '../api';

    @Component({
        components: {
            VCheckbox,
            Authenticator
        }
    })
    export default class Login extends Vue {
        showPassword: boolean = false;
        invalidInputs: boolean = false;
        authStatus: string = AuthStatusEnum.None;
        credentials: Credentials = { userName: '', password: '', rememberMe: false };

        // Configure and connect SignalR directly before this component is mounted to DOM
        beforeMount(): void {
            SignalRApi.startConnection();
        }

        handleLogin(): void {
            // Prevent multiple login requests onClick
            if (this.authStatus === AuthStatusEnum.Process) {
                return;
            }

            if (this.credentials.userName.isEmptyOrWhiteSpace() || this.credentials.password.isEmptyOrWhiteSpace()) {
                // UserName and/or Password is blank
                this.invalidInputs = true;
                this.$snotify.error('Enter user name/password', 'Login Error');
            } else {
                // Login stub code
                this.$snotify.clear();
                this.invalidInputs = false;
                this.authStatus = AuthStatusEnum.Process;

                // Perform stub login, setting delay to show animation/processing
                setTimeout(() => {
                    this.$store.dispatch<Dispatcher<AuthActions>>({ type: 'authRequest', credentials: this.credentials }).then(() => {
                        this.authStatus = AuthStatusEnum.Success;
                    }).catch(() => {
                        this.authStatus = AuthStatusEnum.Fail;
                    })
                }, 2500);
            }
        }

        onAuthSuccess(): void {
            this.$router.push('/dashboard');
        }

        onAuthFailure(): void {
            this.authStatus = AuthStatusEnum.None;
            this.$snotify.error(`Could not authenticate: ${this.credentials.userName}`, 'Login Error');
        }
    }
</script>