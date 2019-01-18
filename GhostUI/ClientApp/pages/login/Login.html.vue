<template>
    <section class="section section-login">
        <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
                <h3 class="title">Login</h3>
                <p class="subtitle">Please login to proceed</p>
                <div class="box">
                    <img id="login-img" src="../../assets/image/based-ghost-crop.png" alt="" width="190">
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
                                    parentClass="remember-me-control" 
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

<script lang="ts" src="./Login.ts"></script>