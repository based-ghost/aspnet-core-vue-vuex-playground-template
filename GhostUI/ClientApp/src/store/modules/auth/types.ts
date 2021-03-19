export const AuthStatusEnum = {
  FAIL: 'fail',
  NONE: 'none',
  PROCESS: 'process',
  SUCCESS: 'success'
} as const;

export type AuthStatusEnum = typeof AuthStatusEnum[keyof typeof AuthStatusEnum];

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