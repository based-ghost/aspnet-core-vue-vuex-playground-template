import { Component, Vue } from 'vue-property-decorator';
import { Authenticator } from '../../components/loaders';
import VCheckbox from '../../components/controls/checkbox/VCheckbox.render';
import { AuthStatusEnum, Credentials, AuthActions } from '../../store/modules/auth/types';
import { Dispatcher } from 'vuex-type-helper';
import { SignalRApi } from '../../api';

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

    // Configure and connect SignalR after this component is mounted to dom
    mounted(): void {
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