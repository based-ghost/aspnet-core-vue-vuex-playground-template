import { AxiosResponse } from "axios";
import { BaseService } from "./base.service";
import { ICredentials, IAuthUser } from "@/store/modules/auth";

/**
 * Auth API abstraction layer communication via Axios (typescript singleton pattern)
 */
class AuthService extends BaseService {
  private static _authService: AuthService;

  private constructor(controllerName: string) {
    super(controllerName);
  }

  public static get Instance(): AuthService {
    return (
      this._authService || (this._authService = new this("Auth"))
    );
  }

  public async logout(): Promise<AxiosResponse> {
    return await this.$http.post("Logout");
  }
  
  public async login(userName: string, password: string, rememberMe: boolean): Promise<IAuthUser> {
    const credentials: ICredentials = {
      userName,
      password,
      rememberMe,
    };
    const { data } = await this.$http.post<IAuthUser>("Login", credentials);
    return data;
  }
}

export const AuthApi = AuthService.Instance;
