export type AuthStatus = "none" | "process" | "success" | "fail";

export type IAuthUser = {
  readonly token?: string;
  readonly userName?: string;
  readonly status?: AuthStatus;
};

export type ICredentials = {
  userName?: string;
  password?: string;
  rememberMe?: boolean;
};

export type IAuthState = {
  token: string;
  userName: string;
  password: string;
  rememberMe: boolean;
  status: AuthStatus;
};