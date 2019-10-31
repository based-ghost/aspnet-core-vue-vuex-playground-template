import { BaseService } from './base.service';
import { ICredentials, IAuthUser } from '../store/modules/auth';

/**
 * Auth API abstraction layer communication via Axios (typescript singleton pattern)
 */
class AuthService extends BaseService {
    private static _authService: AuthService;

    private constructor(controllerName: string) {
        super(controllerName);
    }

    public static get Instance(): AuthService {
        return this._authService || (this._authService = new this('Auth'));
    }

    public async login(credentials: ICredentials): Promise<IAuthUser> {
        const { data } = await this.$http.post<IAuthUser>('Login', credentials);
        return data;
    }

    public async logout(): Promise<any> {
        await this.$http.post('Logout');
    }
}

export const AuthApi = AuthService.Instance;