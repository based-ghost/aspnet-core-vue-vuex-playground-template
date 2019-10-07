import store from '../../../store';
import { AuthApi } from '../../../api';
import { IAuthState, ICredentials } from './types';
import { Module, VuexModule, Mutation, MutationAction, Action, getModule } from 'vuex-module-decorators';

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements IAuthState {
    public token:    string = '';
    public status:   string = '';
    public userName: string = '';

    public get isAuthenticated(): boolean {
        return (!!this.token && this.status.toLowerCase().includes('success'));
    }

    @MutationAction<IAuthState>({ mutate: ['token', 'status', 'userName'] })
    public async LoginUser(credentials: ICredentials): Promise<IAuthState> {
        try {
            const authUser = await AuthApi.login(credentials);
            return { ...authUser };
        } catch (e) {
            return {
                token: '',
                status: '',
                userName: '',
            };
        }
    }

    @Action({ commit: 'CLEAR_AUTH_STATE' })
    public async LogoutUser(): Promise<any> {
        await AuthApi.logout();
    }

    @Mutation
    private CLEAR_AUTH_STATE(): void {
        this.status = '';
        this.token = '';
        this.userName = '';
    }
}

export const AuthModule = getModule(Auth); 