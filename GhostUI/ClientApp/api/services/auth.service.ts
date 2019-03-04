import { BaseService } from './base.service';
import { ICredentials, IAuthUser } from '../../store/modules/auth';

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

    private constructor(controllerName: string) {
        super(controllerName);
    }

    public static get Instance(): AuthService {
        return this._authService || (this._authService = new this(authService.CONTROLLER_ID));
    }

    public async login(credentials: ICredentials): Promise<IAuthUser> {
        const { data } = await this.$http.post(authService.LOGIN_RQ, credentials);
        return <IAuthUser> data;
    }

    public async logout(): Promise<any> {
        const { data } = await this.$http.post(authService.LOGOUT_RQ);
        return data;
    }
}

export const AuthApi = AuthService.Instance;