export enum AuthStatusEnum {
  NONE = 'none',
  FAIL = 'fail',
  PROCESS = 'process',
  SUCCESS = 'success'
};

export type IAuthUser = {
  readonly token?: string;
  readonly userName?: string;
  readonly status?: AuthStatusEnum;
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
  status: AuthStatusEnum;
};