import { BaseService } from './base.service';
import { Credentials, AuthUser } from '../../store/modules/auth/types';

/**
 * AuthController endpoints
 */
const authService = {
    CONTROLLER_ID: 'Auth',
    LOGIN_RQ: 'Login',
    LOGOUT_RQ: 'Logout'
};

/**
 * Auth API abstraction layer communication via Axios (typescript singleton pattern)
 */
class AuthService extends BaseService {
    private static _authService: AuthService;

    public static get Instance(): AuthService {
        return this._authService || (this._authService = new this(authService.CONTROLLER_ID));
    }

    private constructor(controllerName: string) {
        super(controllerName);
    }

    public async login(credentials: Credentials): Promise<AuthUser> {
        const { data } = await this.$http.post(authService.LOGIN_RQ, credentials);
        return <AuthUser> data;
    }

    public async logout(): Promise<any> {
        const { data } = await this.$http.post(authService.LOGOUT_RQ);
        return data;
    }
}

export const AuthApi = AuthService.Instance;