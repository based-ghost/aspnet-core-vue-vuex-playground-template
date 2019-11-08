import store from '@/store';
import { AuthApi } from '@/api';
import { IAuthState, IAuthUser, AuthStatus } from './types';
import { Module, VuexModule, Mutation, MutationAction, getModule } from 'vuex-module-decorators';

export const AuthStatusEnum: { [key: string]: AuthStatus } = {
  NONE: "none",
  PROCESS: "process",
  SUCCESS: "success",
  FAIL: "fail"
};

const initialState = Object.freeze<IAuthState>({
  token: '',
  userName: '',
  password: '',
  rememberMe: false,
  status: AuthStatusEnum.NONE,
});

const authFailureState = Object.freeze<Partial<IAuthState>>({
  token: initialState.token,
  status: AuthStatusEnum.FAIL,
});

@Module({ dynamic: true, store, name: 'auth' })
class Auth extends VuexModule implements IAuthState {
  public token: string = initialState.token;
  public status: AuthStatus = initialState.status;
  public userName: string = initialState.userName;
  public password: string = initialState.password;
  public rememberMe: boolean = initialState.rememberMe;

  public get isUserNameOrPasswordEmpty(): boolean {
    return (!this.userName || !this.password);
  }

  public get isAuthenticated(): boolean {
    return (!!this.token && this.status === AuthStatusEnum.SUCCESS);
  }

  @MutationAction<IAuthUser>({ mutate: ['token', 'status'] })
  public async LoginUser(): Promise<IAuthUser> {
    try {
      const authUser = await AuthApi.login(this.userName, this.password, this.rememberMe);
      return { 
        ...authUser,
      };
    } catch (e) {
      return {
        ...authFailureState,
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