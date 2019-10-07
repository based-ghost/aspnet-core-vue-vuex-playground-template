import store from '../../../store';
import { AuthApi } from '../../../api';
import { IAuthState, ICredentials } from './types';
import { Module, VuexModule, MutationAction, getModule } from 'vuex-module-decorators';

const initialState: IAuthState = {
  token: '',
  status: '',
  userName: '',
};

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements IAuthState {
  public token: string = initialState.token;
  public status: string = initialState.status;
  public userName: string = initialState.userName;

  public get isAuthenticated(): boolean {
    return (!!this.token && this.status.toLowerCase().includes('success'));
  }

  @MutationAction<IAuthState>({ mutate: ['token', 'status', 'userName'] })
  public async LoginUser(credentials: ICredentials): Promise<IAuthState> {
    try {
      const authUser = await AuthApi.login(credentials);
      return { 
        ...authUser
      };
    } catch (e) {
      return {
        ...initialState,
      };
    }
  }

  @MutationAction<IAuthState>({ mutate: ['token', 'status', 'userName'] })
  public async LogoutUser(): Promise<IAuthState> {
    await AuthApi.logout();
    return {
      ...initialState,
    };
  }
}

export const AuthModule = getModule(Auth); 