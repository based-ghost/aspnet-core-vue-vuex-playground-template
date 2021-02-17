export enum AuthStatusEnum {
  NONE = 'none',
  FAIL = 'fail',
  PROCESS = 'process',
  SUCCESS = 'success'
};

export type IAuthUser = Readonly<{
  token?: string;
  userName?: string;
  status?: AuthStatusEnum;
}>;

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