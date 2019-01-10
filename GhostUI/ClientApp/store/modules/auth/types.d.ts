export const enum AuthStatusEnum {
    None = 'none',
    Process = 'process',
    Success = "success",
    Fail = "fail"
}

export interface Credentials {
    userName?: string,
    password?: string,
    rememberMe?: boolean
}

export interface AuthUser {
    token?: string,
    status?: string,
    userName?: string
}

export interface AuthState {
    token: string,
    status: string,
    userName: string
}

export interface AuthGetters {
    isAuthenticated: boolean,
    authenticatedUserName: string
}

export interface AuthActions {
    clearAuthState: {},
    authRequest: {
        credentials: Credentials
    },
    authLogout: {}
}

export interface AuthMutations {
    AUTH_SUCCESS: {
        authUser: AuthUser
    },
    AUTH_ERROR: {},
    CLEAR_AUTH_STATE: {}
}