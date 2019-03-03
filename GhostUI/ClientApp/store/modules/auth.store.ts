import store from '../../store';
import { AuthApi } from '../../api';
import { Module, VuexModule, Mutation, MutationAction, Action, getModule } from 'vuex-module-decorators'

export const enum AuthStatusEnum {
    None = 'none',
    Process = 'process',
    Success = 'success',
    Fail = 'fail'
}

export interface ICredentials {
    userName?: string,
    password?: string,
    rememberMe?: boolean
}

export interface IAuthUser {
    token?: string,
    status?: string,
    userName?: string
}

export interface IAuthState {
    token: string,
    status: string,
    userName: string
}

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements IAuthState {
    public token:    string = '';
    public status:   string = '';
    public userName: string = '';

    public get isAuthenticated(): boolean {
        return (this.token || '').length > 0 && (this.status || '').toLowerCase().trim() === 'success';
    }

    @MutationAction({ mutate: ['token', 'status', 'userName'] })
    public async DoLogin(credentials: ICredentials) {
        const authUser = await AuthApi.login(credentials);
        return {
            token: authUser.token,
            status: authUser.status,
            userName: authUser.userName,
        };
    }

    @Action({ commit: 'RESET_STATE' })
    public async DoLogout() {
        await AuthApi.logout();
    }

    @Mutation
    private RESET_STATE() {
        this.status = '';
        this.token = '';
        this.userName = '';
    }
}

export const AuthModule = getModule(Auth); 