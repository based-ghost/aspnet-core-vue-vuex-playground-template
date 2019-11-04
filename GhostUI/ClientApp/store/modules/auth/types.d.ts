export const enum AuthStatusEnum {
  None = "none",
  Process = "process",
  Success = "success",
  Fail = "fail"
}

export interface ICredentials {
  userName?: string;
  password?: string;
  rememberMe?: boolean;
}

export interface IAuthUser {
  readonly token?: string;
  readonly status?: string;
  readonly userName?: string;
}

export interface IAuthState {
  readonly token: string;
  readonly status: string;
  readonly userName: string;
  readonly password: string;
  readonly rememberMe: boolean;
}