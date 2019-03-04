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