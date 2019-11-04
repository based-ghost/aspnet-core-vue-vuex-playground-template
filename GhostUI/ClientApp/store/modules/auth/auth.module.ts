import store from '../../../store';
import { AuthApi } from '../../../api';
import { IAuthState } from './types';
import { Module, VuexModule, Mutation, MutationAction, getModule } from 'vuex-module-decorators';

const initialState = Object.freeze<IAuthState>({
  token: '',
  status: '',
  userName: '',
  password: '',
  rememberMe: false,
});

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements IAuthState {
  public token: string = initialState.token;
  public status: string = initialState.status;
  public userName: string = initialState.userName;
  public password: string = initialState.password;
  public rememberMe: boolean = initialState.rememberMe;

  public get isUserNameOrPasswordEmpty(): boolean {
    return !this.userName || !this.password;
  }

  public get isAuthenticated(): boolean {
    return (
      !!this.token && this.status.toLowerCase().includes('success')
    );
  }

  @MutationAction<Partial<IAuthState>>({ mutate: ['token', 'status'] })
  public async LoginUser(): Promise<Partial<IAuthState>> {
    try {
      const authUser = await AuthApi.login(this.userName, this.password, this.rememberMe);
      return { 
        ...authUser,
      };
    } catch (e) {
      const { token, status } = initialState;
      return {
        token,
        status,
      };
    }
  }

  @MutationAction<IAuthState>({ mutate: ['token', 'status', 'userName', 'password', 'rememberMe'] })
  public async LogoutUser(): Promise<IAuthState> {
    await AuthApi.logout();
    return {
      ...initialState,
    };
  }

  @Mutation
  public UPDATE_USER_NAME(userName: string): void {
    this.userName = userName;
  }

  @Mutation
  public UPDATE_PASSWORD(password: string): void {
    this.password = password;
  }

  @Mutation
  public UPDATE_REMEMBER_ME(rememberMe: boolean): void {
    this.rememberMe = rememberMe;
  }
}

export const AuthModule = getModule(Auth); 